import express from 'express'
import auth from '../middleware/auth.js'
import Content from '../models/Content.js'

const router = express.Router()

// Get all content (preview for non-subscribers)
router.get('/', async (req, res) => {
  try {
    const content = await Content.find().limit(5)
    res.json(content)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content' })
  }
})

// Get all content (full access for subscribers)
router.get('/full', auth, async (req, res) => {
  try {
    const content = await Content.find()
    res.json(content)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content' })
  }
})

export default router