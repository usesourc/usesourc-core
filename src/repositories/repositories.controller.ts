import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RepositoriesService } from './repositories.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';

@Controller()
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @MessagePattern('createRepository')
  create(@Payload() createRepositoryDto: CreateRepositoryDto) {
    return this.repositoriesService.create(createRepositoryDto);
  }

  @MessagePattern('findAllRepositories')
  findAll() {
    return this.repositoriesService.findAll();
  }

  @MessagePattern('findOneRepository')
  findOne(@Payload() id: number) {
    return this.repositoriesService.findOne(id);
  }

  @MessagePattern('updateRepository')
  update(@Payload() updateRepositoryDto: UpdateRepositoryDto) {
    return this.repositoriesService.update(updateRepositoryDto.id, updateRepositoryDto);
  }

  @MessagePattern('removeRepository')
  remove(@Payload() id: number) {
    return this.repositoriesService.remove(id);
  }
}
