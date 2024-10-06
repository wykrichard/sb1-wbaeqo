<template>
  <div class="home">
    <h1>Welcome to Our Media Streaming Platform</h1>
    <div v-if="!isLoggedIn">
      <p>Please log in to access all content and features.</p>
      <router-link to="/login" class="btn">Login</router-link>
      <router-link to="/register" class="btn">Register</router-link>
    </div>
    <div v-else>
      <p>Explore our full range of content in the dashboard.</p>
      <router-link to="/dashboard" class="btn">Go to Dashboard</router-link>
    </div>
    <div class="preview-section">
      <h2>Content Preview</h2>
      <!-- Add preview content here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isAuthenticated)
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.btn {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 20px;
  margin-right: 10px;
}

.preview-section {
  margin-top: 40px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}
</style>