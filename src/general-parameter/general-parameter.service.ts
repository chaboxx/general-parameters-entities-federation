import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

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
            AND: {
               idStatus: {
                  equals: "ACTIVE",
               },
            },
         },
      });
   }

   async getGeneralParameters() {
      return await this.prisma.generalParameter.findMany({
         where: {
            idStatus: {
               equals: "ACTIVE",
            },
         },
      });
   }

   async getGeneralParametersByCode(code: string) {
      return await this.prisma.generalParameter.findMany({
         where: {
            code: {
               equals: code,
            },
         },
      });
   }

   async getGeneralParameterByParentId(idGeneralParameterValue: Buffer) {
      return await this.prisma.generalParameter.findMany({
         where: {
            idGeneralParameterValue,
         },
      });
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
      const userId = Buffer.from(uuid(), "hex");
      const generalParameter = await this.prisma.generalParameter.create({
         data: {
            name: data.name,
            code: data.code,
            shortName: data.shortName,
            idGeneralParameterValue: data?.idGeneralParameterValue,
            // TODO: Fix
            idOu: Buffer.from(uuid(), "hex"),
            idUserCreate: userId,
            idUserUpdate: userId,
            idStatus: "ACTIVE",
         },
      });

      await this.prisma.generalParameterValue.createMany({
         data: data.generalParameterValue.map((item) => ({
            name: item.name,
            code: item.code,
            shortName: item.shortName,
            idGeneralParameter: generalParameter.idGeneralParameter,
            idGeneralParameterType: Buffer.from(uuid(), "hex"),
            idOu: generalParameter.idOu,
            idUserCreate: generalParameter.idUserCreate,
            idUserUpdate: generalParameter.idUserUpdate,
            idStatus: "ACTIVE",
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
            code: data.code,
            idGeneralParameterValue: data?.idGeneralParameterValue,
            generalParameterValue: {
               updateMany: data.generalParameterValue
                  .filter((item) => !!item.idGeneralParameterValue)
                  .map((item) => {
                     if (item.code.length < 3) {
                        throw new BadRequestException("Code must be 3 characters long");
                     }
                     return {
                        where: {
                           idGeneralParameterValue: item.idGeneralParameterValue,
                        },
                        data: item,
                     };
                  }),
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
                     .map((item) => {
                        if (item.code.length < 3) {
                           throw new BadRequestException("Code must be 3 characters long");
                        }
                        return {
                           ...item,
                           name: item.name,
                           shortName: item.shortName,
                           code: item.code,
                           idGeneralParameterType: Buffer.from(uuid(), "hex"),
                           idUserCreate: Buffer.from(uuid(), "hex"),
                           idUserUpdate: Buffer.from(uuid(), "hex"),
                           idStatus: "ACTIVE",
                           idOu: data.idOu,
                        };
                     }),
               },
            },
         },
      });

      return generalParameter;
   }

   // async deleteGeneralParameter(idGeneralParameter: Buffer) {
   //    await this.prisma.generalParameterValue.deleteMany({
   //       where: { idGeneralParameter },
   //    });

   //    const generalParameter = await this.prisma.generalParameter.delete({
   //       where: { idGeneralParameter },
   //    });

   //    return generalParameter;
   // }
   async deleteGeneralParameter(idGeneralParameter: Buffer) {
      const generalParameter = await this.prisma.generalParameter.update({
         where: { idGeneralParameter: idGeneralParameter },
         data: {
            idStatus: "INACTIVE",
            generalParameterValue: {
               updateMany: {
                  where: {
                     idGeneralParameter,
                  },
                  data: {
                     idStatus: "INACTIVE",
                  },
               },
            },
         },
      });

      return generalParameter;
   }
}
