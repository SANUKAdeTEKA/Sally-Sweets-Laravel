<template>
  <div class="canvas-paper">
    <div class="home">
      <div>
      <BackgroundImage ref="backgroundSection" />
      <div class="sticky-nav">
        <Navigation/>
        <Buttons />
        <AddProducts/>
        <Menubar/>
        <Backtotop />
        <Products />
        <Reviews/>
        <BackgroundImage2 />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage.vue";
import BackgroundImage2 from "@/components/BackgroundImage2.vue";
import WelcomeMsg from "@/components/WelcomeMsg.vue";
import Buttons from "@/components/Buttons.vue";
import Navigation from "@/components/Navigation.vue";
import Products from "@/components/Products.vue";
import Menubar from "@/components/Menubar.vue";
import Backtotop from "@/components/Backtotop.vue";
import Reviews from "@/components/Customer.vue";
import ChatBot from "../components/ChatBot.vue"
export default {
  name: 'Home',
  components: {
    BackgroundImage,
    WelcomeMsg,
    BackgroundImage2,
    Buttons,
    Navigation,
    Products,
    Menubar,
    Backtotop,
    Reviews,
    ChatBot
  },
};
</script>
