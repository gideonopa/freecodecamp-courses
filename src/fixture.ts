import { Config } from "./typings";

export const exampleConfig: Config = {
  bashrc: {
    // The .bashrc file to be sourced
    enabled: true, // Whether or not to source .bashrc file
    path: "./.freeCodeCamp/.bashrc", // Relative path to .bashrc file
  },
  path: ".freeCodeCamp", // Relative path to tooling directory where scripts will be run
  scripts: {
    // Scripts linked to extension commands
    "develop-course": "npm run develop", // Run when `Develop Course` command is executed
    "run-course": "npm run start", // Run when `Run Course` command is executed
    test: {
      // Run when `Test` command is executed
      functionName: "handleMessage", // Name of the function to be called
      arguments: [
        {
          message: "Hello World!",
          type: "info",
        },
      ], // Arguments to be passed to the function
    },
  },
  workspace: {
    // Workspace settings
    files: [
      // Files to be opened in workspace
      {
        path: "README.md", // Relative path to file
        order: {
          // Order to display file in workspace. Similar to grid-template-area
          rows: [0], // First row
          cols: [0], // First column
        },
      },
    ],
    previews: [
      // Previews to be opened in workspace
      {
        open: true, // Whether or not to open preview
        order: {
          // Order to display preview in workspace
          rows: [0], // First row
          cols: [1], // Second column
        },
        timeout: 100, // Timeout before opening preview, if required
        url: "https://www.freecodecamp.org/", // URL to open
      },
    ],
    terminals: [
      // Terminals to be opened in workspace
      {
        directory: ".", // Relative path to open terminal with
        message: "'Hello World!'", // Message to display in terminal
        name: "Camper", // Name of terminal
        order: {
          // Order to display terminal in workspace
          rows: [1], // Second row
          cols: [0, 1], // Span across first and second columns
        },
        show: true, // Whether or not to show terminal
      },
    ],
  },
};
