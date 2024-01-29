<template>
  <nav class="bg-transparent dark:bg-white-900 sticky top-0 z-10">
    <div class="max-w-screen-100% flex items-center justify-between ml-4 md:ml-10 mr-4 md:mr-10 p-2 md:p-4">
      <img src="../assets/logo.png" class="h-10 md:h-12" />
      <div class="md:flex hidden">
        <ul
          class="flex flex-col p-0 md:p-0 mt-2 md:mt-4 font-medium border border-gray-100  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <router-link
  to="/"
  class="block py-1 md:py-2 px-2 md:px-3 text-black rounded md:p-0 md:hover:text-blue-700"
  :class="{ 'bg-transparent': $route.name !== 'Home', 'text-selected font-bold': $route.name === 'Home' }"
>
  Sweets
</router-link>
          </li>
          <li>
  <router-link
    to="/side"
    class="block py-1 md:py-2 px-2 md:px-3 text-black rounded md:p-0 md:hover:text-blue-700"
    :class="{ 'bg-transparent': $route.name !== 'SideRoom', 'text-selected': $route.name === 'SideRoom' }"
  >
    Side Room
  </router-link>
</li>

<li>
  <a
    class="block py-1 md:py-2 px-2 md:px-3 text-black rounded md:p-0 md:hover:text-blue-700"
    @click="goToBottomOfPage"
    style="cursor: pointer;"
  >
    About us
  </a>
</li>


        </ul>
      </div>
      <div v-if="$route.name !== 'About'" class="relative block md:hidden">
        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          class="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 dark:bg-rgb(68,51,41) dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search..."
        />
      </div>
      <div v-if="user" class="flex items-center">
  <img
    v-if="user.photoURL"
    @click="toggleProfilePopup"
    :src="user.photoURL"
    class="h-10 w-10 rounded-full cursor-pointer"
    alt="Profile Pic"
  />
  <img
    v-else
    src="../assets/user.png"
    @click="toggleProfilePopup"
    class="h-10 w-10 rounded-full cursor-pointer"
    alt="Default Profile Pic"
  />

  <transition name="fade">
  <div v-if="showProfilePopup" class="profile-popup">
    <p v-if="user" class="text-black dark:text-black-400 text-sm mb-4">
     <center> Logged in as : <br>{{ user.email }}</center>
    </p>
    <button @click="signOut" class="text-white bg-btnback focus:outline-none rounded-lg text-sm p-2.5 font-thin">
      Sign Out
    </button>
  </div>
</transition>


  <span class="mx-2"></span>
</div>
      <div v-else class="flex">
        <router-link
          v-if="!isRegisterOrLoginPage"
          to="/register"
          class="w-30 route-link text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 focus:outline-none text-sm p-2.5 gold-animation"
        ></router-link>
        <span class="mx-2"></span>
        <router-link
          v-if="!isRegisterOrLoginPage"
          to="/login"
          class="text-white bg-btnback focus:outline-none rounded-lg text-sm p-2.5 font-thin "
          >Login</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();


    return {
      router,
    };
  },
  data() {
    return {
      user: null,
      showProfilePopup: false,
    };
  },
  computed: {
    isRegisterOrLoginPage() {
      return this.$route.name === "Register" || this.$route.name === "Login";
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });

    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {

    goToBottomOfPage() {
    this.$router.push("/");

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 500); 
  },

    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.user = null; 
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    handleScroll() {
      this.closeProfilePopup();
    },

    openProfilePopup() {
      this.showProfilePopup = true;
    },
    closeProfilePopup() {
      this.showProfilePopup = false;
    },
    toggleProfilePopup() {
      this.showProfilePopup = !this.showProfilePopup;

      if (this.showProfilePopup) {
        window.addEventListener('scroll', this.handleScroll);
      } else {
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
  },
};
</script>


<style scoped>
nav {
  background-color: rgba(202, 158, 175,0.49);
  backdrop-filter: blur(10px);
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700; 
}

.text-gray-800,
.dark:text-black-500 {
  color: darkgray;
}

input[type="text"] {
  background-image: url("../assets/search-icon.png");
  background-repeat: no-repeat;
  background-position: 5px center;
  padding-left: 30px;
}

@media (max-width: 767px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    width: 100%;
    padding-left: 0;
  }

  li {
    margin-bottom: 1rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.profile-popup {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgb(239,206,220);
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px; 
  height: 150px;
  z-index: 10;
  margin-right: 10px;
  margin-top: 10px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
}

.profile-popup button {
  position: absolute;
  bottom: 16px; 
  left: 50%; 
  transform: translateX(-50%); 
  text-align: center;
  width: 150px; 
}

.route-link {
  background-image: url("../assets/discountnavbar.jpg");
  background-size: cover;
  width: 150px;
  height: 40px;
}

@keyframes goldLine {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 223, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 0 10px rgb(249, 229, 98);
  }
}

.gold-animation {
  animation: goldLine 2s infinite;
}
</style>