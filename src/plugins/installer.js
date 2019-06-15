function Installer(){

}

Installer.install = function(Vue){
    //注册全局组件
    Vue.component('test',{
        template:`<h1>11</h1>`
    });
    //挂载属性

};

export default Installer;