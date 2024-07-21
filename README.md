# Next.js + Firebase Template

This repository provides a ready-to-use template featuring Next.js 14, TypeScript, Tailwind CSS, and Firebase integration. The template allows you to use Firebase and Firebase Admin within the same project seamlessly.

## Features

- **Authentication**: Supports email and password login, as well as Google sign-in, with a basic login form included.
- **ShadCN Component Library**: Pre-installed for rapid UI development.
- **Tailwind CSS**: Integrated for easy and efficient styling.

## Prerequirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
- [Ready Firebase project](https://firebase.google.com/docs/web/setup)
- Email/password authentication and Google authentication enabled from the Firebase Console.
- [Firebase service-account.json](https://firebase.google.com/support/guides/service-accounts)

## Setting up the environment

1. **Use this repository as template.** Search from 'Use this template' and press the button.
2. **Open the folder in your preferred Code Editor.**
3. **Run** `npm i`
4. **Configure Environment Variables**

- Create a .env file in the root directory.
- Copy the contents from .env.example into your .env file.
- Fill in the environment variables with your Firebase project's details.
- Specify the file location of your service account JSON file (e.g., ./service_account.json).

## Usage

Once the setup is complete, you can start the development server with:

`npm run dev`

This will start your Next.js application on http://localhost:3000.

## Folder structure

The template uses src-folder to store the code. This template has Next.js with App-router enabled.

- **src/app** contains all the code for shown pages and their routes.
- **src/app/api** contains the API endpoints
- **src/components** contains the code for the reusable components
- **src/configs** contains the code for different configurations (eg. firebase)
- **src/lib** contains the code that is not created with JSX (eg. types, authentication-functions, utility-functions)


## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
