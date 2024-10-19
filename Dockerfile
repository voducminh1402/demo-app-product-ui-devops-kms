FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Install `serve` to serve the build folder
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Use `serve` to serve the app
CMD ["serve", "-s", "build"]
