<template>
  <div class="container-fluid h-100 bg-dark">
    <div class="row p-6 pt-6">
      <div class="col text-center text-white display-2">Memory Game</div>
    </div>
    <div class="row mt-4">
      <div v-for="(card) in cards" :key="card.id" class="col mt-4">
        <FLipCard @click="turnCard(card.id)" :card="card" />
      </div>
    </div>

    <div class="result position-absolute top-0 start-0 bg-green display-4" v-if="mistakes > 0">
      Mistakes: {{ mistakes }}
    </div>
    <div class="result position-absolute bottom-0 start-0 bg-warning">
      <h4>{{ result }}</h4>
    </div>
    <div class="result position-absolute bottom-0 end-0" v-if="newGame">
      <button class="btn btn-primary" @click="createNewGame()">New Game</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FLipCard from '../components/FLipCard.vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      mistakes: 0,
      newGame: false,
      result: '',
      selectedCard: -1,
      cards: [
        { match: 0, image: require('@/assets/images/1.jpg'), finish: false, rotateCard: false, id: 0 },
        { match: 1, image: require('@/assets/images/2.jpg'), finish: false, rotateCard: false, id: 1 },
        { match: 2, image: require('@/assets/images/3.jpg'), finish: false, rotateCard: false, id: 2 },
        { match: 3, image: require('@/assets/images/4.jpg'), finish: false, rotateCard: false, id: 3 },
        { match: 4, image: require('@/assets/images/5.jpg'), finish: false, rotateCard: false, id: 4 },
        { match: 5, image: require('@/assets/images/6.jpg'), finish: false, rotateCard: false, id: 5 },
        { match: 6, image: require('@/assets/images/7.jpg'), finish: false, rotateCard: false, id: 6 },
        { match: 7, image: require('@/assets/images/8.jpg'), finish: false, rotateCard: false, id: 7 },
        { match: 0, image: require('@/assets/images/1.jpg'), finish: false, rotateCard: false, id: 8 },
        { match: 1, image: require('@/assets/images/2.jpg'), finish: false, rotateCard: false, id: 9 },
        { match: 2, image: require('@/assets/images/3.jpg'), finish: false, rotateCard: false, id: 10 },
        { match: 3, image: require('@/assets/images/4.jpg'), finish: false, rotateCard: false, id: 11 },
        { match: 4, image: require('@/assets/images/5.jpg'), finish: false, rotateCard: false, id: 12 },
        { match: 5, image: require('@/assets/images/6.jpg'), finish: false, rotateCard: false, id: 13 },
        { match: 6, image: require('@/assets/images/7.jpg'), finish: false, rotateCard: false, id: 14 },
        { match: 7, image: require('@/assets/images/8.jpg'), finish: false, rotateCard: false, id: 15 },
      ]
    }
  },
  components: {
    FLipCard
  },
  methods: {
    turnCard(index: number) {
      const pos = this.cards.findIndex(card => card.id === index)
      if (!this.cards[pos].finish) {
        this.cards[pos].rotateCard = !this.cards[pos].rotateCard;
        if (this.selectedCard === -1) {
          this.selectedCard = index;
        } else {
          const pos2 = this.cards.findIndex(card => card.id === this.selectedCard)
          if (this.cards[pos2].match === this.cards[pos].match) {
            this.result = 'Match'
            console.log('Match')
            this.cards[pos2].finish = true;
            this.cards[pos].finish = true;
            this.selectedCard = -1;
            console.log(this.checkWinner())
            if (this.checkWinner()) {
              this.result = 'Win'
              this.newGame = true;
            }
          } else {
            this.mistakes++;
            this.result = 'Wrong Combo'
            console.log('wrong combo')
            setTimeout(() => {
              this.cards[pos2].rotateCard = false;
              this.cards[pos].rotateCard = false;
              this.selectedCard = -1;
            }, 1500);
          }
        }
      }
    },
    checkWinner() {
      return this.cards.every(card => card.finish);
    },
    shuffleArray(array: Array<{ match: number, image: string, finish: boolean, rotateCard: boolean, id: number }>) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    },
    createNewGame() {
      this.cards.forEach(card => {
        card.finish = false;
        card.rotateCard = false;
      });
      this.result = '';
      this.mistakes = 0;
    }
  },
  mounted() {
    this.shuffleArray(this.cards)
  }
});
</script>

<style lang="scss" scoped>
</style>
