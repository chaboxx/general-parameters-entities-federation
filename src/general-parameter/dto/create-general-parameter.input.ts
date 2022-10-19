import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameterValueInput } from "./create-general-parameter-value.input";

@InputType()
export class CreateGeneralParameterInput {
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

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameterParent?: Buffer | null;

   @Field(() => [GeneralParameterValueInput])
   generalParameterValue?: [GeneralParameterValueInput];
}
