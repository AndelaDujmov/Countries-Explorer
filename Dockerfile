ARG NODE_VERSION=21

FROM node:${NODE_VERSION}-alpine

ARG USERNAME=andela
ARG USER_UID=1100

RUN addgroup -g ${USER_UID} ${USERNAME} && \
    adduser -D -u ${USER_UID} -G ${USERNAME} ${USERNAME}

WORKDIR /app/${USERNAME}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--", "--host"]