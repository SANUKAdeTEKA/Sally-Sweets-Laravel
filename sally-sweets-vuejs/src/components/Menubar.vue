<template>
    <div class="menubar" style="  background-color: rgb(211, 201, 205);">
        <div class="topic">Explore the Sweets we got for you</div>
    </div>
</template>

<style>
.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10%;
    padding-left: 100px;
        
}

.topic {
    font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 48px;
        margin-left: 10px;
}

@media (max-width: 768px) {
    .menubar {
        flex-direction: column; 
        height: auto; 
    }

    .topic {
        margin-left: 0; 
        font-size: 18px; 
        margin-top: 15px; 
    }
}
</style>
