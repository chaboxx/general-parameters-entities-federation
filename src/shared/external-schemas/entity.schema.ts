import { Directive, Field, ObjectType } from "@nestjs/graphql";
import { CustomUuidScalar } from "src/shared/scalars/buffer-scalar";

@ObjectType()
@Directive('@key(fields: "idEntity")')
@Directive("@extends")
export class Entity {
   @Field(() => CustomUuidScalar)
   @Directive("@external")
   idEntity: Buffer;
}