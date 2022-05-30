import { Module } from '@nestjs/common';
import { HasuraModule } from 'src/hasura/hasura.module';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';

@Module({
    imports: [HasuraModule],
    providers: [AddressService, AddressResolver]
})
export class AddressModule { }
