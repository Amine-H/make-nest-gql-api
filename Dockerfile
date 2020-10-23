FROM node:dubnium-alpine

ENV PORT 8080

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install --quiet --no-dev

COPY dist/ dist/

EXPOSE 8080

RUN addgroup -g 69 -S simhi && \
    adduser -u 69 -S simhi -G simhi

USER 69

CMD [ "npm", "run", "start:prod" ]

