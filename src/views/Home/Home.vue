<template>
  <main class="container">
    <section class="row-main">
      <h1>Front-end</h1>
      <h1>Developer</h1>
    </section>
    <section class="flex-content">
       <article class="grid-item" id="resume-home">

        <div id="div-img-resume">
          <img :src="require('../../assets/lucas-colorful.jpeg')" id="img-resume" alt="resume-img">
        </div>

        <div id="main-text-resume">
          <h2 id="title-resume">Sobre mim</h2>

          <h3 id="title-main-text">
            Olá, tudo bem? Se você está aqui deve ser porque quer saber mais sobre mim, então, fica aqui um breve resumo:
          </h3>

          <p>Meu nome é Lucas de Brito, e eu iniciei os meus estudos em Desenvolvimento Front-end em 2020, que foi o ano em que eu decidi mudar a minha vida :). Sou um ex-graduando de Engenharia de Controle e Automação, que se encontrou no mundo do desenvolvimento web.</p>

          <p>Atualmente não estou matriculado em nenhuma universidade, e todo meu conhecimento em front-end foi adquirido por meio de cursos online, e de muito estudo e pesquisa pela internet. Como a maioria ja duvidei algumas vezes se conseguiria ser um bom desenvolvedor um dia, mas hoje, vejo que todo meu esforço não foi em vão, pois consigo notar meu desenvolvimento, e enxergo que se dedicar a uma coisa que você gosta de verdade realmente vale a pena.</p>

          <a href="https://linkedin.com/in/webdevbrito" target="blank"><button id="resume-linkedin-button">Meu LinkedIn</button></a>
        </div>

      </article>
      <article class="grid-item" id="tech-home">
        <h2 id="title-tech">Minha Stack 💻📚</h2>
        <h3 class="skills">Hard Skills</h3>
        <p>Apesar de ainda ter muito a aprender, minha atual principal stack é a front-end, e as tecnologias principais que mais trabalhei/estou aprendendo a trabalhar hoje são as seguintes:</p>

        <ShowImages  :props-techs-to-show = "propsShowImagesComponent"/>

        <p>Porém isso não significa que estas são minhas únicas opções de trabalho, apenas que foi a minha aposta inicial, e estou completamente disposto a aprender novas tecnologias e me adaptar conforme o projeto precise. Por exemplo, tenho projeções a curto prazo de usar React.js e Angular, portanto trabalhar com ambos seriam experiências desejáveis, e como já tenho uma base de componentização com Vue.js, acredito que me adaptar será tranquilo.</p>

        <h3 class="skills">Soft Skills</h3>

        <RenderList :props-list-to-render = "propsRenderSoftSkillsList"/>

        <a href="https://github.com/lucasbrito3001" target="blank"><button id="stacks-github-button">Meu Github</button></a>

      </article>
       <article class="grid-item" id="projects-home">
         <h2>Portfólio</h2>

        <RenderPortfolio :props-list-portfolio-to-render="propsListPortfolioToRender"/>

       </article>
       
    </section>
  </main>
</template>

<script>
import ShowImages from '../../components/ShowVariableImages/ShowImages'
import RenderList from '../../components/RenderLists/RenderList'
import RenderPortfolio from '../../components/RenderPortfolio/RenderPortfolio'
export default {
  name: 'HomePage',

  components: {
    ShowImages,
    RenderList,
    RenderPortfolio
  },

  data() {
    return {
      propsShowImagesComponent : [
        {name: 'Vue.js', src: require('../../assets/vue-js.svg'), alt: 'vue-logo', level: 'Intermediário'},
        {name: 'Sass', src: require('../../assets/sass.svg'), alt: 'sass-logo', level: 'Básico/Intermediário'},
        {name: 'JavaScript', src: require('../../assets/javascript.svg'), alt: 'javascript-logo', level: 'Intermediário'},
        {name: 'HTML5', src: require('../../assets/html-5.svg'), alt: 'html5-logo', level: 'Intermediário'},
        {name: 'CSS3', src: require('../../assets/css-3.svg'), alt: 'css3-logo', level: 'Intermediário'},
        {name: 'Bootstrap', src: require('../../assets/bootstrap.svg'), alt: 'bootstrap-logo', level: 'Básico'}
      ],

      propsRenderSoftSkillsList: [
        {key: 'empathy', name: 'Empatia'},
        {key: 'responsability', name: 'Responsabilidade'},
        {key: 'flexibility', name: 'Flexibilidade'},
        {key: 'learning', name: 'Paixão por Aprender'},
        {key: 'comunication', name: 'Comunicação'},
        {key: 'leader', name: 'Liderança'},
        {key: 'collaboration', name: 'Colaboração'},
        {key: 'resilience', name: 'Resiliência'},
        {key: 'challenger', name: 'Paixão por Desafios'}
      ],

      propsListPortfolioToRender: [
        {
          name: 'Teste Prático Lexart Labs',
          key: 'lexart-labs',
          description: 'Desenvolvi um Controle de Estoque consumindo uma API Rest chamada crudcrud para trabalhar com os dados. Na aplicação você pode adicionar um novo produto ao estoque, atualizar ou excluir algum produto já adicionado.',
          repoLink: 'https://github.com/lucasbrito3001/lexart-labs-test',
          usedTechs: [{tech: 'Vue.js', key: 'vue'} , {tech: 'JavaScript', key: 'js'} , {tech: 'API Rest' , key: 'api'} , {tech: 'HTML e CSS' , key: 'html-css'}]
        },
        {
          name: 'Coinverter',
          key: 'coinverter',
          description: 'Esse foi o meu primeiro projeto utilizando um framework JavaScript (Vue.js) e consumindo uma API, desenvolvi uma aplicação onde pode-se realizar conversões de uma moeda na outra, e analisar alterações de valores.',
          repoLink: 'https://github.com/lucasbrito3001/Coinverter',
          usedTechs: [{tech: 'Vue.js', key: 'vue'} , {tech: 'JavaScript', key: 'js'} , {tech: 'API' , key: 'api'} , {tech: 'HTML e CSS' , key: 'html-css'}]
        },
        {
          name: 'Template Site Inception 3D',
          key: 'i3d', 
          description: 'Criei um template para o site de um projeto de extensão que eu participava na universidade utilizando Bootstrap, para mim a construção desse projeto foi muito importante, porque foi o que me motivou a continuar na área de desenvolvimento web.',
          repoLink: 'https://github.com/lucasbrito3001/inception3d-cp',
          usedTechs: [{tech: 'Bootstrap', key: 'bootstrap'} , {tech: 'JavaScript', key: 'js'} , {tech: 'HTML e CSS' , key: 'html-css'}]
          
        },
        {
          name: 'Meu Portfólio (Este Site)',
          key: 'portfolio',
          description: 'Esse site eu criei com o intuito de aplicar uma nova tecnologia e também mostrar meu trabalho, estou sempre buscando melhorar, e com certeza com o passar do tempo, esse portfolio irá ser alterado conforme eu adquiro mais conhecimento técnico.',
          repoLink: 'https://github.com/lucasbrito3001/devbrito',
          usedTechs: [{tech: 'Vue.js', key: 'vue'} , {tech: 'JavaScript', key: 'js'} , {tech: 'HTML e CSS' , key: 'html-css'} , {tech: 'SASS' , key: 'sass'}]

        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped src="./home.scss"/>