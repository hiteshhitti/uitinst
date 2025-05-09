const express = require('express');
const path = require('path');

const app = express();

// Serve Angular dist folder
app.use(express.static(path.join(__dirname, 'dist/uitinst/browser')));

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/uitinst/browser/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
