import { GraphQLScalarType, Kind, ValueNode } from "graphql";

import { Buffer } from "node:buffer";

export const CustomUuidScalar = new GraphQLScalarType({
   name: "BUFFER",
   serialize: (value: Buffer) => {
      return value.toString("hex");
   },
   parseValue: (value: string) => {
      return Buffer.from(value, "hex");
   },
   parseLiteral: (ast: ValueNode) => {
      if (ast.kind === Kind.STRING) {
         return Buffer.from(ast.value, "hex");
      }
      return null;
   },
});
