FROM node:20-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_CLIENT_ID
ENV VITE_CLIENT_ID=${VITE_CLIENT_ID}
RUN npm run build

FROM node:20-slim

WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]
