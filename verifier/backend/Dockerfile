# 基于官方 Node.js 镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package.json /app
COPY package-lock.json /app

# 安装依赖
RUN npm install

# 复制项目文件到容器
COPY . /app

# 安装 Egg-MySQL 插件
RUN npm install egg-mysql

# 暴露端口
EXPOSE 7001

# 启动应用
CMD ["npm", "run", "dev"]


