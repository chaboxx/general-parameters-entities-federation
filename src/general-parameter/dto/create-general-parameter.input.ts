import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CustomUuidScalar } from "../../shared/scalars/buffer-scalar";
import { GeneralParameterValueInput } from "../../general-parameter-value/dto/create-general-parameter-value.input";

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
   idGeneralParameterValue?: Buffer | null;

   @Field(() => [GeneralParameterValueInput])
   generalParameterValue?: [GeneralParameterValueInput];
}
