import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "./prisma.service";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { GeneralParameterModule } from "./general-parameter/general-parameter.module";

import { CustomUuidScalar } from "./scalars";

@Module({
   imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
         driver: ApolloDriver,
         playground: false,
         plugins: [ApolloServerPluginLandingPageLocalDefault()],
         autoSchemaFile: join(process.cwd(), "src/schema.gql"),
         buildSchemaOptions: { dateScalarMode: "timestamp" },
         // resolvers: { uuid: CustomUuidScalar },
      }),
      GeneralParameterModule,
   ],
   controllers: [],
   providers: [PrismaService],
})
export class AppModule {}
