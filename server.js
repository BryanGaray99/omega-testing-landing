const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static("."));

// Serve Angular src files
app.use("/src", express.static("src"));

// Serve node_modules for any dependencies
app.use("/node_modules", express.static("node_modules"));

// Handle Angular routing - serve index.html for any route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `🚀 Omega Testing development server running at http://localhost:${PORT}/`,
  );
  console.log(
    "📝 Note: This is a development server. For full Angular features, install Angular CLI:",
  );
  console.log("   npm install -g @angular/cli");
  console.log("   ng serve");
  console.log("");
  console.log("📁 Available files:");
  console.log("   - Landing page components in /src/app/components/");
  console.log("   - Angular configuration files");
  console.log("   - Deployment scripts for GitHub Pages");
});
