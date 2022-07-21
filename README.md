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

# AngularX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend API emulation

Run `start:db` for running a fake REST API. This command will start a JSON server with the database file provided in DataBase/db.json, port:1234 (see package.json:scripts).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
