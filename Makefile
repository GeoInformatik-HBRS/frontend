.PHONY: local-setup local-run

# Install dependencies exactly as recorded in package-lock.json
local-setup:
	npm install

# Start the Vite dev server on http://localhost:5173
local-run:
	npm run dev
