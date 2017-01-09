<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index"></span>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">

</style>
<script>
  export default {
    data() {
        return {

        }
    },
    components: {

    }
  };
</script>
