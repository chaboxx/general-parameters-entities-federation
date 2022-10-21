import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { GeneralParameterValue } from "./schemas/general-parameter-value.entity";
import { GeneralParameterValueService } from "./general-parameter-value.service";

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
}
