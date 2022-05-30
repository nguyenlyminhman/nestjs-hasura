import { Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import * as q from '../hasura/gql/query'

@Injectable()
export class AddressService {

    constructor(
        private readonly hasuraService: HasuraService,
    ) { }

    async getAddress() {
        let rs = await this.hasuraService.query({
            query: q.getAddressQuery,
            variables: { address_id: 1 }
        });

        console.log(rs["data"]["address_by_pk"]);

        return rs["data"]["address_by_pk"];
        
    }
}
