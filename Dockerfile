FROM node:23

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 1992

CMD ["node", "server.js"]
#
#          scp -r ./* ${{ secrets.USER }}@${{ secrets.SERVER }}:${{ secrets.PATH }}
#          ssh ${{ secrets.USER }}@${{ secrets.SERVER }} <<EOF
#            cd ${{ secrets.PATH }}
#            source ~/.bashrc
#            source ${{ secrets.NVM_PATH }}/nvm.sh
#            echo "19.3.0" > .nvmrc
#            nvm use
#            chmod +x scripts/setup_env.sh
#            bash scripts/setup_env.sh
#            ${{ secrets.NODE_PATH }}/npm install
#            ls
#            ${{ secrets.NODE_PATH }}/pm2 restart ecosystem.config.js
#          EOF