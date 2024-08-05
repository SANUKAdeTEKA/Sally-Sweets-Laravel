<template>
    <div>
        <h1>Welcome to Sally Sweets!</h1>
        <p>Hi there, I'm Sally Sweets. How can I assist you today?</p>
    </div>
</template>

<script>
export default {
    name: 'WelcomeMsg',
}
</script>

<style scoped>
h1 {
    color: #000000;
    text-align: center; 
    margin-bottom: 10px; 
    z-index: 20;
}

p {
    font-size: 18px;
    text-align: center; 
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    position: relative;
    z-index: 10;
    border-bottom-left-radius: 5;
}
</style>
