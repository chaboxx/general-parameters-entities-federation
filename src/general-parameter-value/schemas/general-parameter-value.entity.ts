import { Field, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../../shared/scalars/buffer-scalar";
@ObjectType()
export class GeneralParameterValue {
   @Field(() => CustomUuidScalar)
   idGeneralParameterValue?: Buffer;

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameter?: Buffer | null;

   @Field(() => CustomUuidScalar)
   idGeneralParameterType?: Buffer;

   @Field(() => CustomUuidScalar, { nullable: true })
   idOu?: Buffer | null;

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

   @Field({ nullable: true })
   @IsString()
   value?: string;

   @Field({ nullable: true })
   @IsString()
   type?: string;

   @Field(() => CustomUuidScalar)
   idUserCreate?: Buffer;

   @Field(() => CustomUuidScalar)
   idUserUpdate?: Buffer;

   @Field(() => Date)
   createdAt?: Date;

   @Field(() => Date)
   updatedAt?: Date;
}
