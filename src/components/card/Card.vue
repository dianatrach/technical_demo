<template>
    <div class="card">
        <div class="icon">
            <img class="like_icon" src='@/assets/like_icon.png'>
        </div>
        <img v-lazy="todo" class="gif">
        
    </div>
</template>

<script>
export default ({
    name: "card",
    props: ['todo']
})
</script>

<style scoped>

img.gif {
    width: 100%;
    max-height: 368px;
}

.card {
    position: relative;
    left: 0px;
    top: 0px;
    width: 312px;
    height: 368px;
    background-color: #464646;
    margin: 24px 24px 0px 0px;
}

.gif {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
}

.icon {
    position: absolute;
    z-index: 2;
    right: 16px;
    top: 16px;
    width: 40px;
    height: 32px;
    background-color: #fff;
    border-radius: 2px;
}
.icon .like_icon {
    position: relative;
    padding: 9.25px;
}


</style>