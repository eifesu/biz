
    <template>
        <div class="main" @click.prevent="router.push({path: `/company/${props.item.id}`,})">
            <div class="profile">
                <img :src="props.item.profileURL" />
            </div>
            <div class="info">
                <div v-if="props.item.certified" id="certified">
                    <p style="fontSize: 8px">Certified</p>
                    <Icon icon="material-symbols:check-circle-outline" width="10px" color="white"/>
                </div>
                <h1 id="name">{{ props.item.name }}</h1>
                <p id="location">
                    {{ props.item.location}}
                </p>
                <p id="desc">
                    {{ props.item.desc.substring(0, 75)}}...
                </p>
            </div>
            <Icon icon="material-symbols:read-more" class="icon"/>
        </div>
    </template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
    interface Props {
        item : {
            id: number,
            certified: boolean,
            name: string,
            rating: number,
            desc: string,
            profileURL: string,
            location: string,
        }

    }
    const props = defineProps<Props>()
    const router = useRouter();
</script>

<style scoped>
.main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--secondary-color);
    width: 100%;
    margin: 0;
    padding: .5rem;
    height: 8rem;
    border-radius: 1rem;
    margin-bottom: 20px;
}

.main:hover {
    filter: brightness(95%);
    cursor: pointer;
}
#desc {
    font-size: 8px;
    font-weight: 500;
    max-width: 300px;
    opacity: 0.3;
}

.info {
    display: flex;
    flex-direction: column;
    max-width: 60%;
    height: 100%;
    justify-content: center;
    align-items: start;
    text-align: start;
    padding: .25rem;
}

.info h1 {
    font-size: 18px;
    margin: 0;
}

.info p {
    font-size: 12px;
    margin: 0;
    font-family: Montserrat Alternates;
    font-weight: 500;
}

.star {
    color: var(--primary-color);
    margin: 0;
    padding: 0;
}

.stars {
    margin-bottom: 5px;
}


#location {
    font-size: 8px;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 5px;
}

#name {
    font-weight: bold;
    font-size: 12px;
    font-family: Montserrat Alternates;

}


#certified {
    color: white;
    font-family: Montserrat Alternates;
    font-weight: bold;
    display: flex;
    justify-content: center;
    gap: .25rem;
    border-radius: .25rem;
    align-items: center;
    font-size: 8px;
    margin-bottom: 5px;
    padding: .25rem .5rem;
}

#certified {
    background-color: var(--primary-color);

}


.icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--tertiary-color);
}

.profile {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 1.5rem;
}
</style>