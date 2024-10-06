<template>
  <div class="document-viewer">
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

const props = defineProps<{
  src: string
}>()

const pdfCanvas = ref<HTMLCanvasElement | null>(null)

const renderPDF = async (src: string) => {
  const loadingTask = pdfjsLib.getDocument(src)
  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1)

  const scale = 1.5
  const viewport = page.getViewport({ scale })

  const canvas = pdfCanvas.value
  if (canvas) {
    const context = canvas.getContext('2d')
    canvas.height = viewport.height
    canvas.width = viewport.width

    if (context) {
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      }
      await page.render(renderContext)
    }
  }
}

onMounted(() => {
  renderPDF(props.src)
})

watch(() => props.src, (newSrc) => {
  renderPDF(newSrc)
})
</script>

<style scoped>
.document-viewer {
  max-width: 100%;
  overflow-x: auto;
}

canvas {
  border: 1px solid #ddd;
}
</style>