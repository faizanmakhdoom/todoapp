# Stage 1: Build React app
FROM node:18 AS build
# Create and set working directory
WORKDIR /app
# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy rest of the frontend code
COPY . .
# Build production-ready static files
RUN npm run build
# Stage 2: Serve using Nginx
FROM nginx:alpine
# Copy build output to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html
# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]