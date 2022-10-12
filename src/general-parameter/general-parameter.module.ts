import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GeneralParameterResolver } from "./general-parameter.resolver";
import { GeneralParameterService } from "./general-parameter.service";

@Module({
   providers: [GeneralParameterResolver, GeneralParameterService, PrismaService],
})
export class GeneralParameterModule {}
