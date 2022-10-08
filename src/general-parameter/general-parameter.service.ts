import { Injectable } from "@nestjs/common";

import { CreateGeneralParameterInput } from "./dto/create-general-parameter.input";
import { UpdateGeneralParameterInput } from "./dto/update-general-parameter.input";

import { PrismaService } from "../prisma.service";

@Injectable()
export class GeneralParameterService {
   constructor(private readonly prisma: PrismaService) {}

   async resolveGeneralParameterValue(idgeneralparameter: Buffer) {
      return await this.prisma.generalparametervalue.findMany({
         where: {
            idgeneralparameter,
         },
      });
   }

   async getGeneralParameters() {
      return await this.prisma.generalparameter.findMany();
   }

   async getGeneralParameterById(idgeneralparameter: Buffer) {
      return await this.prisma.generalparameter.findUnique({
         where: {
            idgeneralparameter,
         },
      });
   }

   async createGeneralParameter(data: CreateGeneralParameterInput) {
      const generalParameter = await this.prisma.generalparameter.create({
         data: {
            name: data.name,
            shortname: data.shortname,
         },
      });

      await this.prisma.generalparametervalue.createMany({
         data: data.generalparametervalue.map((item) => ({
            ...item,
            idgeneralparameter: generalParameter.idgeneralparameter,
         })),
      });

      const generalParameterObject = await this.prisma.generalparameter.findUnique({
         where: { idgeneralparameter: generalParameter.idgeneralparameter },
      });

      return generalParameterObject;
   }

   async updateGeneralParameter(data: UpdateGeneralParameterInput) {
      const generalParameter = await this.prisma.generalparameter.update({
         where: { idgeneralparameter: data.idgeneralparameter },
         data: {
            name: data.name,
            shortname: data.shortname,
         },
      });
      return generalParameter;
   }

   async deleteGeneralParameter(idgeneralparameter: Buffer) {
      await this.prisma.generalparametervalue.deleteMany({
         where: { idgeneralparameter },
      });

      const generalParameter = await this.prisma.generalparameter.delete({
         where: { idgeneralparameter },
      });

      return generalParameter;
   }
}
