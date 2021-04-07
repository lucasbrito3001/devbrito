<template>
  <main class="container">
    <section class="row-main">
      <h1>Front-end</h1>
      <h1>Developer</h1>
    </section>
    <section class="flex-content">
       <article class="grid-item" id="resume-home">

        <h2 id="title-resume">Resumo</h2>

        <img :src="require('../../assets/lucas-colorful.jpeg')" id="img-resume" alt="resume-img">

        <div id="main-text-resume">
          <h3 id="title-main-text">
            Olá, tudo bem? Se você está aqui deve ser porque quer saber mais sobre mim e minha carreira, então, fica aqui um breve resumo:
          </h3>
          <p>Sou um jovem Desenvolvedor Front-end, que tem muita vontade de aprender. Apesar de atualmente utilizar o framework Vue.js na maioria dos meus projetos eu busco sempre aperfeiçoar e aprender novas tecnologias que possam agregar valor pra mim e pra minha carreira, como por exemplo React.js. Possuo formação técnica em Administração de Empresas, cursei 2 anos de Engenharia de Controle e Automação na Universidade Tecnológica Federal do Paraná (UTFPR-CP) e no momento estou avaliando as possibilidades, mas é provável que eu curse Tecnologia em Sistemas para Internet</p>
        </div>

        <ul id="academic-resume">
          <li>
            <h3>ETEC - Ensino Médio e Técnico em ADM Integrado</h3>
            <p><strong>Período: </strong> Início 2015 - Conclusão 2017</p>
            <p><strong>Instituição: </strong> ETEC Dr. Renato Cordeiro</p>
            <p><strong>Breve explicação: </strong> Cursei a modalidade ETIM (Ensino Técnico Integrado ao Médio) na ETEC de Birigui, onde cursei Administração de Empresas.  <br> Nesse curso aprendi algumas técnicas de Marketing, Gestão Financeira, Recursos Humanos, Logística, Informática e Empreendedorismo, que me ajudaram muito a ter uma visão mais analítica, e entender melhor como funciona uma empresa e suas necessidades. E além disso, também obtive uma boa experiência com gerenciamento de tempo, que para o meu dia a dia é muito útil.</p>
          </li>
          <li>
            <h3>UTFPR - Engenharia de Controle e Automação</h3>
            <p><strong>Período: </strong> Início 2018/2 - Trancamento 2021/1</p>
            <p><strong>Instituição: </strong> UTFPR - Câmpus Cornélio Procópio</p>
            <p><strong>Breve explicação: </strong>Apesar de estar gostando do curso, e estar mandando bem nas matérias e atividades extracurriculares eu decidi que irei realizar o trancamento da minha matrícula, pois senti que todo o esforço gigantesco que estava fazendo, poderia ser redirecionado para ser melhor utilizado com alguma coisa que eu me sentisse mais confortável e feliz fazendo, que no caso era a programação. <br> E em meio a esse mundo da programação eu encontrei por causa de um amigo, o <span style="color: cyan">Desenvolvimento Front-end</span>, e foi onde eu me apeguei e peguei paixão, e estou até hoje aqui aprendendo cada dia mais, e a cada dia que passa eu fico mais maravilhado com as possibilidades e oportunidades dessa área.</p>
          </li>
        </ul>
      </article>
      <article class="grid-item" id="tech-home">
        <h2 id="title-tech">Minha Stack</h2>
        <h3>Hard Skills</h3>
        <p>Apesar de ainda ter muito a aprender, minha atual principal stack é a front-end, e as tecnologias principais que mais trabalhei/estou aprendendo a trabalhar hoje e pretendo me aprofundar (principalmente no uso do Sass) são as seguintes:</p>

        <ShowImages  :props-techs-to-show = "propsShowImagesComponent"/>

        <p>Porém isso não significa que estas são minhas únicas opções de trabalho, apenas que foi a minha aposta inicial, e estou completamente disposto a aprender novas tecnologias e me adaptar conforme o projeto precise. Por exemplo, tenho projeções a curto prazo de usar React.js e Angular, portanto trabalhar com ambos seriam experiências desejáveis além de realizar apenas tutoriais, e como já tenho uma base de componentização com Vue.js, acredito que me adaptar será tranquilo.</p>

        <h3>Soft Skills</h3>

        <RenderList :props-list-to-render = "propsRenderSoftSkillsList"/>

      </article>
       <article class="grid-item" id="projects-home">
         <h2>Portfólio</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime voluptates eaque, pariatur ducimus fuga, repudiandae facilis molestiae repellat voluptate sit inventore non eos atque placeat enim magni iure corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum accusantium corporis, voluptatibus quo deserunt nemo, est nulla dolor sint sequi omnis. Voluptatibus totam rem excepturi voluptas fuga quis culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea fugiat, excepturi reprehenderit atque rerum doloribus tempore, consequatur a, in dolorum quidem. Est, animi nulla eaque iste iusto libero odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem eos dignissimos possimus, modi alias vitae ea porro laborum odit doloremque aliquam, accusantium quos magni consequuntur deserunt ad vero. Perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, vero? Deserunt qui perferendis delectus minus odit corporis ipsam quidem. Error ipsum assumenda veritatis quia recusandae alias. Beatae dicta nostrum eaque.</p>
       </article>
       
    </section>
  </main>
</template>

<script>
import ShowImages from '../../components/ShowVariableImages/ShowImages'
import RenderList from '../../components/RenderLists/RenderList'
export default {
  name: 'HomePage',

  components: {
    ShowImages,
    RenderList
  },

  data() {
    return {
      propsShowImagesComponent : [
        {name: 'Vue.js', src: require('../../assets/vue-js.svg'), alt: 'vue-logo'},
        {name: 'Sass', src: require('../../assets/sass.svg'), alt: 'sass-logo'},
        {name: 'JavaScript', src: require('../../assets/javascript.svg'), alt: 'javascript-logo'},
        {name: 'HTML5', src: require('../../assets/html-5.svg'), alt: 'html5-logo'},
        {name: 'CSS3', src: require('../../assets/css-3.svg'), alt: 'css3-logo'},
        {name: 'Bootstrap', src: require('../../assets/bootstrap.svg'), alt: 'bootstrap-logo'}
      ],

      propsRenderSoftSkillsList: [
        {key: 'empathy', name: 'Empatia'},
        {key: 'responsability', name: 'Responsabilidade'},
        {key: 'flexibility', name: 'Flexibilidade'},
        {key: 'learning', name: 'Paixão por Aprender'},
        {key: 'positivity', name: 'Positividade'},
        {key: 'comunication', name: 'Comunicação'},
        {key: 'leader', name: 'Liderança'},
        {key: 'collaboration', name: 'Colaboração'},
        {key: 'resilience', name: 'Resiliência'},
        {key: 'challenger', name: 'Paixão por Desafios'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped src="./home.scss"/>