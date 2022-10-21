import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "./prisma.service";
import { join } from "path";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";

import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { GeneralParameterModule } from "./general-parameter/general-parameter.module";
import { CustomUuidScalar } from "./shared/scalars/buffer-scalar";
import { GeneralParameterValueModule } from "./general-parameter-value/general-parameter-value.module";
import { Entity } from "./general-parameter-value/schemas/external/entity.schema";

@Module({
   imports: [
      GraphQLModule.forRoot<ApolloFederationDriverConfig>({
         driver: ApolloFederationDriver,
         playground: false,
         plugins: [ApolloServerPluginLandingPageLocalDefault()],
         autoSchemaFile: join(process.cwd(), "src/schema.gql"),
         resolvers: { BUFFER: CustomUuidScalar },
         buildSchemaOptions: {
            orphanedTypes: [Entity],
         }
      }),
      GeneralParameterModule,
      GeneralParameterValueModule,
   ],
   controllers: [],
   providers: [PrismaService],
})
export class AppModule {}
