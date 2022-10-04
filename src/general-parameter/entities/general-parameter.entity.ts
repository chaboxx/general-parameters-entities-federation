import { ObjectType, Field, Int } from "@nestjs/graphql";
import { GeneralParameterValue } from "./general-parameter-value.entity";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "src/scalars";

@ObjectType()
export class GeneralParameter {
   @Field()
   idgeneralparameter: string;

   @Field({ nullable: true })
   @IsString()
   idou?: string;

   @Field()
   @IsString()
   name: string;

   @Field()
   @IsString()
   shortname: string;

   @Field({ nullable: true })
   idusercreate?: string;

   @Field({ nullable: true })
   createdate?: Date;

   @Field({ nullable: true })
   iduserupdate?: string;

   @Field({ nullable: true })
   updatedate?: Date;

   @Field(() => [GeneralParameterValue], { nullable: true })
   generalparametervalue?: [GeneralParameterValue] | null;
}
