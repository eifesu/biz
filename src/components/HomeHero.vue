<template>
    <div>
        <p class="biz">biz.</p>
        <p>Join our team of <br/> handpicked expert <br/> businesses.</p>
        <AppButton text="Apply for certification" />
    </div>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue';


</script>

<style scoped>

div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: auto;
    width: 100%;
    gap: 1.5rem;
    background: url('@/assets/img/HeroImage.jpg');
    background-size: cover;
    background-color: grey;
    background-blend-mode: multiply;
    background-position: center;
    padding: 2rem 1rem;
}

p {
    margin: 0;
    color: white;
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 24px;
}
.biz {
    
    font-size: 10px;
}
@media only screen and (min-width: 640px) {
  div {
    text-align: center;
    align-items: center;
  }
  p {
    font-size: 36px;
  }
  .biz {
    font-size: 20px;
  }

}

</style>