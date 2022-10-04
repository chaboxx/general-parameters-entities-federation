import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PrismaService } from "src/prisma.service";
import { GeneralParameter } from "./entities/general-parameter.entity";
import { CreateGeneralParameterInput } from "./dto/create-general-parameter.input";
import { UpdateGeneralParameterInput } from "./dto/update-general-parameter.input";

@Resolver(() => GeneralParameter)
export class GeneralParameterResolver {
   constructor(private readonly prismaService: PrismaService) {}

   @Query(() => [GeneralParameter], { name: "generalParameter" })
   async findAll() {
      let x = await this.prismaService.generalparameter.findMany();
      console.log(x);
      let y = x.map((item) => ({
         ...item,
         idgeneralparameter: item.idgeneralparameter.toString("hex"),
      }));
      return y;
   }

   //  @Mutation(() => GeneralParameter)
   //  createGeneralParameter(@Args('createGeneralParameterInput') createGeneralParameterInput: CreateGeneralParameterInput) {
   //    return this.generalParameterService.create(createGeneralParameterInput);
   //  }

   // @Query(() => GeneralParameter, { name: 'generalParameter' })
   // findOne(@Args('id', { type: () => Int }) id: number) {
   //   return this.generalParameterService.findOne(id);
   // }

   // @Mutation(() => GeneralParameter)
   // updateGeneralParameter(@Args('updateGeneralParameterInput') updateGeneralParameterInput: UpdateGeneralParameterInput) {
   //   return this.generalParameterService.update(updateGeneralParameterInput.id, updateGeneralParameterInput);
   // }

   // @Mutation(() => GeneralParameter)
   // removeGeneralParameter(@Args('id', { type: () => Int }) id: number) {
   //   return this.generalParameterService.remove(id);
   // }
}
