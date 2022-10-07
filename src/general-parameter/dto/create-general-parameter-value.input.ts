import { InputType, Int, Field } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameter } from "../schemas/general-parameter.entity";

@InputType()
export class GeneralParameterValueInput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idou: Buffer | null;

   @Field()
   name: string;

   @Field()
   shortname: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;
}
