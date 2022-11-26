FROM node:latest
# ADD CUSTOM REGISTRY HERE IF REQUIRED
# ENV CUSTOM_REGISTRY https://registry.npmjs.org/ 
# RUN npm config set strict-ssl false
# RUN npm config set registry $CUSTOM_REGISTRY
#RUN npm install friend-connect -g
RUN node --es-module-specifier-resolution=node file.js
