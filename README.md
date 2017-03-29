# Vue-Project
基于http://vue.tigerb.cn/#/网络项目，修修、改改、研究研究

## How To Use ?
1. npm install
2. build:
  - npm run build-d: `webpack-dev-server webpack.dev.config.js --open --inline --quite --progress`在根目录自动启动一个站点，只需在改动文件后保存即可在网站查看改动效果
  - npm run build-p: `cross-env NODE_ENV=production webpack -p -d --colors`在dist文件夹中生成production包，只需部署dist文件夹到一个站点即可访问
