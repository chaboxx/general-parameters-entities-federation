import { Resolver, Query, Args, Int, ResolveReference } from "@nestjs/graphql";
import { GeneralParameterValue } from "./schemas/general-parameter-value.entity";
import { GeneralParameterValueService } from "./general-parameter-value.service";
import { CustomUuidScalar } from "src/shared/scalars/buffer-scalar";

@Resolver(() => GeneralParameterValue)
export class GeneralParameterValueResolver {
   constructor(private readonly generalParameterValue: GeneralParameterValueService) {}

   @Query(() => [GeneralParameterValue], { name: "getGeneralParameterValueByArgs" })
   getGeneralParameterValueByArgs(
      @Args("userInput") userInput: string,
      @Args({ name: "limit", type: () => Int, nullable: true }) limit?: number
   ) {
      return this.generalParameterValue.getGeneralParameterValueByArgs(userInput, limit);
   }

   @Query(() => [GeneralParameterValue], { name: "getAllGeneralParameterValues" })
   getAllGeneralParameterValues() {
      return this.generalParameterValue.getAllGeneralParameterValues();
   }

   @Query(() => [GeneralParameterValue], { name: "getGeneralParameterValueByGeneralParameterId" })
   getGeneralParameterValueByGeneralParameterId(
      @Args("idGeneralParameter", { type: () => CustomUuidScalar }) idGeneralParameter: Buffer
   ) {
      return this.generalParameterValue.getGeneralParameterValuesByGeneralParameterId(
         idGeneralParameter
      );
   }
   @Query(() => GeneralParameterValue, { name: "getGeneralParameterValueById" })
   getGeneralParameterValueById(
      @Args("idGeneralParameterValue", { type: () => CustomUuidScalar })
      idGeneralParameterValue: Buffer
   ) {
      return this.generalParameterValue.getGeneralParameterValueById(idGeneralParameterValue);
   }

   @ResolveReference()
    getGeneralParameterValue(ref: { __typename: string, idGeneralParameterValue: string }) {
      return this.generalParameterValue.getGeneralParameterValueById(
         Buffer.from(ref.idGeneralParameterValue, "hex")
      );
    }
}
