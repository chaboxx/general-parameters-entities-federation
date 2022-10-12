import { Field, InputType } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameterValueInput } from "./create-general-parameter-value.input";

@InputType()
export class GeneralParameterRoleInput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idOu: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idStatus: Buffer | null;

   @Field(() => [GeneralParameterValueInput])
   generalParameterValue?: [GeneralParameterValueInput];
}
