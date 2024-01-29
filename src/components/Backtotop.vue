<template>
    <div>
        <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
            <span class="scroll-to-top-icon"></span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showButton: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); 
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showButton = window.pageYOffset > 1000;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style>
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    z-index: 999;
    background-image: url('../assets/top.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
    left: 50%;
    transform: translateX(-50%);
}

.scroll-to-top-icon {
    display: none;
}
</style>
