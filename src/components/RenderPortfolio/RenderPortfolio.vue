<template>
  <ul id="render-item-portfolio">
      <li class="portfolio-item" v-for="itemList in propsListPortfolioToRender" :key="itemList.key">
          <h3>{{itemList.name}}</h3>
          <p>{{itemList.description}}</p>
          <h4>Técnologias Utilizadas:</h4>
          <ul id="used-techs">
              <li class="used-tech-project" v-for="usedTech in itemList.usedTechs" :key="usedTech.key">
                 {{usedTech.tech}}
              </li>
          </ul>
          <a :href="itemList.repoLink" target="blank" class="link-repo-github"><button class="portfolio-button-github">Repositório GitHub</button></a>
      </li>
  </ul>
</template>

<script>
export default {
    props: {
        propsListPortfolioToRender: {
            type: Array
        }
    }
}
</script>

<style lang='scss' src='./renderPortfolio.scss' scoped/>