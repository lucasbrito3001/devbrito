<template>
  <div id="app">
    <transition name="translateYHeader">
      <header v-show="headerShowHidden">
        <Navbar :list-items="navbarButtons" :social-networks="socialNetworkButtons"/>
      </header>
    </transition>

    <router-view id="view-page"></router-view>

    <section id="footer">
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
import Footer from './components/FooterContent/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      navbarButtons: [
        {button: 'Home', reference: '/'},
        {button: 'Resumo', reference: '/#resume-home'},
        {button: 'Tecnologias', reference: '/#tech-home'},
        {button: 'Projetos Realizados', reference: '/#projects-home'},
        {button: 'Contato', reference: '/contact'}
      ],

      socialNetworkButtons: [
        {name: 'linkedin-icon', button: require('./assets/linkedin-icon.svg'), reference: 'https://www.linkedin.com/in/webdevbrito'},
        {name: 'github-icon', button: require('./assets/github-icon.svg'), reference: 'https://github.com/lucasbrito3001'},
        {name: 'twitter-icon', button: require('./assets/twitter-icon.svg'), reference: 'https://twitter.com/brito3001'}
      ],

      headerShowHidden: true,
    }
  },

  created () {

    // Funcionalidade criada para esconder e mostrar o cabeçalho da página de acordo com a rolagem da mesma.

    let oldScrollYValue = window.scrollY

    window.addEventListener('scroll', () => {
      
      let newScrollYValue = window.scrollY

      if(newScrollYValue > oldScrollYValue) {

        oldScrollYValue = newScrollYValue
        this.headerShowHidden = false

      } else {
        
        oldScrollYValue = window.scrollY
        this.headerShowHidden = true

      }

    })

  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  @import './assets/scss/index';

  @include primary-title;
  @include secondary-title;
  @include terciary-title;
  @include paragraphs;
  @include sections;

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: $dark-palette;
  }

  header {
    position: fixed;
    z-index: 100;
    top: 0px;
    height: fit-content;
    width: 100%;
  }

  #footer {
    padding-top: 6vh;
    width: 100%;
    background: $black-palette;
  }

  /* Animação do cabeçalho aparecer e surmir */

  .translateYHeader-enter, .translateYHeader-leave-to {
    transform: translateY(-10vh);
  }

  .translateYHeader-enter-to, .translateYHeader-leave {
    transform: translateY(0vh);
  }

  .translateYHeader-enter-active, .translateYHeader-leave-active {
    transition: all .3s;
  }
  
</style>
