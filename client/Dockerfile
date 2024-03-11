# Stage-1 & specify a name 'builder'
FROM  node:latest AS builder

# Create a directory  and go to the directory 
WORKDIR /app

# Copy the package.json file to my current directory to install the necessary dependence  
COPY package.json .
COPY ./yarn.lock ./

RUN yarn install

COPY . .
EXPOSE 3000

# Build the application
RUN yarn build


# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80

CMD nginx -g 'daemon off;'