import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Resolver()
@Resolver(() => Address)
export class AddressResolver {

    constructor(private addressService: AddressService) { }

    @Query(() => Address, { name: "getAddress" })
    getAddress() {
        return this.addressService.getAddress();

        // let a = new Address();
        // a.id = 1,
        // a.city= 'city'
        // return [a]
    }
}
