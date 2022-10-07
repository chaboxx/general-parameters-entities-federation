import { CreateGeneralParameterInput } from "./create-general-parameter.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";

@InputType()
export class UpdateGeneralParameterInput extends PartialType(CreateGeneralParameterInput) {
   @Field(() => CustomUuidScalar)
   @IsNotEmpty()
   idgeneralparameter: Buffer;

   @Field()
   @IsString()
   name: string;

   @Field()
   @IsString()
   shortname: string;
}
