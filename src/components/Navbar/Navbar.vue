<template>
  <nav id="navbar">
    <div class="menu-collapse">
        <router-link to="/" id="brand-button"><span class="text-brand" id="color-brand-dev">Dev</span><span class="text-brand" id="color-brand-lucas">Lucas</span></router-link>
        <button type="button" class="toggler-button" v-show="togglerHidden" @click="navbarAlternate">
                <img id="svg-img" :src="menuTogglerIcon" alt="toggle-menu-button">
        </button>
    </div>

    <transition name="showNavbar">
        <div v-if="navbarHidden" id="buttons-list">
            <ul id="navbar-list">
                <li class="navbar-item" v-for="listItem in listItems" :key="listItem.button" @click="navbarAlternate"><a class="navbar-links" :href="listItem.reference">{{listItem.button}}</a></li>
            </ul>
            <ul id="navbar-social-networks">
                <li class="navbar-item" v-for="socialNetwork in socialNetworks" :key="socialNetwork.name" @click="navbarAlternate">
                    <a class="navbar-links" target="blank" :href="socialNetwork.reference">
                        <img class="social-networks-icons" :src="socialNetwork.button" :alt="socialNetwork.name">
                    </a>
                </li>
            </ul>
        </div>
    </transition>
  </nav>
</template>

<script>
export default {
    name: 'navbar',
    props: {
        listItems: {
            type: Array
        },
        socialNetworks: {
            type: Array
        }
    },

    data() {
        return {
            screenWidth: '',
            menuTogglerIcon: require('../../assets/menu-sdw.svg'),
            togglerClick: 0
        }
    },

    computed: {
        togglerHidden: function () {
            if(this.screenWidth > 992){
                return false
            } else {
                return true
            }
        },

        navbarHidden: function () {
            if(this.screenWidth > 992){
                return true
            } else if(this.togglerClick == 1){
                document.body.style.overflow = 'hidden'
                return true
            } else {
                document.body.style.overflow = 'visible'
                return false
            }
        }
    },

    created() {
        this.screenWidth = screen.availWidth
        window.addEventListener('resize', () => {
            this.screenWidth = screen.availWidth
        })
    },

    methods: {
        navbarAlternate () {
            if(screen.availWidth <= 992) {
                if(this.togglerClick == 0) {
                    this.menuTogglerIcon = require('../../assets/menu-x.svg')
                    this.togglerClick = 1
                } else {
                    this.menuTogglerIcon = require('../../assets/menu-sdw.svg')
                    this.togglerClick = 0
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped src="./navbar.scss"/>