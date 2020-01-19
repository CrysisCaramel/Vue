<template>
  <header class ="header">
            <div class = "header__gitWrapper">
                <img src ="./gitCat.png" alt="gitCat" class = "header__gitWrapper_img">
                <div class = "header__gitWrapper_info">
                    <div class = "gitTittle">GitHub</div>
                    <div class = "gitSubTittle">search</div>
                </div>
            </div>
            <div class="header__linkWrapper">
                <router-link to="/"
                    class = "header__linkWrapper_search"
                    active-class="active"
                    exact="">
                    <div>Search</div>
                </router-link>
                <router-link to="/myList"
                    class = "header__linkWrapper_myList"
                    active-class="active">
                    <div >My-list</div>
                </router-link>
            </div>
        </header>
</template>

<script>
export default {

};
</script>

<style lang="sass" src="./Header.sass"></style>
