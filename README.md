# Project setup: Angular CLI & required global packages

- `npm i -g @angular/cli json-server` (installs globally Angular CLI and JSON server)
- `ng new AngularX --create-application false --strict` (create an empty workspace without application inside and adjust some TypeScript compiler flags to force us to do the right things)
- `cd AngularX`
- `ng g application gl-app --prefix gl --style scss --routing` (creates gl-app application with routing module SCSS styles, "gl" prefix for components and directives)
- `ng add @angular/material` (Add Angular Material components framework)
- `npm i -s @angular/flex-layout @angular/cdk @ngx-translate/core` (Add FlexLayout and NGXTranslate packages)
- `ng add @angular-eslint/schematics` (Adds ESLint support with the recommended support of Angular apps)
- `npm install eslint-plugin-import eslint-config-airbnb-typescript --save-dev` (Add AirBnB styleguide rules for ESLint)
- `npm i -d prettier eslint-config-prettier eslint-plugin-prettier` (Adds Prettier support with configs)
- `npm i -d husky lint-staged` (Use Husky tasks for Git hooks)
- `npm i -d webpack-bundle-analyzer` (Add bundle analysis tool)

# NgRx setup

Note that NgRx supports `ng add`. In this case CLI will update necessary files in order to have working state management from the scratch:

- `ng add @ngrx/store@latest --no-minimal` (installs and creates configaration for the app state)
- `ng add @ngrx/effects@latest` (installs effects and updates modules)
- `ng add @ngrx/entity@latest` (installs entity)
- `ng add @ngrx/store-devtools@latest` (adds devtools support)
- `ng add @ngrx/schematics@latest` (adds schematics support)

Or use manual installation via NMP/Yarn (preffered):

- `npm i @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save` (download Store/Effects/Entity/DevTools packages without modification of application files)
- `npm i @ngrx/schematics --save-dev` (adds schematics support)

## Initial State setup

- `ng g @ngrx/schematics:store State --root --module app.module.ts` (Generate the initial state management and register it within the App)

## Initial Effects setup

- `ng g @ngrx/schematics:effect App --root --module app.module.ts` (Generate the root effects and register it within the App)

## Generate Feature store

- `ng generate @ngrx/schematics:store feed --project gl-app --module features/feed/feed.module.ts --state-path features/feed/state+`

## Genereate Feature Actions

- `ng generate @ngrx/schematics:action features/feed/state+/feed`

## Genereate Feature Reducer

- `ng generate @ngrx/schematics:reducer features/feed/state+/feed`

## Genereate Feature Selectors

- `ng generate @ngrx/schematics:selector features/feed/state+/feed`

# AngularX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend API emulation

Run `start:db` for running a fake REST API. This command will start a JSON server with the database file provided in DataBase/db.json, port:1234 (see package.json:scripts).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Basic architecture

- `ng g m core` (create Core module)
- `ng g c core/layout/main-layout` (Create main layout)
- `ng g m features/home --route home --module app.module.ts`
- `ng g m features/about --route about --module app.module.ts`

## Add features to the shared module

- Component ` ng g c shared/components/card --change-detection OnPush --module shared --project gl-app`
- Directive ` ng g d shared/directives/identity --module shared --project gl-app`
- Pipe ` ng g p shared/pipes/noData --module shared --project gl-app`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Lint

Run `npm run lint` to statically analyse the project using ESLint.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Analyze project bundles

Run `npm run analyze` in order to see packages included in the project's build.
