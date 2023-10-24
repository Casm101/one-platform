FROM node:18.18.2-alpine3.18

VOLUME [ "/app/" ]
WORKDIR /app/

COPY . .

WORKDIR /app/apps/one-client/

RUN npm install

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
