<template>
    <div class="header">
        <div class="menu">
            <nav class="nav">
                <router-link :to="{name: 'Home'}" class="nav_link fav_link">home</router-link>
                <router-link :to="{name: 'Favorites'}" class="nav_link fav_link">favorites</router-link>
                <!-- <a class="nav_link home_link">home</a>
                <a class="nav_link fav_link" >favorites</a> -->
            </nav>
        </div>
        <div class="search_box">
            <div class="text-field__icon text-field__icon_search">
                <input class="text-field__input" type="text" placeholder="Search GIF">
                
            </div>
        </div>

        
    </div>
</template>

<script lang="js">


export default ({
    name: 'Header',
    props: {},
    data() {
      return {}
    },
    mounted(){
        document.querySelector('input').addEventListener('keydown', function(event){
            if(event.keyCode == 13){
                console.log(">>>>>>>enter");
                eventbus.$emit('>>>>>msg',event.target.value);
            }
        })
    }
});
   
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    width: 1920px;
    height: 104px;
    left: 0px;
    top: 0px;
    background-color: #464646;
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

}
.nav {
    text-transform: uppercase;
    font-size: 18px;
    line-height: 22px;
    max-width: 748px;
}

.nav_link {
    color: #FFFFFF;
    text-decoration: none;
    vertical-align: top;

}

.home_link {
    margin-left: 300px;
}

.fav_link {
    margin-left: 53px;
}

.nav_link:hover {
    text-decoration: underline; //подчеркивание при наведении
}

.menu {
    padding-top:41px;
}

.search_box {
    width: 732px;
    height: 56px;
    padding-top:24px;
    padding-left: 232px;
}

input {
    border:none;
    outline:none;
}

.text-field__icon {
    background-color: #FFFFFF;
    position: relative; 
    width: 100%;
    height: 100%;
    border-radius: 4px;
    
}


.text-field__icon::before {
    content: '';
    color: #C0C0C0;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 19px;
    top: 50%;
    transform: translateY(-50%);
    
}
.text-field__icon .text-field__input {
    padding-left: 48px;
    width: 100%;
    height: 100%;
    color: #252525;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}


.text-field__icon_search::before {
  width: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23bdbdbd' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}


</style>
