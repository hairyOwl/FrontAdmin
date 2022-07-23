/*
 * @Description:webpack配置
 * @Author: hairyOwl
 * @Date: 2022-07-23 18:48:03
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 19:04:25
 * https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
 */
// 路径处理
const path = require('path'); //node的path模块
function resolve(dir) {
  return path.join(__dirname, dir);
}
// 导出配置对象
module.exports = {
  chainWebpack(config) {
    // 配置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};
