import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GeneralParameterResolver } from "./general-parameter.resolver";

@Module({
   providers: [GeneralParameterResolver, PrismaService],
})
export class GeneralParameterModule {}
