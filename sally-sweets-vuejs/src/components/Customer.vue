<template>
    <div class="customer-reviews" style="height: 400px; background-color: rgb(202, 158, 175)" z-index ="5">
        <h2 class="review-heading" style="padding-top: 25px;"><b>What others thing about us?</b></h2>
        <div style="margin-top: 20px;" class="review-row"> 
            <div v-for="review in reviews" :key="review.id" class="review">
                <div class="review-box">
                    <div class="review-header">
                        <img :src="review.avatar" alt="Customer Avatar" class="avatar">
                        <div class="review-info">
                            <h3>{{ review.name }}</h3>
                            <p>{{ review.date }}</p>
                            <p>{{ review.stars }}</p>
                        </div>
                    </div>
                    <p class="review-content">{{ review.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import avatar1 from "@/assets/cus1.jpg";
import avatar2 from "@/assets/cus2.jpg";
import avatar3 from "@/assets/cus3.jpg";

export default {
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    name: "Mike Oxlong",
                    avatar: avatar1,
                    date: "December 5, 2023",
                    stars: "⭐⭐⭐⭐⭐",
                    content: "The variety of sweets available is impressive, and each item is a masterpiece in itself. The attention to detail in presentation and the use of high-quality ingredients truly set Sally Sweets apart. The customer service is excellent, with the staff always ready to offer recommendations or help you find the perfect treat."
                },
                {
                    id: 2,
                    name: "Emilly William",
                    avatar: avatar2,
                    date: "December 12, 2023",
                    stars: "⭐⭐⭐⭐⭐",
                    content: "The attention to detail in crafting these treats is apparent, and it's clear that the bakers at Sally Sweets are passionate about their creations. The shop has a warm and inviting ambiance, making it a delightful place to enjoy some indulgent treats. Highly recommended!"
                },
                {
                    id: 3,
                    name: "Ben Stonebridge",
                    avatar: avatar3,
                    date: "January 1, 2024",
                    stars: "⭐⭐⭐⭐",
                    content: "Sally Sweets is my guilty pleasure! The sweets here are not only delicious but also visually stunning. I've tried a variety of items, from their signature cupcakes to the seasonal specials, and I'm always impressed. The flavors are well-balanced, and you can tell that each item is made with care. "
                }
            ]
        };
    }
};
</script>

<style scoped>

.review-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
}

.review {
    font-family: 'Josefin Sans', sans-serif;
}

.review-box {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 5px; 
    width: 60%;
    text-align: justify;
}

.review-header {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
}

.review-heading {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}
</style>