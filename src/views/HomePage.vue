<template>
  <base-page-layout>
    <div class="row">
      <div class="col-md-5 mx-auto my-3">
        Это компонент <b>views/HomePage.vue</b>.
        <div>
          Начните с настройки переменных в файле src/scss/_variables.scss. <br>
          А результат можно глянуть на <router-link :to="{name: 'StyleGuide'}">этой странице</router-link>
        </div>
      </div>
    </div>
  </base-page-layout>
</template>

<script lang="ts">
import BasePageLayout from "../components/Layout/BasePageLayout.vue";

export default {
  name: "HomePage",
  components: {BasePageLayout},
  data() {
    return {}
  },
}
</script>
