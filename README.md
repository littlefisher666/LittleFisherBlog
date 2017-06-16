## LittleFisherBlog
博客的前端内容，使用`Angular`技术栈进行开发

#### 后端环境
本项目为前端环境，后端环境请移步如下地址
[https://github.com/litttlefisher/littlefisher-system][1]

#### 环境搭建

##### 1. 安装`Git`，傻瓜式安装，不详细描述
##### 2. 安装`NodeJS`，傻瓜式安装，不详细描述
##### 3. 在工程目录下调用控制台命令，输入`git clone https://github.com/litttlefisher/LittleFisherBlog.git`，克隆项目文件
##### 4. 进入工程目录，依次调用如下命令，即可启动项目

```
npm i -g cnpm
cnpm i -g @angular/cli
cnpm install
ng serve
```

##### 5. 打开浏览器访问[http://localhost:4200/][2]
##### 6. 如果你想让加载的包更小，请使用以下方式启动`angular-cli`内置的轻量级`http server`
```
ng serve --prod --aot
```
##### 7. 如果想让局域网内其他`PC`访问本机页面，请查找局域网内本机`ip`地址，然后执行如下命令来启动，把`{ip}`替换为本机实际`ip`地址
```
ng serve --host={ip}
```


  [1]: https://github.com/litttlefisher/littlefisher-system
  [2]: http://localhost:4200/