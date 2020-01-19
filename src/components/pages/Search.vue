<template>
  <div>
    <app-select></app-select>
    <app-changeView v-if="searchItemsArray.length"></app-changeView>
    <app-noResultsFound v-if="!searchItemsArray.length"></app-noResultsFound>
    <div v-else=""
        class ="search"
        :class="{'searchWrap': changeView}">
      <app-searchItem
        v-for="item in searchItemsArray"
        :key="item.id"
        :item="item"></app-searchItem>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    searchItemsArray: "searchItems",
    changeView: "changeView"
  })
};
</script>

<style lang="sass" scoped>
.search
  margin: 0 123px
.searchWrap
  margin: 0 auto
  width: 850px
  display: flex
  flex-wrap: wrap
</style>
