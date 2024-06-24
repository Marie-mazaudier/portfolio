import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const wordpressSiteUrl = process.env.WORDPRESS_SITE_URL;

if (!wordpressSiteUrl) {
  throw new Error('WORDPRESS_SITE_URL is not defined in your environment variables');
}

const config: CodegenConfig = {
  overwrite: true,
  schema: `${wordpressSiteUrl}/graphql`,
  documents: "graphql/**/*.ts",
  generates: {
    "src/generated/graphql/": {
      preset: "client",
      plugins: [
        "typescript", // Génère les types TypeScript de base
        "typescript-operations", // Génère les types spécifiques aux opérations GraphQL
        "typescript-react-apollo" // Génère les hooks spécifiques à Apollo
      ],
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "graphql-types.ts" // Chemin relatif pour les types de base
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
