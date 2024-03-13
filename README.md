# Commands you will use

### docker
1. docker run --name [container name] -p 80:80 -p 443:443 --network [network] -v $PWD/conf.d:/etc/nginx/conf.d -d nginx
2. docker cp [container name]:/etc/nginx/conf.d .
3. docker exec -it [container name] nginx -t 
4. docker exec -it [container name] -it nginx -s reload

### nginx


### amazon linux command
