import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameter } from "./general-parameter.entity";
@ObjectType()
export class GeneralParameterValue {
   @Field(() => CustomUuidScalar)
   idgeneralparametervalue: Buffer;

   @Field()
   idou: string;

   @Field((type) => GeneralParameter, { nullable: true })
   idgeneralparameter?: GeneralParameter | null;

   @Field()
   name: string;

   @Field()
   shortname: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;

   @Field({ nullable: true })
   idusercreate?: string;

   @Field({ nullable: true })
   createdate?: Date;

   @Field({ nullable: true })
   iduserupdate?: string;

   @Field({ nullable: true })
   updatedate?: Date;
}
