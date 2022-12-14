import { ObjectType, Field } from "@nestjs/graphql";
import { CustomUuidScalar } from "../../shared/scalars/buffer-scalar";
@ObjectType()
export class GeneralParameterRole {
   @Field(() => CustomUuidScalar)
   idRole: Buffer;

   @Field()
   idOu: string;

   @Field()
   idStatus: string;

   @Field(() => CustomUuidScalar)
   idGeneralParameter: Buffer;

   @Field()
   createdAt?: Date;

   @Field()
   updatedAt?: Date;

   @Field(() => CustomUuidScalar)
   idUserCreate?: Buffer;

   @Field(() => CustomUuidScalar)
   idUserUpdate?: Buffer;
}
