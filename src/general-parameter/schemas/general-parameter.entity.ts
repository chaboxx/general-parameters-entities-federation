import { Field, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../../shared/scalars/buffer-scalar";
import { GeneralParameterValue } from "../../general-parameter-value/schemas/general-parameter-value.entity";

@ObjectType()
export class GeneralParameter {
   @Field(() => CustomUuidScalar)
   idGeneralParameter?: Buffer;

   @Field(() => CustomUuidScalar)
   idOu?: Buffer;

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameterValue?: Buffer | null;

   @Field()
   @IsString()
   name: string;

   @Field()
   @IsString()
   shortName: string;

   @Field()
   @IsString()
   code: string;

   @Field()
   @IsString()
   idStatus: string;

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
