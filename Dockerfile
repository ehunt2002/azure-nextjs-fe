# Use Node.js as the base image
FROM node:18.04

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
