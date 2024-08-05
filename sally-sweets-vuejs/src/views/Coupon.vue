<template>
  <Navigation />
  <div class="container z-0">
    <h1 class="text" style="margin-top: -100px;">Save your coupon to use in our physical shop!</h1>
    <br /><br />
    <div class="image-container" ref="imageContainer">
      <img :src="imageSrc" alt="Image" class="image" />
      <div class="border"></div>
      <div class="text-overlay">
        <p class="image-text" style="color: black;">
          Your unique coupon ID<br /><span :style="{ color: 'red' }">{{ randomText }}</span>
        </p>
      </div>
    </div>
    <button class="download-button" @click="downloadImage">Download</button>
    </div>
</template>

<script>
import couponImage from "../assets/coupon.jpg";
import html2canvas from "html2canvas";
import Navigation from "../components/Navigation.vue";

export default {
  data() {
    return {
      imageSrc: couponImage,
      randomText: "",
    };
  },
  components: {
    Navigation,
  },
  methods: {
    generateRandomText() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.randomText = result;
    },
    async downloadImage() {
      const imageContainer = this.$refs.imageContainer;

      const canvas = await html2canvas(imageContainer);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = "coupon_image.jpg";
      link.click();
    },
  },
  mounted() {
    this.generateRandomText();
  },
};
</script>

<style>

body {
  /* overflow: hidden; */
}


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100%;
  background-color: rgb(211, 201, 205);
}

.image-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  position: relative;
} 

.image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  border: 5px solid transparent;
  animation: borderAnimation 2s infinite;
}

.text-overlay {
  position: absolute;
  top: 70%;
  left: 22%;
  transform: translate(-50%, -50%);
}

.image-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
}

@keyframes borderAnimation {
  0% {
    border-color: transparent;
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5);
  }
  50% {
    border-color: rgb(255, 0, 0);
    box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5);
  }
}

.text {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: rgb(85,60,72);
}

.download-button {
  padding: 10px 20px;
  background-color: rgb(85,60,72);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
