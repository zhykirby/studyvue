import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Book from '../components/Book.vue';
import List from '../components/List.vue';
import User from '../components/User.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/book',
            name:'Book',
            component:Book
        },
        {
            path:'/List',
            name:'List',
            component:List
        },
        {
            path:'/user',
            name:'User',
            component:User
        }
    ]
});