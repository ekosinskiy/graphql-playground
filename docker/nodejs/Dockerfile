FROM node:lts

#RUN echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config
#RUN mkdir -p -m 0600 /root/.ssh && ssh-keyscan bitbucket.org >> /root/.ssh/known_hosts
#COPY keys/ssh_config /root/.ssh/config
#COPY keys/bitbucket /root/.ssh/bitbucket
#RUN chmod 400 /root/.ssh/bitbucket

RUN npm install -g typescript ts-node
#WORKDIR /var/www
# TODO figure out how to make better startup script
#COPY ./startup.sh /root/startup.sh
#RUN chmod +x /root/startup.sh
#CMD "/root/startup.sh"
#EXPOSE 3000

