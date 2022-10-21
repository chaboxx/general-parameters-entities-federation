import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CustomUuidScalar } from "../../shared/scalars/buffer-scalar";

@InputType()
export class GeneralParameterValueInput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idOu?: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameter?: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameterValue?: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameterType?: Buffer | null;

   @Field()
   @IsString()
   @IsNotEmpty()
   name: string;

   @Field()
   @IsString()
   @IsNotEmpty()
   shortName: string;

   @Field()
   @IsString()
   @IsNotEmpty()
   code: string;

   @Field({ nullable: true })
   @IsString()
   value?: string;

   @Field({ nullable: true })
   @IsString()
   type?: string;
}
