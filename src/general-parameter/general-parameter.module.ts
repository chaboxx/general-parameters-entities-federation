import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GeneralParameterValueResolver } from "./general-parameter-value.resolver";
import { GeneralParameterResolver } from "./general-parameter.resolver";
import { GeneralParameterService } from "./general-parameter.service";

@Module({
   providers: [GeneralParameterResolver, GeneralParameterService, PrismaService,GeneralParameterValueResolver],
})
export class GeneralParameterModule {}
