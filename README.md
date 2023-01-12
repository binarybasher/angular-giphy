# Giphy search
v0.1
- Break design down into parts (components)
- Create initial app with bootstrap css (optional)
  - ng new "angular-giphy" --style=scss
  - npm install --save bootstrap
- Create draft search component with input and button
- Add search component to page
- Create draft search service
- Add button action to call service -> giphy and output to result$
- Create draft single thumbnail component
- Add single thumbnail in loop for results
- Add fullscreen image functionality to thumbnail component (modal? or new route, although would need to cache image results if we do this to avoid security concerns)
- Create draft pagination component
- Add pagination component to search component
- Adjust responsiveness and styles
- Test, where time permits

## Improvements
- tests... should add unit tests for each function and service
- styling, perhaps normalise the image thumbnail size, improve the fullscreen
- error handling of api requests
- refactor and move code from app.component for manageability
- input sanitization
- server side api wrapper, to avoid presenting thirdparty key in client configuration
- server side api throttling, to prevent over-use
- authenticated users to server side, allows personalisation, audit, etc.
- search history for user (doesn't techically require authentication if cached in browser local storage)
- search history for all users (requires server side api wrapper)
- most commonly search terms (top 10?) (requires server side wrapper)
- save results, share results...
- pagination could have jump to page, first/last jump links
- could link to google lens and provide a reverse image search for any of the results


---

# AngularGiphy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
