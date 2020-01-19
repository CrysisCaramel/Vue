<template>
  <div>
    <h1 v-if="myListItemsArray.length && !changeView"
      class="title">My List</h1>
    <app-changeView v-if="myListItemsArray.length"></app-changeView>
    <app-noResultsFound v-if="!myListItemsArray.length"></app-noResultsFound>
    <div v-else=""
        class="myList"
        :class="{'myListWrap': changeView}">
      <app-searchItem v-for="item in myListItemsArray"
        :key="item.id"
        :item="item"></app-searchItem>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    myListItemsArray: "myListItems",
    changeView: "changeView"
  })
};
</script>

<style lang="sass">
.title
  margin-left: 120px
  margin-top: 35px
  font-size: 36px
.myList
  margin: 0 123px
.myListWrap
  margin: 0 auto
  width: 850px
  display: flex
  flex-wrap: wrap
</style>
