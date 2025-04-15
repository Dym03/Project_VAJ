
# Project VAJ

## Created by DYM0018 and JEC0013

## Getting started

### Install Dependencies

```bash
git clone https://github.com/Dym03/Project_VAJ.git
npm install
cd frontend 
npm install
cd ../backend
npm install
```

### Start Backend Server

```bash
cd backend
npm run dev
```

### Start Frontend Server

```bash
cd frontend
npm run dev
```

## Development: Linting and Formating

```bash
cd frontend
npx eslint .
(optional): npx eslint . --fix
cd ../backend
npx eslint .
(optional): npx eslint . --fix
```

## Project tree

* [backend](./backend)
  * [controllers](./backend/controllers) Takes care of logic
  * [models](./backend/models) Takes care of database connection
  * [routes](./backend/routes) Takes care of routes
  * [prisma](./backend/prisma) Takes care of database, definition of models
* [frontend](./frontend)
  * [src](./frontend/src/)
    * [components](./frontend/src/components) Components used in the app
    * [routes](./frontend/src/routes) Store load functions and actions for export
    * [main](./frontend/src/main.jsx) Defines routing for the project
    * [App](./frontend/src/App.jsx) Main component of the app, take care of the navbar

* [README.md](./README.md)
