<template>
  <ul id="list-stacks">
          <li class="item-stacks" v-for="tech in propsTechsToShow" :key="tech.name">
            <figure class="figure-stacks">
              <img class="img-stack" :src="tech.src" :alt="tech.alt">
              <figcaption>{{tech.name}}</figcaption>
            </figure>
          </li>
        </ul>
</template>

<script>
export default {
    name: 'ShowImages',

    props: {
        propsTechsToShow: {
            type: Array
        }
    }
}
</script>

<style src='./showImages.scss' lang='scss' scoped/>