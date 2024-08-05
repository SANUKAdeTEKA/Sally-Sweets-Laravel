<template>
  <div class="about">
    <Navigation class="inset-y-0 fixed bg-transparent"/>
    <div class="button-row">
      <button class="button button-1 group" @click="showPopup('adult')" @mouseover="hoverButton('button1')" @mouseleave="unhoverButton()">
        <div class="black-box">
          <span class="button-text">{{ button1Text }}</span>
        </div>
        <span class="button-hover-text" v-if="hoveredButton === 'button1'">{{ button1HoverText }}</span>
      </button>
      <button class="button button-2 group" @click="showPopup('children')" @mouseover="hoverButton('button2')" @mouseleave="unhoverButton()">
        <div class="black-box">
          <span class="button-text">{{ button2Text }}</span>
        </div>
        <span class="button-hover-text" v-if="hoveredButton === 'button2'">{{ button2HoverText }}</span>
      </button>
      <button class="button button-3 group" @click="showPopup('gathering')" @mouseover="hoverButton('button3')" @mouseleave="unhoverButton()">
        <div class="black-box">
          <span class="button-text">{{ button3Text }}</span>
        </div>
        <span class="button-hover-text" v-if="hoveredButton === 'button3'">{{ button3HoverText }}</span>
      </button>
    </div>
    <div v-if="showingPopup" class="popup">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38330.77044414881!2d-2.0611118442772116!3d53.09810475926798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a384d09986301%3A0xa05e78a5f8b07976!2sLeek%2C%20UK!5e0!3m2!1sen!2slk!4v1706066624579!5m2!1sen!2slk?key=AIzaSyD98fjbq9equCSMKWbYaTZ0xsrvjvKfA0E"
          width="550"
          height="350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: 'Home',
  components: {
    Navigation,
  },
  data() {
    return {
      showingPopup: false,
      popupImage: '',
      hoveredButton: '',
      button1Text: 'RETRO NIGHTS',
      button2Text: "CHILDREN'S PARTIES",
      button3Text: 'PRIVATE FUNCTIONS',
      button1HoverText: "Step into Sally Sweets's Side Room and transport yourself back in time during their exclusive Retro Nights designed exclusively for adults. This nostalgic event takes patrons on a journey through the golden eras, featuring iconic music, classic arcade games, and retro-themed decor. The ambient lighting sets the perfect mood for a night of reminiscence and enjoyment. Guests can savor delectable sweets and beverages while indulging in the nostalgia of yesteryears. The Side Room transforms into a lively space where adults can unwind, socialize, and relive the magic of their favorite decades, creating unforgettable memories in a truly unique setting.",
      button2HoverText: "Sally Sweets's Side Room is not just for the grown-ups; it also plays host to vibrant and joyous children's parties. The room comes alive with colorful decorations, playful themes, and an array of sweets that cater to every young palate. From whimsical cupcakes to candy stations, Sally Sweets ensures that each child's party is a delightful experience. The Side Room provides a safe and enjoyable space for kids to celebrate special occasions, complete with interactive games, entertainment, and a sweet celebration that will be remembered long after the party ends.",
      button3HoverText: "For those seeking a unique venue for private functions, Sally Sweets's Side Room offers a charming and customizable space. Whether it's a birthday celebration, anniversary, or corporate event, the Side Room can be reserved for exclusive use. The dedicated team at Sally Sweets goes the extra mile by curating sweet packages tailored to the occasion. From elegant dessert displays to personalized treats, the Side Room transforms into a sweet haven for private gatherings. The flexibility in event planning and the delectable offerings ensure that each private function is a sweet success, leaving guests with a lasting impression of a truly memorable experience at Sally Sweets.",
    };
  },
  methods: {
    showPopup(image) {
      this.showingPopup = true;
      this.popupImage = image;
    },
    closePopup() {
      this.showingPopup = false;
      this.popupImage = '';
    },
    hoverButton(button) {
      this.hoveredButton = button;
    },
    unhoverButton() {
      this.hoveredButton = '';
    },
  },
};
</script>
<style>

.about {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: pink;
  position: relative;
}

.Navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: transparent;
}

.button-row {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  position: relative;
  z-index: 0;
  height:100vh;
  font-family: 'Josefin Sans', sans-serif;
}

.button {
  position: relative;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: filter 0.6s ease;
}


.button:hover {
  filter: brightness(60%); 
}

.button-text,
.button-hover-text {
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease, transform 0.9s ease; 
  z-index: 20;
}

.button:hover .button-text {
  opacity: 0; 
  transform: translate(-50%, -70%); 
  font-size: 20px; 
  text-align: justify;
}

.button-hover-text {
  font-size: 20px; 
  opacity: 0; 
  text-align: justify;
  transition: opacity 0.3s ease; 
}

.button:hover .button-hover-text {
  opacity: 1; 
  transform: translate(-50%, -50%); 
}

.button-1 {
  background-image: url('../assets/adult.png');
}

.button-2 {
  background-image: url('../assets/kids.png');
}

.button-3 { 
  background-image: url('../assets/event.png');
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: url('../assets/close.png');
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  background-image: url('../assets/Banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 70%;
  height: 70%;
}

.popup-content {
  margin-left: 48%;
  margin-top: 0px;
}

@media screen and (max-width: 768px) {
  .button:hover {
    filter: brightness(100%);
  }
  .button::before {
    top: auto;
    bottom: 0;
  }
}

</style>