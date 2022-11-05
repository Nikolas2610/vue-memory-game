<template>
    <div class="flip-card">
        <div class="flip-card-inner" :class="card.rotateCard ? 'rotate' : false">
            <div class="flip-card-front">
                <img :src="require('@/assets/svgs/question-mark-svgrepo-com.svg')" alt="Question Mark"
                    style="width:200px;height:200px;">
            </div>
            <div class="flip-card-back">
                <img :src="card.image" alt="Question Mark" style="width:200px;height:200px;">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['card'],
})
</script>

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 200px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.rotate {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: rgb(255, 255, 255);
    color: black;

}

.flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
}
</style>