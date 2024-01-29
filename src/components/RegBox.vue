<template>
    <div class="home">
    <Navigation/>
    <div class="mt-8">
        <h1 class="text-3xl font-semibold mb-6 text-center">Register</h1>
        <form @submit.prevent="register" class="max-w-sm mx-auto my-8">
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
                <input type="email" id="email" v-model="email" required
                    class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
                <input type="password" id="password" v-model="password" required
                    class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
                    Register
                </button>
            </div>
            <br>
            <div class="flex items-center justify-between">
                <router-link to="/login" class="text-gray-500 dark:text-gray-400 focus:outline-none hover:text-blue-600 brounded-lg text-sm p-2.5">
                    Already have an account?
                </router-link>
            </div>
        </form>
    </div>
    <img src="../assets/discount.png" alt="Image" class="mt-8 mx-auto rounded-md" style="border-radius: 10px;" />
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Navigation from "@/components/Navigation.vue";
export default {
    components: {
        Navigation
    },

    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        register() {
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data) => {
                    console.log("Logged in");
                    this.$router.push("/coupon");
                })
                .catch((error) => {
                    console.log(error.code);
                    alert("Sorry, you could not sign up: " + error.message);
                });
        },
    },
};
</script>

<style scoped>
.home {
    background-color: rgb(211, 201, 205);
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
}
</style>