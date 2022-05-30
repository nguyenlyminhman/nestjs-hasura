import { Module } from '@nestjs/common'
import { HasuraService } from './hasura.service'
import fetcher from 'isomorphic-fetch'
import ApolloClient from 'apollo-boost'

@Module({
  providers: [
    HasuraService,
    {
      provide: 'HASURA',
      useFactory: async () => {
        const client = new ApolloClient({
            uri: process.env.HASURA_GRAPHQL_ENDPOINT,
            fetchOptions: { fetch: fetcher },
            headers: {
              'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
            }
         });

        client.defaultOptions = {
          watchQuery: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
          },
          query: {
            fetchPolicy: 'network-only'
          }
        };

        return client;
      },
    },
  ],
  exports: [HasuraService],
})
export class HasuraModule {}
