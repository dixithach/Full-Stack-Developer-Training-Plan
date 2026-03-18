# Use official Node image
FROM node:18

# Create working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose API port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]