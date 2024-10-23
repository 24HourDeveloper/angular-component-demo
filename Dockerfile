FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

# Expose the development server port (default is 4200 for Angular)
EXPOSE 4200

CMD [ "npm", "start" ]
