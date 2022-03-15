<template>
    <div class="home">
        <div class="centered">
            <!-- <Card></Card> -->
            <Card
                v-for="card in cards"
                :key="card.id"
                v-bind:card_data="card"
            />
            <!-- <div class="card">
                <h1>dvghbiuiukdevd</h1>
            </div>
            <div class="card">
                <h1>dvghbiuiukdevd</h1>
            </div>
            <div class="card">
                <h1>dvghbiuiukdevd</h1>
            </div>
            <div class="card">
                <h1>dvghbiuiukdevd</h1>
            </div>
            <div class="card">
                <h1>dvghbiuiukdevd</h1>
            </div> -->
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default ({
    setup() {
        
    },
    components: {
        Card
        
    },
    data(){
        return {
            cards:[
                {
                    image: "C:\Workspace\project-name\src\logo.png",
                    id: "1",
                    text: "ngfs xn"
                },
                {
                    image: "C:\Workspace\project-name\src\logo.png",
                    id: "2",
                    text: "ngfs xn"
                },
                {
                    image: "C:\Workspace\project-name\src\logo.png",
                    id: "3",
                    text: "ngfs xn"
                },
                {
                    image: "C:\Workspace\project-name\src\logo.png",
                    id: "4",
                    text: "ngfs xn"
                },
                {
                    image: "C:\Workspace\project-name\src\logo.png",
                    id: "5",
                    text: "ngfs xn"
                },
                {
                    image: "C:\Workspace\project-name\src\logo.png",
                    id: "6",
                    text: "ngfs xn"
                }
                ]
        }
    }
})
</script>


<style scoped>
.home {
    height: 2080px;
    background-color: #fff;
    max-width: 1920px ;
}

.centered {
    width: 1320px;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-items: center;
    color: black;
}

.card {
    max-width: 312px;
    max-height: 368px;
    padding: 24px;
    box-shadow: 0 0 8px #666;
}

</style>