import { Resolver, ResolveReference ,Query} from "@nestjs/graphql";
import { GeneralParameterService } from "./general-parameter.service";

import { GeneralParameterValue } from "./schemas/general-parameter-value.entity";

@Resolver(() => GeneralParameterValue)
export class GeneralParameterValueResolver {
   constructor(private readonly generalParameter: GeneralParameterService) {}

   @Query(()=>String)
   getHello(){
    return "Hello";
   }

   @ResolveReference()
    resolvereferance(ref: { __typename: string, idGeneralParameterValue: string }) {
      return this.generalParameter.getGeneralParameterValue(ref.idGeneralParameterValue);
    }
}
