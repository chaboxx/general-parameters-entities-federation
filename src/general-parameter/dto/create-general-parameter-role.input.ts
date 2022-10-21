import { Field, InputType } from "@nestjs/graphql";
import { CustomUuidScalar } from "../../shared/scalars/buffer-scalar";
import { GeneralParameterValueInput } from "../../general-parameter-value/dto/create-general-parameter-value.input";

@InputType()
export class GeneralParameterRoleInput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idOu: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idStatus: Buffer | null;

   @Field(() => [GeneralParameterValueInput])
   generalParameterValue?: [GeneralParameterValueInput];
}
