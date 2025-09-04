# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app
# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build folder to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx runs by default, so no CMD needed
CMD ["nginx", "-g", "daemon off;"]