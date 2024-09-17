// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Read the comments from comments.json file
// 4. Send the comments as response
// 5. Listen on port 4000

// 1. Create a web server
const express = require('express')
const app = express()

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  // 3. Read the comments from comments.json file
  const comments = require('./comments.json')
  // 4. Send the comments as response
  res.json(comments)
})

// 5. Listen on port 4000
app.listen(4000, () => {
  console.log('Server started on http://localhost:4000')
})