import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "./prisma.service";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { GeneralParameterModule } from "./general-parameter/general-parameter.module";
import { CustomUuidScalar } from "./shared/scalars/buffer-scalar";
import { GeneralParameterValueModule } from "./general-parameter-value/general-parameter-value.module";

@Module({
   imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
         driver: ApolloDriver,
         playground: false,
         plugins: [ApolloServerPluginLandingPageLocalDefault()],
         autoSchemaFile: join(process.cwd(), "src/schema.gql"),
         resolvers: { BUFFER: CustomUuidScalar },
      }),
      GeneralParameterModule,
      GeneralParameterValueModule,
   ],
   controllers: [],
   providers: [PrismaService],
})
export class AppModule {}
