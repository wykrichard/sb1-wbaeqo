import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['video', 'audio', 'document'], required: true },
  url: { type: String, required: true },
  previewUrl: { type: String, required: true }
})

export default mongoose.model('Content', contentSchema)