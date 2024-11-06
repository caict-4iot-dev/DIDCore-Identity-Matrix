# 使用 MySQL 5.7 官方镜像
FROM mysql:5.7

# 设置环境变量
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=test
ENV MYSQL_USER=xty
ENV MYSQL_PASSWORD=123456

COPY ./init.sql /docker-entrypoint-initdb.d/

# 公开 3306 端口
EXPOSE 3307

CMD ["mysqld"]
