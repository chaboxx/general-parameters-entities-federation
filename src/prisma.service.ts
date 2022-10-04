import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { fromBinaryUUID, toBinaryUUID } from "binary-uuid";
import * as short from "short-uuid";

const translator = short();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
   async onModuleInit() {
      await this.$connect();
      this.$use(async (params, next) => {
         console.log("HOOK PARAMS", params);
         if (params.action === "create") {
            if (params.args.data.uuid === undefined) {
               // if no uuid value passed to serialize
               params.args.data.uuid = short.generate();
            }
            if (!Buffer.isBuffer(params.args.data.uuid)) {
               const suuid = params.args.data.uuid.toString();
               const uuid = translator.toUUID(suuid);
               const bin = toBinaryUUID(uuid);
               params.args.data.uuid = bin;
            }
         }
         const result = await next(params);

         if (Array.isArray(result)) {
            return result.map((row) => {
               if (row.uuid) {
                  const uuid = fromBinaryUUID(row.uuid);
                  const suuid = translator.fromUUID(uuid);
                  row.uuid = suuid;
               }
               return row;
            });
         } else {
            if (result.uuid) {
               const uuid = fromBinaryUUID(result.uuid);
               const suuid = translator.fromUUID(uuid);
               result.uuid = suuid;
            }
            return result;
         }
      });
   }

   async enableShutdownHooks(app: INestApplication) {
      this.$on("beforeExit", async () => {
         await app.close();
      });
   }
}
