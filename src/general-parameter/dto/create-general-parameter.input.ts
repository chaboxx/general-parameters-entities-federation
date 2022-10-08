import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { GeneralParameterValueInput } from "./create-general-parameter-value.input";

@InputType()
export class CreateGeneralParameterInput {
   @Field()
   @IsString()
   name: string;

   @Field()
   @IsString()
   shortname: string;

   @Field(() => [GeneralParameterValueInput])
   generalparametervalue?: [GeneralParameterValueInput];
}
