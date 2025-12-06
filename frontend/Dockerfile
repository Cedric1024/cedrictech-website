FROM nginx:alpine

# 拷贝你的 dist 静态资源
COPY ./dist/ /usr/share/nginx/html/

# 拷贝自定义 Nginx 配置
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80