import { Field, InputType } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";

@InputType()
export class GeneralParameterValueInput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idou: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idgeneralparametervalue: Buffer | null;

   @Field()
   name: string;

   @Field()
   shortname: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;
}
