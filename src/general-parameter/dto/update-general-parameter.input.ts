import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { UpdateGeneralParameterValueInput } from "./update-general-parameter-value.input";

@InputType()
export class UpdateGeneralParameterInput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idOu?: Buffer | null;

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

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameterParent?: Buffer | null;

   @Field(() => [UpdateGeneralParameterValueInput], { nullable: true })
   generalParameterValue?: UpdateGeneralParameterValueInput[];
}
