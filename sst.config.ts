import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "devops-lambdas",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      environment: {
        NODE_OPTIONS: "--enable-source-maps",
      },
      bundle: {
        sourcemap: true,
      },
    });
    app.stack(ExampleStack);
  }
} satisfies SSTConfig;
