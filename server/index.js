const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '.../client.build')));

// Generic 
app.get("/api", (_req, res) => {
  res.json({message: "Hello world!"});
});

app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, '.../client/build', index.html));
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
