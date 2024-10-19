FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "start"]
