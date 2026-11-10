# GeoInformatik Frontend

Minimal React + Vite application (JavaScript) for the GeoInformatik project.
The backend lives in its own repository, `GeoInformatik-HBRS/backend`.

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (includes `npm`)
- `make` (optional; the npm commands below do the same)

Check your versions:

```bash
node -v
npm -v
```

## Setup and run

```bash
git clone git@github.com:GeoInformatik-HBRS/frontend.git
cd frontend
make local-setup   # same as: npm install
make local-run     # same as: npm run dev
```

Then open **http://localhost:5173** in your browser. Stop the server with `Ctrl+C`.

| Make target        | npm command     | What it does                                  |
|--------------------|-----------------|-----------------------------------------------|
| `make local-setup` | `npm install`   | Installs dependencies from `package-lock.json` |
| `make local-run`   | `npm run dev`   | Starts the dev server on port 5173            |
| –                  | `npm run build` | Builds the production version into `dist/`    |
| –                  | `npm run preview` | Serves the built `dist/` on port 5173       |

The dev server always uses port **5173** (`strictPort`). If that port is busy,
Vite stops with an error instead of switching to another port. Stop the other
process, or start on another allowed port (5170–5180), for example
`npm run dev -- --port 5174`.

## Repository structure

```text
.
├── index.html          # HTML entry page; loads src/main.jsx
├── src/
│   ├── main.jsx        # Mounts the React app into #root
│   ├── App.jsx         # Starter page component
│   └── index.css       # Minimal global styles
├── vite.config.js      # Vite config (React plugin, port 5173)
├── package.json        # Scripts and dependencies
├── package-lock.json   # Exact dependency versions (commit it)
└── Makefile            # local-setup and local-run shortcuts
```

`node_modules/` and `dist/` are generated locally and are not committed.
