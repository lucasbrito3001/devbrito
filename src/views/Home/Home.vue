<template>
  <main class="container">
    <section class="row-main">
      <h1>Front-end</h1>
      <h1>Developer</h1>
    </section>
    <section class="grid">
       <article class="grid-item" id="resume-home">
         <h2>Resumo</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime voluptates eaque, pariatur ducimus fuga, repudiandae facilis molestiae repellat voluptate sit inventore non eos atque placeat enim magni iure corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum accusantium corporis, voluptatibus quo deserunt nemo, est nulla dolor sint sequi omnis. Voluptatibus totam rem excepturi voluptas fuga quis culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea fugiat, excepturi reprehenderit atque rerum doloribus tempore, consequatur a, in dolorum quidem. Est, animi nulla eaque iste iusto libero odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem eos dignissimos possimus, modi alias vitae ea porro laborum odit doloremque aliquam, accusantium quos magni consequuntur deserunt ad vero. Perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, vero? Deserunt qui perferendis delectus minus odit corporis ipsam quidem. Error ipsum assumenda veritatis quia recusandae alias. Beatae dicta nostrum eaque.</p>
       </article>
       <article class="grid-item" id="technologies-home">
         <h2>Minha Stack</h2>
         <p>Minha principal stack é front-end, e minhas principais tecnologias são as seguintes:</p>
         <ul id="list-stacks">
           <li class="item-stacks"><img class="img-stack" :src="require('../../assets/vue-js.svg')" alt=""></li>
           <li class="item-stacks"><img class="img-stack" :src="require('../../assets/sass.svg')" alt=""></li>
           <li class="item-stacks"><img class="img-stack" :src="require('../../assets/javascript.svg')" alt=""></li>
           <li class="item-stacks"><img class="img-stack" :src="require('../../assets/html-5.svg')" alt=""></li>
           <li class="item-stacks"><img class="img-stack" :src="require('../../assets/css-3.svg')" alt=""></li>
         </ul>
       </article>
       <article class="grid-item" id="projects-home">
         <h2>Portifólio</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime voluptates eaque, pariatur ducimus fuga, repudiandae facilis molestiae repellat voluptate sit inventore non eos atque placeat enim magni iure corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum accusantium corporis, voluptatibus quo deserunt nemo, est nulla dolor sint sequi omnis. Voluptatibus totam rem excepturi voluptas fuga quis culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea fugiat, excepturi reprehenderit atque rerum doloribus tempore, consequatur a, in dolorum quidem. Est, animi nulla eaque iste iusto libero odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem eos dignissimos possimus, modi alias vitae ea porro laborum odit doloremque aliquam, accusantium quos magni consequuntur deserunt ad vero. Perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, vero? Deserunt qui perferendis delectus minus odit corporis ipsam quidem. Error ipsum assumenda veritatis quia recusandae alias. Beatae dicta nostrum eaque.</p>
       </article>
       
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped src="./home.scss"/>