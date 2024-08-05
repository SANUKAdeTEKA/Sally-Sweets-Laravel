

<script>
export default {
    name: 'ScrollButton',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToBackgroundEnd() {
            const backgroundSection = this.$refs.backgroundSection.$el;
            const backgroundHeight = backgroundSection.offsetHeight;

            window.scrollTo({ top: backgroundHeight, behavior: 'smooth' });
        },

        handleScroll() {
            const backgroundSection = this.$refs.backgroundSection.$el;
            const backgroundHeight = backgroundSection.offsetHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition + windowHeight >= backgroundHeight) {
            }
        }
    }
}
</script>