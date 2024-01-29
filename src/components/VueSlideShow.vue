<template>
    <div class="slideshow">
        <img :src="currentImage" alt="Slideshow Image" />
        <button class="arrow-button left" @click="previousImage">&#8249;</button>
        <button class="arrow-button right" @click="nextImage">&#8250;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'https://r4.wallpaperflare.com/wallpaper/132/752/915/food-candy-lollipop-sweets-wallpaper-b3dff787be72573446da6a64e4bd2fea.jpg',
                'https://c1.wallpaperflare.com/path/859/388/912/interior-table-coffee-bar-83fa9bf89c6617d6f901f0e10c127cde.jpg',
                'https://c1.wallpaperflare.com/path/134/310/462/night-festival-club-music-8767d2a4cf76525155989029159a0cdb.jpg'
            ],
            currentIndex: 0,
            slideshowWidth: 0,
            slideshowHeight: 0,
            intervalId: null, 
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    },
    mounted() {
        this.calculateSlideshowSize();
        window.addEventListener('resize', this.calculateSlideshowSize);
        this.startSlideshow(); 
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.calculateSlideshowSize);
        this.stopSlideshow(); 
    },
    methods: {
        startSlideshow() {
            this.intervalId = setInterval(() => {
                this.nextImage();
            }, 5000); 
        },
        stopSlideshow() {
            clearInterval(this.intervalId); 
        },
        previousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        calculateSlideshowSize() {
            this.slideshowWidth = window.innerWidth;
            this.slideshowHeight = window.innerHeight;
        },
    },
};
</script>

<style scoped>
.slideshow {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.slideshow img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    background: black;
    width: 100px;
    border: none;
    color: white;
    cursor: pointer;
}


.left {
    left: 10px;
}

.right {
    right: 10px;
}
</style>
