<template>
  <div class="changeView">
    <i class = "fas fa-th-large"
        :class="{'check': changeView}"
        @click="doChangeView(true)"
    ></i>
    <i class = "fas fa-bars"
        :class="{'check': !changeView}"
        @click="doChangeView(false)"
    ></i>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    changeView: "changeView"
  }),
  methods: {
    doChangeView (bool) {
      this.$store.commit("changeView", bool);
    }
  }
};
</script>

<style src="./ChangeView.sass" lang="sass" scoped></style>
