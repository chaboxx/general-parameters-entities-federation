import { ObjectType, Field } from "@nestjs/graphql";
import { GeneralParameterValue } from "./general-parameter-value.entity";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";

@ObjectType()
export class GeneralParameter {
   @Field(() => CustomUuidScalar)
   idGeneralParameter: Buffer;

   @Field()
   @IsString()
   idOu?: string;

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
