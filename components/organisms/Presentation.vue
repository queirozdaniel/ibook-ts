<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum
      voluptatem beatae sit vero soluta a iusto tempore eius eum repellat rerum
      eos itaque, harum ut praesentium saepe earum deleniti. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Odio ipsum voluptatem beatae sit
      vero soluta a iusto tempore eius eum repellat rerum eos itaque, harum ut
      praesentium saepe earum deleniti.
    </p>
    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
