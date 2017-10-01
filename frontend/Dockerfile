FROM node:boron
# MAINTAINER manmohanpanda

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

RUN npm install

COPY . .

# Build the app
RUN npm build

# Expose the app port
EXPOSE 3000

# Start the app
CMD npm start

# Build the Dockerfile into a Docker image
#docker build -t manmohanpanda/newway-frontend .
# List all local images
#docker images
