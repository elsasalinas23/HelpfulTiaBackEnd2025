export default function error(err, req, res, next) {
  console.error("ERROR:", err?.message, "\nSTACK:", err?.stack);
  res.status(500).json({
    error: "server error",
    message: err?.message,      // <-- see actual reason
  });
}
