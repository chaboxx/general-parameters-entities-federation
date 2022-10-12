import { ObjectType, Field } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
import { GeneralParameter } from "./general-parameter.entity";
@ObjectType()
export class GeneralParameterRole {
   @Field(() => CustomUuidScalar)
   idRole: Buffer;

   @Field()
   idOu: string;

   @Field({ nullable: true })
   idStatus: string;

   @Field(() => GeneralParameter, { nullable: true })
   idGeneralParameter?: GeneralParameter | null;

   @Field({ nullable: true })
   idUserCreate?: string;

   @Field({ nullable: true })
   idUserUpdate?: string;

   @Field({ nullable: true })
   createdAt?: Date;

   @Field({ nullable: true })
   updatedAt?: Date;
}
