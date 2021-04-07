<template>
  <ul class="render-list">
      <li class="list-item" v-for="itemList in propsListToRender" :key="itemList.key">
          {{itemList.name}}
      </li>
  </ul>
</template>

<script>
export default {
    name: 'RenderLists',

    props: {
        propsListToRender: {
            type: Array
        }
    }
}
</script>

<style src="./RenderList.scss" lang="scss" scoped/>