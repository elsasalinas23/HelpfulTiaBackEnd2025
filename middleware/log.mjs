export default function log(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`, req.body || {});
  next();
}
