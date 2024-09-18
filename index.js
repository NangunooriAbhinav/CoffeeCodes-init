#!/usr/bin/env node

const { Command } = require("commander");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");

const program = new Command();

program
  .version("1.0.0")
  .argument("<project-name>", "name of the new project")
  .action(async (projectName) => {
    const targetDir = path.join(process.cwd(), projectName);
    const templateDir = path.join(__dirname, "base");

    try {
      await fs.copy(templateDir, targetDir);
      console.log("Project created successfully!");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  });

program.parse(process.argv);
