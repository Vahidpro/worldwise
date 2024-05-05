# WorldWise

WorldWise is a React application that allows users to log in with fake data and save locations on a map.

## Technologies Used

### Frontend
- React.js
- React Router
- Leaflet
- React Leaflet
- React Datepicker

### Development Dependencies
- Vite
- @vitejs/plugin-react
- ESLint
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh

### Other Dependencies
- json-server (v1.0.0-alpha.22)

## Features

### User Authentication
- Users can log in with fake data provided by a JSON server.

### Map Interactions
- Users can view a map powered by Leaflet and React Leaflet.
- Users can save locations on the map.

### Date Picker
- Users can select dates using the React Datepicker component.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Development

### Running the App

1. Start the Vite development server with `npm run dev`.
2. Start the JSON server with `npm run server`. This will serve the fake data for user authentication from the `data/cities.json` file.

### Linting

To lint the codebase, run `npm run lint`. This will check for lint errors and warnings using ESLint and the configured plugins.

## Building for Production

To build the app for production, run `npm run build`. This will create an optimized build of the React app in the `dist` directory.

## Preview

To preview the production build locally, run `npm run preview`. This will start a local server serving the optimized production build.

## License

This code is part of a course curriculum and is intended for educational purposes only.
