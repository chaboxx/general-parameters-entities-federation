import { ObjectType, Field } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
@ObjectType()
export class GeneralParameterValue {
   @Field(() => CustomUuidScalar)
   idGeneralParameterValue: Buffer;

   @Field(() => CustomUuidScalar)
   idGeneralParameter: Buffer;

   @Field(() => CustomUuidScalar)
   idGeneralParameterType?: Buffer;

   @Field()
   idOu?: string;

   @Field()
   name: string;

   @Field()
   shortName: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;

   @Field()
   idUserCreate?: string;

   @Field()
   idUserUpdate?: string;

   @Field()
   createdAt?: Date;

   @Field()
   updatedAt?: Date;
}
