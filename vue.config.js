// vue.config.js 配置说明
// 这里只列一部分，具体配置参考文档啊
const webpack = require('webpack')
module.exports = {
    // 将部署应用程序的基本URL
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    productionSourceMap: false,
    // externals表示不需要打包的文件
    // configureWebpack: {
    //     externals: {
    //         'vue': 'Vue',
    //     }
    // },
    // css: {
    //     loaderOptions: {
    //       sass: {
    //         data: `
    //           @import "./home.scss";
    //         `
    //       }
    //     }
    //   },
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

    // outputDir: 'dist',

    // pages:{ type:Object,Default:undfind }
    /*
     构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
     个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
     的字符串，
     注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
     */
    // pages: {
    // index: {
    // entry for the page
    // entry: 'src/index/main.js',
    // the source template
    // template: 'public/index.html',
    // output as dist/index.html
    // filename: 'index.html'
    // },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: 'src/subpage/main.js'
    // },

    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,

    devServer: {
        port: 8081, // 端口号
        host: '192.168.1.8',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器

        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}