# Stage-1 & specify a name 'builder'
FROM  node:latest AS builder

# Create a directory  and go to the directory 
WORKDIR /app

# Copy the package.json file to my current directory to install the necessary dependence  
COPY package.json .
COPY ./yarn.lock ./

RUN yarn install --ignore-engines

COPY . .
EXPOSE 8080

# Build the application
RUN yarn build

CMD ["yarn", "dev"]
