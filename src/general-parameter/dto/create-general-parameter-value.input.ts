import { Field, InputType } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";

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
   name: string;

   @Field()
   shortName: string;

   @Field()
   code: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;
}
