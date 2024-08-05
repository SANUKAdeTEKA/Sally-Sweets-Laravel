<template>
    <div class="canvas-paper z-0 custom-component-background" id="productsSection">
      <div class="text-gray-700 py-8 px-4 md:px-8 space-y-8 z-0">
        <div class="flex flex-wrap justify-center -mx-2">
          <div v-for="(product, index) in products" :key="index" class="product-box mb-8 md:w-1/2 lg:w-1/3 px-2">
            <div class="box-shadow hover-zoom">
              <img :src="product.image" :alt="`Sweets Image ${index + 1}`" class="object-cover w-full h-64 rounded-md"/>
              <div class="product-details p-4 custom-background">
                <p class="text-lg font-medium" style="font-family: 'Josefin Sans', sans-serif; font-weight: 700;">{{ product.name }}</p>
                <p class="text-sm" style="font-family: 'Josefin Sans', sans-serif;">{{ product.description }}</p>
                <span class="text-indigo-600 font-semibold block mt-2" style="font-family: 'Josefin Sans', sans-serif;">{{ `£${product.price.toFixed(2)}` }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

import Sweet1 from '@/assets/Sweets/jellybabies.png';
import Sweet2 from '@/assets/Sweets/blackjacks.jpg';
import Sweet3 from '@/assets/Sweets/fruitpastilles.jpg';
import Sweet4 from '@/assets/Sweets/maltsers.jpg';
import Sweet5 from '@/assets/Sweets/smarties.jpg';
import Sweet6 from '@/assets/Sweets/winegums.jpg';
import Sweet7 from '@/assets/Sweets/delightbar.jpg';
import Sweet8 from '@/assets/Sweets/pickandmixers.jpg';
import Sweet9 from '@/assets/Sweets/blissbites.jpg';
import Sweet10 from '@/assets/Sweets/allamericantaffy.jpg';
import Sweet11 from '@/assets/Sweets/decadentdarkchocolatetruffles.jpeg';
import Sweet12 from '@/assets/Sweets/rainbowcandylollipops.jpeg';
import Sweet13 from '@/assets/Sweets/shortcakebars.jpeg';
import Sweet14 from '@/assets/Sweets/donutholes.jpg';
import Sweet15 from '@/assets/Sweets/meringuepiebites.jpg';

  export default {
    data() {
      return {
        products: [
          { 
            name: 'Pick and Mixers',
            image: Sweet8,
            description: 'Create your own sweet symphony with our luxurious pick-and-mix selection. From gummy bears to licorice twists, the choice is yours!',
            price: 12.99
          },
          { 
            name: 'Bliss Bites',
            image: Sweet9,
            description: 'Delight your taste buds with our delicious bites, featuring a perfect blend of flavors that will keep you coming back for more.',
            price: 7.99
          },
          { 
            name: 'All-American Gourmet Taffy',
            image: Sweet10,
            description: 'Embark on a flavor journey with our mouthwatering All-American Gourmet Taffy. Satisfy your cravings with every chew!',
            price: 14.99
          },
          { 
            name: 'Donut Holes',
            image: Sweet14,
            description: 'Indulge in the sweet perfection of our mouthwatering Donut Holes. Each bite is a delightful treat that satisfies your cravings.',
            price: 11.99
          },
          { 
            name: 'Lemon Meringue Pie Bites',
            image: Sweet15,
            description: 'Experience the heavenly taste of our Lemon Meringue Pie Bites, capturing the essence of this classic dessert in every bite.',
            price: 9.99
          },
          { 
            name: 'Jelly Babies',
            image: Sweet1,
            description: 'Delicious and delightful, our Jelly Babies offer a perfect blend of flavors that will transport you to a world of sweet joy.',
            price: 6.99
          },
          { 
            name: 'Black Jacks',
            image: Sweet2,
            description: 'Satisfy your cravings with the intense and mouthwatering flavor of our Black Jacks, a classic choice for a delightful treat.',
            price: 13.99
          },
          { 
            name: 'Fruit Pastilles',
            image: Sweet3,
            description: 'Experience the heavenly taste of our Fruit Pastilles, bursting with fruity goodness in every chewy and flavorful bite.',
            price: 10.99
          },
          { 
            name: 'Maltsers',
            image: Sweet4,
            description: 'Treat yourself to the luxurious taste of our Maltsers, featuring a perfect combination of malted goodness that leaves you wanting more.',
            price: 18.99
          },
          { 
            name: 'Smarties',
            image: Sweet5,
            description: 'Indulge in the delightful and colorful world of our Smarties, offering a perfect blend of sweet flavors in every crunchy bite.',
            price: 8.99
          },
          { 
            name: 'Wine Gums',
            image: Sweet6,
            description: 'Satisfy your cravings with our mouthwatering Wine Gums, offering a delightful burst of flavors that make each bite a true indulgence.',
            price: 12.99
          },
          { 
            name: 'Delight Bar',
            image: Sweet7,
            description: 'Experience the heavenly taste of our Delight Bar, a decadent treat that promises to delight your senses with every bite.',
            price: 9.99
          },
          { 
            name: 'Decadent Dark Chocolate Truffles',
            image: Sweet11,
            description: 'Indulge in the rich and luxurious experience of our Decadent Dark Chocolate Truffles, each piece a masterpiece of chocolate perfection.',
            price: 11.99
          },
          { 
            name: 'Rainbow Candy Lollipops',
            image: Sweet12,
            description: 'Treat yourself to the whimsical and colorful world of our Rainbow Candy Lollipops, a luxurious delight that will leave you wanting more.',
            price: 16.99
          },
          { 
            name: 'Shortcake Bars',
            image: Sweet13,
            description: 'Delicious and delightful, our Shortcake Bars offer a perfect blend of flavors, creating a sweet harmony in every bite.',
            price: 7.99
          }
        ]

      };
    },
    computed: {
    productsInRows() {
      const chunkedProducts = [];
      const productsCopy = [...this.products];

      while (productsCopy.length) {
        chunkedProducts.push(productsCopy.splice(0, 3));
      }

      return chunkedProducts;
    }
  }
};
</script>
  
<style>
.custom-component-background {
  background-color: rgb(211, 201, 205);
  padding: 0 50px; 
}

.product-box {
  width: calc(100% - 30px); 
  box-sizing: border-box;
  margin-bottom: 30px; 
  margin-left: 30px;
  margin-right: 30px;
}

@media (min-width: 640px) {
  .product-box {
    width: calc(50% - 20px); 
    }
}



@media (min-width: 1024px) {
  .product-box {
    width: calc(33.33333% - 100px); 
  }
}

.box-shadow {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.hover-zoom:hover {
  transform: scale(1.05);
}

.product-details {
  background-color: #ffffff;
  transition: background-color 0.3s ease-in-out;
}

.custom-background {
  background-color: rgb(202, 158, 175);
}

.hover-zoom:hover .product-details {
  background-color: #f5f5f5;
}
</style>