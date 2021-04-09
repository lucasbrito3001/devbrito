<template>
  <footer id="contact">
      <main id="footer-main">
          <div class="footer-div" id="contact">
              <h3>Contatos</h3>
              <address>
                  <p id="mail-footer"><strong>email:</strong> devlucasmail@gmail.com</p>
                  <p id="phone-footer"><strong>discord:</strong> Lucas de Brito#0240</p>
              </address>
          </div>

          <div class="footer-div" id="my-resume">
              <h3>Sobre Mim</h3>
              <p>Estudante de Desenvolvimento Front-end, atualmente focado em estudar Vue.js. Busco sempre aperfeiçoar e aprender novas tecnologias que possam agregar valor pra mim e pra minha carreira. Possuo formação técnica em Administração de Empresas onde adquiri experiência nas áreas de Gerenciamento de Pessoas, Técnicas de Marketing, e Análises Financeiras. Atualmente curso Engenharia de Controle e Automação na Universidade Tecnológica Federal do Paraná (UTFPR-CP).</p>
          </div>
          <div class="footer-div" id="social-networks">
              <h3>Redes Sociais</h3>
              <p>
                  <a href="https://www.instagram.com/dev.brito/" target="blank">
                      Tutoriais no Instagram
                  </a>
              </p>
              <p>
                  <a href="https://www.linkedin.com/in/webdevbrito" target="blank">
                      Perfil no LinkedIn
                  </a>
              </p>
              <p>
                  <a href="https://github.com/lucasbrito3001" target="blank">
                      Perfil no GitHub
                  </a>
              </p>
          </div>
      </main>
      <aside id="footer-aside">
          <p>“Não são nossas habilidades que mostram quem realmente somos, são as nossas escolhas.” - Albus Dumbledore</p>
      </aside>
  </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            nameContact: ''
        }
    }
}
</script>

<style lang="scss" src="./footer.scss" scoped/>