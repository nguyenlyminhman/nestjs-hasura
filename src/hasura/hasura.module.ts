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
            uri: 'https://legible-leech-54.hasura.app/v1/graphql',
            fetchOptions: { fetch: fetcher },
            headers: {
              'x-hasura-admin-secret': '27ZacT9xLkXwGsOBbhVlxVfbZi8FtHLJeTFH6juzVVQO46vORuXraah6B22lg1od'
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
