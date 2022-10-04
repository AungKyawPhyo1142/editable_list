<template>
    <div>
        <h1 class="text-primary fs-1 text-uppercase">Todo List Page</h1>
        <li class="list-group-item mx-5">
            <single-list></single-list>
            <single-list></single-list>
        </li>
    </div>
</template>

<script>
    import singleList from './SingleList.vue';
    export default {
        name: 'AllList',
        components: {
            singleList
        },
    }
</script>
