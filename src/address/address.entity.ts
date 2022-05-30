import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Address {

    @Field()
    id: number;

    @Field()
    street: string;
    
    @Field()
    city: string;
    
    @Field()
    country: string;
}