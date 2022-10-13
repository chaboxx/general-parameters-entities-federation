import { Injectable, NotFoundException } from "@nestjs/common";

import { CreateGeneralParameterInput } from "./dto/create-general-parameter.input";
import { UpdateGeneralParameterInput } from "./dto/update-general-parameter.input";

import { uuid } from "short-uuid";
import { PrismaService } from "../prisma.service";

@Injectable()
export class GeneralParameterService {
   constructor(private readonly prisma: PrismaService) {}

   async resolveGeneralParameterValue(idGeneralParameter: Buffer) {
      return await this.prisma.generalParameterValue.findMany({
         where: {
            idGeneralParameter,
         },
      });
   }

   async getGeneralParameters() {
      return await this.prisma.generalParameter.findMany();
   }

   async getGeneralParameterById(idGeneralParameter: Buffer) {
      const generalParameter = await this.prisma.generalParameter.findUnique({
         where: {
            idGeneralParameter,
         },
      });
      if (!generalParameter) {
         throw new NotFoundException("GeneralParameter not found");
      }
      return generalParameter;
   }

   async createGeneralParameter(data: CreateGeneralParameterInput) {
      const generalParameter = await this.prisma.generalParameter.create({
         data: {
            name: data.name,
            code: data.code,
            shortName: data.shortName,
            // TODO: Fix
            idOu: new Buffer(uuid(), "base64"),
            idUserCreate: new Buffer(uuid(), "base64"),
            idUserUpdate: new Buffer(uuid(), "base64"),
            idStatus: uuid(),
         },
      });

      await this.prisma.generalParameterValue.createMany({
         data: data.generalParameterValue.map((item) => ({
            name: item.name,
            code: item.code,
            shortName: item.shortName,
            idGeneralParameter: generalParameter.idGeneralParameter,
            idGeneralParameterType: new Buffer(uuid(), "base64"),
            idOu: generalParameter.idOu,
            idUserCreate: new Buffer(uuid(), "base64"),
            idUserUpdate: new Buffer(uuid(), "base64"),
            idStatus: uuid(),
         })),
      });

      const generalParameterObject = await this.prisma.generalParameter.findUnique({
         where: { idGeneralParameter: generalParameter.idGeneralParameter },
      });

      return generalParameterObject;
   }

   async updateGeneralParameter(data: UpdateGeneralParameterInput) {
      const generalParameter = await this.prisma.generalParameter.update({
         where: { idGeneralParameter: data.idGeneralParameter },
         data: {
            name: data.name,
            shortName: data.shortName,
            generalParameterValue: {
               updateMany: data.generalParameterValue
                  .filter((item) => !!item.idGeneralParameterValue)
                  .map((item) => ({
                     where: {
                        idGeneralParameterValue: item.idGeneralParameterValue,
                     },
                     data: item,
                  })),
               deleteMany: {
                  idGeneralParameterValue: {
                     notIn: data.generalParameterValue
                        .filter((item) => !!item.idGeneralParameterValue)
                        .map((item) => item.idGeneralParameterValue),
                  },
               },
               createMany: {
                  data: data.generalParameterValue
                     .filter((item) => !item.idGeneralParameterValue)
                     .map((item) => ({
                        ...item,
                        idOu: data.idOu,
                        name: item.name,
                        shortName: item.shortName,
                        idGeneralParameterType: new Buffer(uuid(), "base64"),
                        idUserCreate: new Buffer(uuid(), "base64"),
                        idUserUpdate: new Buffer(uuid(), "base64"),
                        idStatus: uuid(),
                     })),
               },
            },
         },
      });

      return generalParameter;
   }

   async deleteGeneralParameter(idGeneralParameter: Buffer) {
      await this.prisma.generalParameterValue.deleteMany({
         where: { idGeneralParameter },
      });

      const generalParameter = await this.prisma.generalParameter.delete({
         where: { idGeneralParameter },
      });

      return generalParameter;
   }
}
