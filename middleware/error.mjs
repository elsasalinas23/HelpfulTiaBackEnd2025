export default function error(err, req, res, next) {
  console.error("ERROR:", err);
  res.status(500).json({ error: "server error" });
}