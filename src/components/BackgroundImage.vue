<template>
  <div class="background-image" :style="backgroundStyle">
    <transition name="fade-in" mode="out-in">
      <div v-if="showText" key="text">
        <h1>Welcome to Sally Sweets!</h1>
        <p>Indulge in Irresistible Bliss - Where Every Treat Tells a Tale of Sweet Elegance!</p>
      </div>
    </transition>
  </div>
  <button
    ref="tasteButton"
    @click="scrollToBackgroundEnd"
    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex p-0.5 overflow-hidden text-black bg-gradient-to-br font-medium lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    <transition name="fade-in" mode="out-in">
      <span
        v-if="showText"
        key="button-text"
        class="relative px-5 py-2.5 transition-all ease-in duration-75 md group-hover:bg-opacity-0"
        style="font-family: 'Josefin Sans', sans-serif; font-size: 16px; font-weight: bold; color: #333;"
      >
        Click to taste products<br><br>︾
      </span>
    </transition>
  </button>
</template>

<script>
import bgImg from "@/assets/background.jpg";

export default {
  data() {
    return {
      image: bgImg,
      showText: false,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
  },
  mounted() {
    setTimeout(() => {
      this.showText = true;
    }, 800);
  },
  methods: {
    scrollToBackgroundEnd() {
  const backgroundElement = document.querySelector(".background-image");

  const backgroundHeight = backgroundElement.offsetHeight;
  const currentScrollPosition = window.scrollY || window.pageYOffset;
  const scrollDistance = backgroundHeight - currentScrollPosition;

  window.scrollTo({
    top: currentScrollPosition + scrollDistance,
    behavior: "smooth",
  });
},


    handleScroll() {
      const backgroundSection = this.$refs.backgroundSection.$el;
      const backgroundHeight = backgroundSection.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight >= backgroundHeight) {
      }
    },
  },
};
</script>


<style scoped>
.background-image {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: top;
  z-index: -1;
}

h1 {
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 400px; 
  z-index: 20;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
}

p {
  font-size: 18px;
  text-align: center;
  margin-top: 10px; 
  font-family: 'Josefin Sans', sans-serif;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 10;
  border-bottom-left-radius: 5;
}

.fade-in-enter-active {
  animation: fade-in 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
