<template>
  <main class="wrapper">
    <section class="sectionpart">
      <h2 class="heading">About us</h2>
      <div class="text-stuff">
        <p>82 electrical is here to supply domestic and light commercial electrical services to Bristol and the surrounding areas, so get in touch.</p>
        <p>We do everything from changing a light bulb to full-house rewires</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
      </div>
    </section>
    <section class="sectionpart">
      <h2 class="heading">What we do</h2>
      <ul class="items">
        <li class="item">
          <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2>Domestic work</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </li>
        <li class="item">
          <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2>Light commercial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </li>
        <li class="item">
           <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2>Competitive pricing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </li>
        <li class="item">
           <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2>Smart technology</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style scoped lang='scss'>
  .text-stuff {
    text-align: center;
  }

  .heading {
    text-align: center;
    font-size: 40px;

    &:before {
      content: url('~/assets/images/bolt.svg');
      padding-right: 10px;
    }
  }

  .items {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    @media (min-width: 50em) {
      flex-direction: row;
    }
  }

  .item {
    width: 200px;
    text-align: center;
  }

  .item__image {
    width: 125px;
  }

  .sectionpart {
    margin-bottom: 40px;
  }
</style>
