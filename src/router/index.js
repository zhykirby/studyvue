import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Book from '../components/Book/Book';
import List from '../components/List/List';
import User from '../components/User/User';
import Dw from '../components/IoT/Dw';
import Preview from '@/components/IoT/Preview';

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
        },
        {
            path:'/IoT/Dw',
            name:'Dw',
            component:Dw
        },
        {
            path:'/IoT/Preview',
            name:'Preview',
            component:Preview
        }
    ]
});