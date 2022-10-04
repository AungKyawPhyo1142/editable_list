<template>
    <div class="my-2">
        <input  type="text" class="form-control"
                    v-model="listText" @keyup.enter="saveText()"
                    v-if="editable" >
        <span v-else @dblclick="editText()">{{listText}}</span>
    </div>
</template>

<script>
    export default {
        name: 'SingleList',
        data () {
            return {
                listText: '',
                editable: true
            }
        },
        methods: {
            saveText () {
                this.editable = false;
            },
            editText(){
                console.log('db click');
                this.editable = true;
            }

        }
    }
</script>

<style lang="stylus" scoped>

</style>
