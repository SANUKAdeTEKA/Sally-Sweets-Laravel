<template>
  <div class="home">
  <Navigation/>
  <div class="mt-8">
    <h1 class="text-3xl font-semibold mb-6 text-center">Sign in</h1>
  <form class="max-w-sm mx-auto my-8" @submit.prevent="signInWithEmailAndPassword">
    <div class="mb-4">
    <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
    <input type="email" v-model="email" id="email" class="mt-1 p-2 w-full border rounded-md">
  </div>
  <div class="mb-4">
    <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
    <input type="password" v-model="password" id="password" class="mt-1 p-2 w-full border rounded-md">
  </div>
  <button class="mt-4 text-black px-4 py-2 rounded-md focus:outline-none focus:ring transition duration-300 hover:bg-rose-500" 
  style="background-color: rgb(211, 201, 205);" @click="signInWithEmail">
    Sign In
</button>

<br>

<button class="flex items-center mt-4 text-black px-4 py-2 rounded-md focus:outline-none focus:ring transition duration-300 hover:bg-rose-500" 
  style="background-color: rgb(211, 201, 205);" @click="signInWithGoogle">
    <img src="../assets/google.png" alt="Google Icon" class="w-6 h-6 mr-2">
    <span class="ml-1">Sign In with Google</span>
</button>


<br>
<br>
<div>
<router-link to="/register" class="text-gray-500 dark:text-gray-400 focus:outline-none hover:text-blue-600 brounded-lg text-sm p-2.5">
      New to Sally Sweets?
    </router-link>
  </div>
</form>


<br>
<br>
  <div class="flex justify-center items-center mt-4 text-error">
      <p v-if="message">{{ message }}</p>
    </div>
    </div>
    </div>
</template>

<script>
import{getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import Navigation from "@/components/Navigation.vue";

export default {
  components:{
    Navigation
  },
  name: "Register",
  data(){
      return {
          email:'',
          password:'',
          message:'',
      };
  },
  methods:{
      async signInWithEmail(){
          const auth = getAuth();
          try{
              await signInWithEmailAndPassword(auth, this.email, this.password);
              this.message = 'Sign in with email successful!';
              this.$router.push('/');
          }catch (error) {
              console.error(error);
              this.message = 'Recheck your email or password cridentials.';

          }
      },
      async signInWithGoogle(){
          const auth = getAuth();
          try{
              const provider = new GoogleAuthProvider();
              await signInWithPopup(auth, provider);
              this.message = 'Sign in with google successful!';
              this.$router.push('/');
          }catch (error) {
              console.error(error);
              this.message = 'Sign in with google failed.';

          }
      },
      
  }
}


</script>
<style>
.home{
  font-family: 'Josefin Sans', sans-serif;
  height: 100vh;
}
</style>