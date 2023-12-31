FROM node:16.13.2

ARG SSH_KEY

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64
RUN chmod +x /usr/local/bin/dumb-init

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

WORKDIR /usr/src/app

# Add github to known hosts
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

COPY . .

# yarn and yarn build will install, build and remove dev dependencies
RUN ssh-agent sh -c 'echo $SSH_KEY | base64 -d | ssh-add - ; yarn && yarn build'

ENV NODE_ENV=production

CMD yarn start