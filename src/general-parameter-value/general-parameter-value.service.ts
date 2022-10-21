import { Injectable } from "@nestjs/common";

import "../general-parameter/dto/update-general-parameter.input";

import { PrismaService } from "../prisma.service";

@Injectable()
export class GeneralParameterValueService {
   constructor(private readonly prisma: PrismaService) {}

   async resolveGeneralParameterValue(idGeneralParameter: Buffer) {
      return await this.prisma.generalParameterValue.findMany({
         where: {
            idGeneralParameter,
         },
      });
   }

   async getAllGeneralParameterValues() {
      return await this.prisma.generalParameterValue.findMany();
   }

   async getGeneralParameterValueByArgs(userInput: string, limit?: number) {
      return userInput !== ""
         ? await this.prisma.generalParameterValue.findMany({
              where: {
                 OR: [
                    {
                       name: {
                          contains: userInput,
                       },
                    },
                    {
                       code: {
                          contains: userInput,
                       },
                    },
                    {
                       shortName: {
                          contains: userInput,
                       },
                    },
                 ],
              },
           })
         : await this.prisma.generalParameterValue.findMany({ take: limit });
   }
}
