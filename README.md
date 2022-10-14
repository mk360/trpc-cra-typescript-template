## tRPC-Create React App-TypeScript template

This is a vanilla repository template powered by:
- tRPC
- Express
- Create React App
- TypeScript

### File structure
- `frontend` is a CRA app.
- `backend` contains the backend server, using a very simple tRPC router, an Express instance and a Hello World route. The port it runs in is set to 3600 by default.
- The root `node_modules` contains all the npm dependencies for your backend server. Your CRA app has its own `node_modules`.

### Setup

When you're done cloning the repo, simply run `npm run setup`. The command should install all necessary dependencies, both for your front and backend. You can run your backend server with `npm run back` (after at least one TypeScript compilation run). You can run your frontend using `npm run front`. If you get a "Hello world!" display, congratulations, everything is set up correctly.

If you edit environment variables, you'll need to restart both environments.

### Features
- Built-in environment variables support
- Out-of-the-box tRPC integration with Express
- Out-of-the-box tRPC integration with React
