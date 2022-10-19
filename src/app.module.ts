import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "./prisma.service";
import { join } from "path";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { GeneralParameterModule } from "./general-parameter/general-parameter.module";
import { CustomUuidScalar } from "./general-parameter/scalars/buffer-scalar";
import { Entity } from "./general-parameter/schemas/external/entity.schema";

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
   ],
   controllers: [],
   providers: [PrismaService],
})
export class AppModule {}
