import { Directive, Field, ObjectType } from "@nestjs/graphql";

import { CustomUuidScalar } from "src/general-parameter/scalars/buffer-scalar";
import { GeneralParameterValue } from "../general-parameter-value.entity";

@ObjectType()
@Directive('@key(fields: "idEntity")')
@Directive("@extends")
export class Entity {
   @Field(() => CustomUuidScalar)
   @Directive("@external")
   idEntity: Buffer;

   @Field(() => GeneralParameterValue)
   market?: GeneralParameterValue;

}