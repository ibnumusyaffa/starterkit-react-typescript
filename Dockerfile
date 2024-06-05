FROM node:20-bullseye-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app
RUN npm install

# Bundle app source
COPY . /app/

# Build app
RUN npm run build

EXPOSE 3000
USER node
CMD ["npm", "start"]