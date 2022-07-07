<template lang="">
    <div>
        <TypeNav/>
        categoryname:{{$route.query.categoryname}}<br/>
        <div v-show="$route.query.category1id">
            category1id:{{$route.query.category1id}}
        </div/>
        <div v-show="$route.query.category2id">
            category2id:{{$route.query.category2id}}
        </div/>
        <div v-show="$route.query.category3id">
            category3id:{{$route.query.category3id}}
        </div/>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="">
    
</style>