# 说明

实现一个简单版本的mini-vue

## script 命令

开发, 预览. 访问地址对应 /examples/index.html 页面

* npm run dev  

打包

* npm run build

推送到npm远程

* npm run npmp

运行测试用例

* npm run test

输出可视化测试覆盖报表

* npm run coverage

## 目录结构

```code
├── README.md                              // 项目文档说明
├── package.json                           // 里边相关配置 需要自己手动更改为项目匹配的信息
├── rollup.config.build.ts                 // rollup打包配置
├── rollup.config.dev.ts                   // rollup开发运行配置
├── npmpublish.js                          // npm 发布命令
├── __test__                               // jest 测试用例
├── examples                               // 开发时，运行 npm run dev ，进行代码调试 
│   └── index.html
├── tsconfig.json                          // ts 配置文件
├── test                                   // 测试
├── docs                                   // 文档
├── types                                  // 数据模型
├── dist                                   // 打包编译输出的文件目录
│   ├── npm-package-template.es.js         // 打包输出的 es 引入文件
│   └── npm-package-template.umd.js        // 打包输出的 und 格式文件
└── src                                    // 源码目录
    └── main.ts                            // 源码入口文件
```
