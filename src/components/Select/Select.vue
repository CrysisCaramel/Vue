<template>
  <form class ="gitSelect" @submit.prevent="getResponse">
        <select
            name="selectType" 
            class = "gitSelect__type"
            :value = "defaultType"
            @change="getType"> 
            <option 
                v-for="t of selectType" 
                :key="t">
                {{ t }}
            </option>
        </select>
        <select
            name="selectLanguage" 
            class = "gitSelect__language"
            :value = "defaultLanguage"
            @change="getLanguage">
            <option 
                v-for="l of selectLanguages" 
                :key="l">
                {{ l }}
            </option>
        </select>
        <input
            name = "searchItem"
            class = "gitSelect__search" 
            placeholder ="Type here for search"
            :value = "inputValue"
            @change="getInputValue"
            />
        <button class="gitSelect__btn btn" 
                type="submit">
                SEARCH
        </button>
        </form>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getType(event) {
            this.$store.commit('getType', event.target.value)
        },
        getLanguage(event) {
            this.$store.commit('getLanguage', event.target.value)
        },
        getInputValue(event) {
            this.$store.commit('getInputValue', event.target.value)
            
        },
        getResponse() {
            this.$store.dispatch('getResponse')
        }
    },
    computed:  mapState({
        defaultType: 'defaultType',
        defaultLanguage: 'defaultLanguage',
        selectType: 'selectType',
        selectLanguages: 'selectLanguages',
        inputValue: 'inputValue',
    }),
}
</script>

<style src="./Select.sass" lang="sass" scoped></style>