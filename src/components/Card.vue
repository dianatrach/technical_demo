<template>
    <div class="card">
        <div class="icon">
            <img class="like_icon" src="assets/like_icon.png">
            <img class="delete_icon" src="assets/delete_icon.png">
        </div>
        <img v-bind:src="todo">
        
    </div>
</template>

<script>
export default ({
    name: "card",
    props: ['todo']
})
</script>

<style scoped>

.card {
    position: relative;
    left: 0px;
    top: 0px;
    width: 312px;
    height: 368px;
    background-color: #464646;
}

.gif {
    z-index: 1;
}

.icon {
    z-index: 2;
    margin-right: 16px;
    margin-top: 16px;
    margin-left: auto;
    width: 40px;
    height: 32px;
    background-color: #fff;
    border-radius: 2px;
}
.like_icon {
    display: block;
    margin: 0 auto;
    
}

.delete_icon {
    display: block;
    margin: 0 auto;
    visibility: hidden;
}

</style>