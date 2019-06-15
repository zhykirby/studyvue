let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    css: {
      modules: true
    },
    chainWebpack:config=>{
      config.resolve.alias.set('@',resolve('src'));
    }
};