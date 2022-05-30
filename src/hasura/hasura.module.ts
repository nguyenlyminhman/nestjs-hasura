import { Module } from '@nestjs/common';
import { HasuraService } from './hasura.service';

@Module({
  providers: [HasuraService]
})
export class HasuraModule {}
