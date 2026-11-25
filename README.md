# GeoSpotter

GeoSpotter is a React learning project built around location-based data.

The app displays locations in Kenya with latitude and longitude coordinates. It is being built step by step to learn React components, props, state, filtering, and eventually web mapping.

## Tech Stack

- React
- Vite
- JavaScript
- Git
- GitHub

## Getting Started

### Prerequisites

Make sure you have these installed:

- Node.js
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/davy254/geospotter.git
```

Move into the project folder:

```bash
cd geospotter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:5173/
```

## Current Features

- Display locations in Kenya
- Show latitude and longitude
- Search locations by name
- Filter locations by type

## Planned Features

- Location details view
- Interactive web map
- API data
- Saved or favorite locations

## Project Structure

```text
src/
  components/
  data/
  App.jsx
  main.jsx
```

## Coordinate Format

Locations are stored using decimal degrees:

```js
lat: latitude
lng: longitude
```

This format is suitable for later use with web mapping libraries.

## Commit Convention

This project uses Conventional Commits:

- `feat`: a new feature
- `fix`: a bug fix
- `chore`: maintenance or setup
- `docs`: documentation updates
- `style`: styling or formatting
- `refactor`: code improvement without changing behavior