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

   @Field({ nullable: true })
   idUserCreate?: string;

   @Field({ nullable: true })
   createdAt?: Date;

   @Field({ nullable: true })
   idUserUpdate?: string;

   @Field({ nullable: true })
   updatedAt?: Date;

   @Field(() => [GeneralParameterValue], { nullable: true })
   generalParameterValue?: [GeneralParameterValue] | null;
}
