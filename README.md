# WorldWise

WorldWise is a React application that allows users to log in with fake data and save locations on a map.

## Live Preview
**For Live Preview:** Use the below information to log in and access the app.

**Username**

```
jack@example.com
```

**Password**

```
qwerty
```

## Screenshots

| Home Page  | Login |
| ------------- | ------------- |
| ![Screenshot 2024-05-05 105242](https://github.com/Vahidpro/worldwise/assets/43805831/acfbfe88-3439-45a8-b704-21b9a419fb76) | ![Screenshot 2024-05-05 104359](https://github.com/Vahidpro/worldwise/assets/43805831/139b3f6b-194e-4dd1-b6c4-a0164074bd4a) |

### Main Page After Login

![Screenshot 2024-05-05 104709](https://github.com/Vahidpro/worldwise/assets/43805831/110e7411-96eb-4aff-9a5c-6c9665ac7dbc)

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
