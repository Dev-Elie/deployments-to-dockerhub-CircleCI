FROM node:alpine as frontend
WORKDIR /app 
COPY package.json ./ 
COPY package-lock.json ./ 
COPY ./ ./ 
RUN npm install
CMD ["npm", "run", "start"] 

# docker build . -t react-docker-app
# docker run -it -p 4001:3000 react-docker-app
# docker ps
# docker kill $(docker ps -q)

