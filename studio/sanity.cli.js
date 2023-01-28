require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: `${process.env.SANITY_PROJECT_DATASET}`,
  },
  graphql: {
    tag: "default",
    playground: true,
    generation: "gen3",
    nonNullDocumentFields: false,
  },
  vite: (config) => config,
});