<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="content-section">
      <h2>Videos</h2>
      <video-player :src="currentVideo" />
    </div>
    <div class="content-section">
      <h2>Music</h2>
      <audio-player :src="currentAudio" />
    </div>
    <div class="content-section">
      <h2>Documents</h2>
      <document-viewer :src="currentDocument" />
    </div>
    <div class="subscription-section">
      <h2>Subscription</h2>
      <p v-if="isSubscribed">You are currently subscribed. Enjoy full access!</p>
      <button v-else @click="subscribe">Subscribe Now</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
import DocumentViewer from '../components/DocumentViewer.vue'

const currentVideo = ref('path/to/sample/video.mp4')
const currentAudio = ref('path/to/sample/audio.mp3')
const currentDocument = ref('path/to/sample/document.pdf')
const isSubscribed = ref(false)

const subscribe = () => {
  // Implement subscription logic
  isSubscribed.value = true
}
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.content-section {
  margin-bottom: 30px;
}

.subscription-section {
  margin-top: 40px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>