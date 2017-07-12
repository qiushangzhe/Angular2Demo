# Ng2MaterialTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## demo主要涉及
1. 路由
    - 对某些路由地址设置权限 guard
    - 子路由的使用
    - 路由参数（待实现）
2. http
    - 全局http服务 对ajax返回值统一过滤
3. 父子组件传递数据
4. mvc模式在ng2中的简单实用。（完成80%）
5. angular-material modules封装 避免在app.module.ts 中出现大量的ui组件import
6. 一个完整的项目目录结构优化
    - views 存放每个页面型组件 （与其他功能型组件做区分）
    - components 存放功能型组件
    - models 数据模型文件夹（mvc模式中的m文件存放位置，把m从组件中抽离，有好处也有坏处）
    - services 服务文件夹
    - modules 一些第三方模块（比如UI组件啥的）的二次封装，避免在主模块中导入大量的第三方模块。瞅着闹心
    - guards 路由守卫，给路由做权限跳转的。
7. 如何对不同开发环境的接口地址切换的问题（在environments文件夹中，还有api.service.ts 中有体现）

8. angular-material 的使用 https://material.angular.io/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

