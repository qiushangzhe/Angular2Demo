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


1. 通过ng-cli创建新的组建的指令：
ng generate component 组件名称
2.  如果想为一个module中添加新的组件，前提是不使用ng generate component这种方式的话，需要在这个module中引入这个新组件，并在declarations字段中添加这个组件的依赖。

```
在使用angular-cli创建新的项目的时候有一些细节：

ng new <options...>

--dry-run (Boolean) (Default: false) Run through without making any changes. Will list all files that would have been created when running "ng new".

--verbose (Boolean) (Default: false) Adds more details to output logging.

--skip-install (Boolean) (Default: false) Skip installing packages.

--skip-git (Boolean) (Default: false) Skip initializing a git repository.

--skip-tests (Boolean) (Default: false) Skip creating spec files.

--skip-commit (Boolean) (Default: false) Skip committing the first commit to git.

--directory (String) The directory name to create the app in.

--source-dir (String) (Default: src) The name of the source directory. You can later change the value in ".angular-cli.json" (apps[0].root).

--style (String) (Default: css) The style file default extension. Possible values: css, scss, less, sass, styl(stylus). You can later change the value in ".angular-cli.json" (defaults.styleExt).

--prefix (String) (Default: app) The prefix to use for all component selectors. You can later change the value in ".angular-cli.json" (apps[0].prefix).

--routing (Boolean) (Default: false) Generate a routing module.

--inline-style (Boolean) (Default: false) Should have an inline style.

--inline-template (Boolean) (Default: false) Should have an inline template.

--minimal (Boolean) (Default: false) Should create a minimal app.
一般我会选择使用
ng new xxxx --routing true --style scss --skip-tests true --prefix component前缀
```
本项目使用的是：
``ng new Ng2MaterialTest --routing true --style scss --skip-tests true``

接下来是ng server的一些相关的指令

```
ng serve <options...>
--environment (String) Defines the build environment.这个是添加环境变量的，这样可以做到对不同的环境进行判断取出不同的url值。
```

### http请求的都是真实的接口，返回的都是qmock提供的假数据。

myqq：470542573
