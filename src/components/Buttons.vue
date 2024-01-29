<template>
  <div class="button-container">
      <router-link to="/side" class="button-background" :style="backgroundStyle('Button 1')">
      </router-link>
  </div>
</template>

<script>
import firstImage from "@/assets/1234.png"; 

export default {
  data() {
    return {
      images: {
        'Button 1': firstImage,
      },
    };
  },
  
  computed: {
    backgroundStyle() {
      return (buttonText) => {
        return {
          backgroundImage: `url(${this.images[buttonText]})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          color: "white",
          textAlign: "center",
          width: "100%", 
          height: "200px", 
          zIndex: 1,
          cursor: "pointer", 
          transition: "filter 0.3s ease-in-out", 
        };
      };
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  width: 100%;
}

.button-background:hover {
  opacity: 0.8; 
}
</style>
