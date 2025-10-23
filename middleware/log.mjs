export default function log(req, _res, next) {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`, req.body);
  next();
}
