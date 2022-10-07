import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GeneralParameterService } from "./general-parameter.service";
import { GeneralParameterResolver } from "./general-parameter.resolver";

@Module({
   providers: [
      GeneralParameterResolver,
      GeneralParameterService,
      PrismaService,
   ],
})
export class GeneralParameterModule {}
