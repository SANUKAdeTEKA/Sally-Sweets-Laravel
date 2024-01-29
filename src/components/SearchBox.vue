<template>
    <div>
        <input type="text" v-model="searchQuery" placeholder="Search sweets" />
        <button @click="search">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        search() {
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>
