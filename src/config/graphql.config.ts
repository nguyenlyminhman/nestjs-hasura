import { ApolloDriver } from "@nestjs/apollo";
import { join } from "path";

export const GraphqlConfig: any = {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
}