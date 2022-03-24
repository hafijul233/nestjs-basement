import { plainToClass } from 'class-transformer';
import { Repository, DeepPartial } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { ModelEntity } from '../serializers/model.serializer';

export class ModelRepository<T, K extends ModelEntity> extends Repository<T> {
  async get(
    id: string,
    relations: string[] = [],
    throwsException = false,
  ): Promise<K | null> {
    return await this.findOne({
      where: { id },
      relations,
    })
      .then(entity => {
        if (!entity && throwsException) {
          return Promise.reject(
            new NotFoundException('Model not found.'),
          );
        }

        return Promise.resolve(entity ? this.transform(entity) : null);
      })
      .catch(error => Promise.reject(error));
  }

  async createEntity(
    inputs: DeepPartial<T>,
    relations: string[] = [],
  ): Promise<K> {
    return this.save(inputs)
      .then(async entity => await this.get((entity as any).id, relations))
      .catch(error => Promise.reject(error));
  }

  async updateEntity(
    entity: K,
    inputs: QueryDeepPartialEntity<T>,
    relations: string[] = [],
  ): Promise<K> {
    return this.update(entity.id, inputs)
      .then(async () => await this.get(entity.id, relations))
      .catch(error => Promise.reject(error));
  }

  transform(model: T, transformOptions = {}): K {
    return plainToClass(ModelEntity, model, transformOptions) as K;
  }

  transformMany(
    models: T[],
    transformOptions = {},
  ): K[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}