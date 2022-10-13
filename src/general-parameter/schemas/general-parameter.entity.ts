import { Field, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameterValue } from "./general-parameter-value.entity";

@ObjectType()
export class GeneralParameter {
   @Field(() => CustomUuidScalar)
   idGeneralParameter?: Buffer;

   @Field(() => CustomUuidScalar)
   idOu?: Buffer;

   @Field()
   @IsString()
   name: string;

   @Field()
   @IsString()
   shortName: string;

   @Field()
   createdAt?: Date;
   @Field()
   updatedAt?: Date;

   @Field()
   idUserCreate?: string;

   @Field()
   idUserUpdate?: string;

   @Field(() => [GeneralParameterValue])
   generalParameterValue?: [GeneralParameterValue];
}
