<template>
    <main>
        <div class="banner">
            <div class="profile">
                <img :src="props.company.profileURL" alt="">
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Item } from '@/stores/search';
interface Props {
    company: Item
}
const props = defineProps<Props>()
const router = useRouter()

var rgb = getAverageRGB(document.querySelector('img') as HTMLImageElement)
function getAverageRGB(imgEl : HTMLImageElement) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;
        
    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('x');
        return defaultRGB;
    }
    
    length = data.data.length;
    
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    return rgb;
    
}
</script>

<style scoped>
    a {
        font-weight: bold;
        color: var(--primary-color);
        font-size: 12px;
        font-family: Montserrat;
        text-decoration: underline;
    }

    .banner {
        margin-top: 10px;
        border-radius: 10px;
        width: 100%;
        height: 8rem;
        background-color: var(--primary-color);
    }

    .profile {
        width: 3rem;
        height: 3rem;
        background-color: white;
        position: relative;
        top: 1rem;
        left: 1rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 1.5rem;
    }
</style>