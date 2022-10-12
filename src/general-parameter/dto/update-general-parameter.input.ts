import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { CreateGeneralParameterInput } from "./create-general-parameter.input";

@InputType()
export class UpdateGeneralParameterInput extends PartialType(CreateGeneralParameterInput) {
   @Field(() => CustomUuidScalar)
   @IsNotEmpty()
   idGeneralParameter: Buffer;

   @Field()
   @IsString()
   name: string;

   @Field()
   @IsString()
   shortName: string;

   @Field()
   @IsString()
   code: string;
}
