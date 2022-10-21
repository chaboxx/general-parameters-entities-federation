import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GeneralParameterValueResolver } from "./general-parameter-value.resolver";
import { GeneralParameterValueService } from "./general-parameter-value.service";

@Module({
   providers: [GeneralParameterValueResolver, GeneralParameterValueService, PrismaService],
})
export class GeneralParameterValueModule {}
