import { Field, ObjectType } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
@ObjectType()
export class GeneralParameterValue {
   @Field(() => CustomUuidScalar)
   idGeneralParameterValue?: Buffer;

   @Field(() => CustomUuidScalar, { nullable: true })
   idGeneralParameter?: Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idOu?: Buffer | null;

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

   @Field(() => CustomUuidScalar)
   idUserCreate?: Buffer;

   @Field(() => CustomUuidScalar)
   idUserUpdate?: Buffer;

   @Field(() => Date)
   createdAt?: Date;

   @Field(() => Date)
   updatedAt?: Date;
}
