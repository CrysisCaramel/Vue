<template>
  <div id="app" >
     <div class="containerMain">
       <app-header></app-header>
       <main role="main" class = "main">
          <router-view></router-view>
       </main>
       <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
    };
  }
};
</script>
<style lang="sass" src="./App.sass"></style>
