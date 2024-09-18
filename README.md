# coffeecodes-init

`coffeecodes-init` is a simple CLI tool to initialize a custom Next.js project with a pre-defined template. This tool allows you to quickly scaffold out a Next.js project with custom configurations, dependencies, and project structure tailored to your needs.

## Features

- Custom Next.js template setup
- Pre-configured styles, pages, and structure
- CLI tool for easy and fast initialization of projects
- Extendable and modifiable template

## Installation

To use `coffeecodes-init`, you can install it globally via npm:

```bash
npm install -g coffeecodes-init
```

Alternatively, you can use `npx` to run it without installing globally:

```bash
npx coffeecodes-init <project-name>
```

## Usage

After installation, you can create a new Next.js project by running:

```bash
coffeecodes-init <project-name>
```

Replace `<project-name>` with the name of your new project. This will create a directory with the given project name, copy the custom Next.js template, and install the required dependencies.

### Example

```bash
coffeecodes-init my-next-app
```

This will create a `my-next-app` folder with a basic Next.js structure.

## Development

To contribute or modify the CLI tool locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/coffeecodes-init.git
   ```
2. Navigate to the project directory:

   ```bash
   cd coffeecodes-init
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Link the package locally for testing:

   ```bash
   npm link
   ```

5. Run the CLI tool locally:
   ```bash
   coffeecodes-init <project-name>
   ```

## File Structure

The template files used to initialize new projects are stored in the `template` directory of this repository. You can modify these files to suit your own requirements.

```
coffeecodes-init/
├── bin/                   # CLI entry point
├── base/              # Your custom Next.js template files
│   ├── app/
│   ├── lib/
│   ├── config.ts
│   └── package.json
├── index.js               # Main script for the CLI tool
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Dependencies

This project uses the following key dependencies:

- [`commander`](https://www.npmjs.com/package/commander): To manage CLI arguments and options.
- [`fs-extra`](https://www.npmjs.com/package/fs-extra): For enhanced file system operations like copying files and directories.

## Contributing

If you want to contribute to the project, feel free to fork the repository, create a new branch, and submit a pull request. Please ensure your code adheres to the existing code style and includes relevant test coverage.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```

### Customization Points:
1. **Project Name**: Replace `coffeecodes-init` with your actual project name.
2. **Repository Links**: Change the GitHub repository link to point to your project repository.
3. **Description**: Adjust the project description to better reflect the purpose and features of your CLI tool.
4. **Contributing Section**: Include a link to the contribution guide if available.

This `README.md` provides users with all necessary details, from installation to development and contribution. Let me know if you need further customization!
```
