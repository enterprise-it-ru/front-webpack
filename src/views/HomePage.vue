<template>
  <base-page-layout>
    <div class="row">
      <div class="col-md-5 mx-auto">
        Компонент <b>views/HomePage.vue</b>
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
