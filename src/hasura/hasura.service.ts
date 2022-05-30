import { Inject, Injectable } from '@nestjs/common'
import { ApolloQueryResult } from 'apollo-boost'

@Injectable()
export class HasuraService {
  constructor(@Inject('HASURA') private readonly hasuraClient) {}
    
  query<T>(params): Promise<ApolloQueryResult<T>> {
    return this.hasuraClient.query(params)
  }
}
