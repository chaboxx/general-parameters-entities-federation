import { ObjectType, Field } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameter } from "./general-parameter.entity";
@ObjectType()
export class GeneralParameterValue {
   @Field(() => CustomUuidScalar)
   idGeneralParameterValue: Buffer;

   @Field({ nullable: true })
   idOu: string;

   @Field(() => GeneralParameter, { nullable: true })
   idGeneralParameter?: GeneralParameter | null;

   @Field()
   name: string;

   @Field()
   shortName: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;

   @Field({ nullable: true })
   idUserCreate?: string;

   @Field({ nullable: true })
   idUserUpdate?: string;

   @Field({ nullable: true })
   createdAt?: Date;

   @Field({ nullable: true })
   updatedAt?: Date;
}
