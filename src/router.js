import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // tira a # na frente do link de roteamento

    routes: [ // definem as rotas
        {
            path: '/', // define o endpoint
            name: 'home', // define o nome da rota
            component: Home // define o componente importado que será utilizado
        }
    ]

})