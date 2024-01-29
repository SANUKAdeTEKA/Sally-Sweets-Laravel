<template>
    <div class="background-image" :style="backgroundStyle" z-index="5">
        <div class="blur-box description-box">
            <p>Sally Sweets, where indulgence meets enchantment. Step into a world of confectionery bliss, where the air is filled with the aroma of freshly baked delights and the shelves are adorned with an array of vibrant candies and chocolates. Our sweet haven is not just a shop; it's an immersive experience, offering handcrafted treats that range from nostalgic classics to artisanal wonders. And for those seeking a touch of exclusivity, our Side Room is available for bookings, perfect for adult gatherings, children's parties, and other special events. Come savor the magic at Sally Sweets, where every visit is a sweet escape.</p>
        </div>
        <div class="vertical-line"></div>
        <div class="vertical-line"></div>

<div class="blur-box contact-box">
    <h1 style="font-size: 24px; font-weight: 700;">Contact Us</h1>
    <br><br>    
    <p><strong>Address:</strong> 42 Sugarplum Lane, <br>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Leek, ST13 5RT<br>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;United Kingdom</p>
    <p><strong>Phone:</strong> +447488855302</p>
    <p><strong>Email:</strong> info@sallysweets.com</p>
    <p><strong>Open Hours:</strong> Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM</p>
</div>

</div>
</template>

<style scoped>
.background-image {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex; 
    opacity: 5; 
}

.blur-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.5); 
    color: white;
    backdrop-filter: blur(5px); 
    border-radius: 25px; 
}

.description-box {
    font-family: 'Josefin Sans', sans-serif;
    padding: 30px;
    width: calc(50% - 300px); 
    height: 50%;
    left: 8%; 
    transform: translateY(-50%); 
    text-align: justify;
}

.contact-box {
    font-family: 'Josefin Sans', sans-serif;
    padding: 30px;
    width: calc(50% - 300px); 
    height: 50%;
    right: 8%; 
    transform: translateY(-50%); 
}

.vertical-line {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 5px; 
    height:80%;
    vertical-align: center;
    background-color: #fff; 
    transform: translateX(-50%);
}

.action-button {
    margin-top: 20px; 
    padding: 10px 20px;
    background-color: #fff; 
    color: #000; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>



<script>
import bg from "@/assets/back2.jpg";

export default {
    data() {
        return {

            image: bg
        };
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.image})`,
            };
        },
    },
};
</script>