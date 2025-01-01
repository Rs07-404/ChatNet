# Use Node.js v22
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm run build

# Bundle app source
COPY . .

# Expose the port
EXPOSE 5000

CMD [ "node", "backend/server.js" ]