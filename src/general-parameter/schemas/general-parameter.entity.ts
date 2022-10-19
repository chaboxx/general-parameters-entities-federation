import { Directive, Field, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameterValue } from "./general-parameter-value.entity";

@ObjectType()
@Directive('@key(fields: "idGeneralParameter")')
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
   code: string;

   @Field(() => Date)
   createdAt?: Date;

   @Field(() => Date)
   updatedAt?: Date;

   @Field(() => CustomUuidScalar)
   idUserCreate?: Buffer;

   @Field(() => CustomUuidScalar)
   idUserUpdate?: Buffer;

   @Field(() => [GeneralParameterValue])
   generalParameterValue?: [GeneralParameterValue];
}
