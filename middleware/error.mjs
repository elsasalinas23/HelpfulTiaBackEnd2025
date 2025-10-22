export default function error(err, req, res, next) {
  console.error('🔥 API Error:', err.stack || err);
  res.status(500).json({ error: "server error" });
}