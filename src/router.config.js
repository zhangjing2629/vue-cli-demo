
// import Home from './components/Home.vue';
// import News from './components/News.vue';

export default {
    routes:[{
        path:"/home",
        component:resolve => require(['./components/Home.vue'], resolve)
    },{
        path:"/news",
        component:resolve => require(['./components/News.vue'], resolve)
    }]

};
