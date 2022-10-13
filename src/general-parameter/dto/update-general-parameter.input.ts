import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { UpdateGeneralParameterValueInput } from "./update-general-parameter-value.entity";

@InputType()
export class UpdateGeneralParameterInput {
   @Field(() => CustomUuidScalar)
   @IsNotEmpty()
   idOu: Buffer;

   @Field(() => CustomUuidScalar)
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

   @Field(() => [UpdateGeneralParameterValueInput], { nullable: true })
   generalParameterValue?: UpdateGeneralParameterValueInput[];
}
