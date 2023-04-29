# Base image
FROM node:19.4.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable to production
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
