
<template>
  <div class="home">
  <Navigation/>
  <!-- Form for adding a product -->
  <form @submit.prevent="submitForm" class="add-product-form">
    <!-- Input for the product name -->
    Name:
    <input class="input-field mt-1 p-2 w-full border rounded-md" v-model="formData.name" placeholder="Product Name" />
    <!-- Error message for the product name -->
    <p v-if="errors.name" class="error">{{ errors.name }}</p>

    Description:
    <input class="input-field mt-1 p-2 w-full border rounded-md" v-model="formData.description" placeholder="Description of the Product" />
    <!-- Error message for the product description -->
    <p v-if="errors.description" class="error">{{ errors.description }}</p>

    <!-- Input for the product price -->
    Price:
    <input class="input-field mt-1 p-2 w-full border rounded-md" v-model="formData.price" placeholder="Product Price" />
    <!-- Error message for the product price -->
    <p v-if="errors.price" class="error">{{ errors.price }}</p>
    <br>
    <!-- Button for submitting the form -->
    <button type="submit" class="submit-button">Add Product</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios';
import Navigation from "@/components/Navigation.vue";

export default {
  name: 'Home',
  components: {
    Navigation
  },
  data() {
    return {
      formData: {
        name: '',
        price: '',
        description: ''
      },
      errors: {}
    };
  },
  methods: {
    validateInput() {
      const errors = {};
      if (!this.formData.name) errors.name = 'Name is required';
      if (!this.formData.price || isNaN(parseFloat(this.formData.price))) errors.price = 'Price is required and must be a number';
      if (!this.formData.description) errors.description = 'Description is required';
      return errors;
    },
    async submitForm() {
      const errors = this.validateInput();
      if (Object.keys(errors).length > 0) {
        this.errors = errors;
        return;
      }

      try {
        console.log('Submitting form with data:', this.formData); // Log the form data
        // Send a POST request to the backend to add the product
        await axios.post('http://127.0.0.1:8000/api/products', this.formData);
        // If the request is successful, do something (e.g., redirect to another page)
        console.log('Product added successfully');
        // Reset form data and errors
        this.formData = { name: '', price: '', description: '' };
        this.errors = {};
      } catch (error) {
        console.error('An error occurred while adding the product:', error);
      }
    }
  }
};
</script>

  <style scoped>
  .home {
    background-color: rgb(211, 201, 205);
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
  }
  .error {
    color: red;
  }
  .add-product-form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgb(211, 201, 205);
    border-radius: 8px;
  }
  .input-field {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
  }
  .submit-button {
    padding: 10px 20px;
    background-color: rgba(202, 158, 175);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .submit-button:hover {
    background-color: rgba(202, 158, 175, 0.49);
  }
  </style>
