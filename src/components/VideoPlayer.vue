<template>
  <div class="video-player">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const props = defineProps<{
  src: string
}>()

const videoPlayer = ref<HTMLVideoElement | null>(null)
let player: any = null

onMounted(() => {
  if (videoPlayer.value) {
    player = videojs(videoPlayer.value, {
      controls: true,
      autoplay: false,
      preload: 'auto'
    })
  }
})

watch(() => props.src, (newSrc) => {
  if (player) {
    player.src({ type: 'video/mp4', src: newSrc })
  }
})
</script>

<style scoped>
.video-player {
  max-width: 100%;
  margin: 0 auto;
}
</style>