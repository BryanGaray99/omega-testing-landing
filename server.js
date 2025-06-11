const { spawn } = require("child_process");
const path = require("path");

console.log("🚀 Starting Angular development server...");
console.log("📦 Building and serving Omega Testing Angular app");

const ngServe = spawn("npm", ["run", "start"], {
  stdio: "inherit",
  shell: true,
  cwd: __dirname,
});

ngServe.on("error", (error) => {
  console.error("❌ Error starting Angular server:", error);
  process.exit(1);
});

ngServe.on("close", (code) => {
  console.log(`Angular server process exited with code ${code}`);
  process.exit(code);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Shutting down Angular development server...");
  ngServe.kill("SIGINT");
});

process.on("SIGTERM", () => {
  console.log("\n👋 Shutting down Angular development server...");
  ngServe.kill("SIGTERM");
});
