<template>
  <div class="searchItem" :class="{'changeItem': changeView}">
            <div class="wrapperInfo">
                <div class="search"
                    v-if="!changeView"
                    @click="sendToMyList(item)">
                    <div
                        v-if="item.checkMyList"
                        class="checkd"></div>
                </div>
                <div class="description">
                    <div class="fullName">{{item.full_name}}</div>
                    <div class="info">{{item.description}}</div>
                    <div class="tags">
                        <div class="language">{{item.language}}</div>
                        <div class="tagsSearch">{{item.search}}</div>
                    </div>
                </div>
            </div>
            <div class="wrapperFork">
                <div class="fork">
                    <i class="fas fa-star"></i>
                    {{item.forks}}
                    </div>
                <div class="language">{{item.language}}</div>
            </div>
            <button v-if="changeView"
                    class="btn"
                    :class="{'btnCheckd': item.checkMyList}"
                    @click="sendToMyList(item)"
            >{{buttonText}}</button>
        </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    item: Object
  },
  data () {
    return {
    };
  },
  methods: {
    sendToMyList (item) {
      this.$store.commit("getMyListItems", item);
    }

  },
  computed: {
    ...mapState({
      changeView: "changeView"
    }),
    buttonText () {
      return !this.item.checkMyList ? "ADD TO LIST" : "REMOVE FROM LIST";
    }
  }
};
</script>

<style src="./SearchItem.sass" lang="sass" scoped></style>
