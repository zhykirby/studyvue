<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name:'my-li',
    datat(){
        return{

        }
    }
}
</script>

<style scoped>
li{list-style: none;width: 33.333%;height: 150px;text-align: center}
</style>
