<template>
  <div class="audio-player">
    <button @click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
    <input type="range" min="0" max="100" v-model="volume" @input="updateVolume">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Howl } from 'howler'

const props = defineProps<{
  src: string
}>()

let sound: Howl | null = null
const isPlaying = ref(false)
const volume = ref(50)

onMounted(() => {
  createHowl()
})

watch(() => props.src, () => {
  if (sound) {
    sound.unload()
  }
  createHowl()
})

const createHowl = () => {
  sound = new Howl({
    src: [props.src],
    volume: volume.value / 100
  })
}

const togglePlay = () => {
  if (sound) {
    if (isPlaying.value) {
      sound.pause()
    } else {
      sound.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

const updateVolume = () => {
  if (sound) {
    sound.volume(volume.value / 100)
  }
}
</script>

<style scoped>
.audio-player {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
}

input[type="range"] {
  width: 100px;
}
</style>