import { Injectable, NotFoundException } from "@nestjs/common";

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

   async getGeneralParameterValuesByGeneralParameterId(idGeneralParameter: Buffer) {
      return await this.prisma.generalParameterValue.findMany({
         where: {
            idGeneralParameter: {
               equals: idGeneralParameter,
            },
         },
      });
   }

   async getGeneralParameterValueById(idGeneralParameterValue: Buffer) {
      const generalParameterValue = await this.prisma.generalParameterValue.findUnique({
         where: {
            idGeneralParameterValue,
         },
      });
      if (!generalParameterValue) {
         throw new NotFoundException("GeneralParameterValue not found");
      }

      return generalParameterValue;
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
