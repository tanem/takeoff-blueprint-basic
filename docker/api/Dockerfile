FROM node:8

RUN useradd --user-group --create-home --shell /bin/false envuser
ENV HOME=/home/envuser

COPY env/api/package.json $HOME/apphome/
RUN chown -R envuser:envuser $HOME/*

USER envuser

WORKDIR $HOME/apphome

RUN npm install

EXPOSE 10000
CMD ["npm", "start"]
