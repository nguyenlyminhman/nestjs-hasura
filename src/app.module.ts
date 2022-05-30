import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HasuraModule } from './hasura/hasura.module';
import { AddressModule } from './address/address.module';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlConfig } from './config/graphql.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot(GraphqlConfig),
    AddressModule,
    HasuraModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
