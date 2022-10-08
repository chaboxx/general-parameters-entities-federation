import { Resolver, Query, Mutation, Args, ResolveField, Root } from "@nestjs/graphql";
import { GeneralParameterService } from "./general-parameter.service";
import { GeneralParameter } from "./schemas/general-parameter.entity";
import { CreateGeneralParameterInput } from "./dto/create-general-parameter.input";
import { UpdateGeneralParameterInput } from "./dto/update-general-parameter.input";
import { CustomUuidScalar } from "./scalars/buffer-scalar";

@Resolver(() => GeneralParameter)
export class GeneralParameterResolver {
   constructor(private readonly generalParameter: GeneralParameterService) {}

   @ResolveField()
   generalparametervalue(@Root() generalparameter: GeneralParameter) {
      return this.generalParameter.resolveGeneralParameterValue(
         generalparameter.idgeneralparameter
      );
   }

   @Query(() => [GeneralParameter], { name: "generalParameters" })
   getGeneralParameters() {
      return this.generalParameter.getGeneralParameters();
   }

   @Query(() => GeneralParameter, { name: "getGeneralParameterById" })
   findOne(@Args("id", { type: () => CustomUuidScalar }) id: Buffer) {
      return this.generalParameter.getGeneralParameterById(id);
   }

   @Mutation(() => GeneralParameter)
   createGeneralParameter(
      @Args("createGeneralParameterInput")
      createGeneralParameterInput: CreateGeneralParameterInput
   ) {
      return this.generalParameter.createGeneralParameter(createGeneralParameterInput);
   }

   @Mutation(() => GeneralParameter)
   updateGeneralParameter(
      @Args("updateGeneralParameterInput")
      updateGeneralParameterInput: UpdateGeneralParameterInput
   ) {
      return this.generalParameter.updateGeneralParameter(updateGeneralParameterInput);
   }

   @Mutation(() => GeneralParameter)
   deleteGeneralParameter(@Args("id", { type: () => CustomUuidScalar }) id: Buffer) {
      return this.generalParameter.deleteGeneralParameter(id);
   }
}
