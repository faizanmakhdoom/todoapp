# Base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /mern-docker-setup

# Copy package.json and package-lock.json first (better cache usage)
COPY package*.json ./

# Install dependencies
RUN npm install

COPY .env .
# Copy rest of the backend source code
COPY . .

# Expose the port your backend listens on
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]
