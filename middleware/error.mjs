// middleware/error.mjs
export default function error(err, req, res, _next) {
  console.error("ERROR:", err); // full stack in server console

  // turn Mongoose validation errors into 400 instead of 500
  const status = err.status || err.statusCode || (err.name === "ValidationError" ? 400 : 500);

  const payload = {
    error: err.name || "ServerError",
    message: err.message || "Server error",
  };

  // include field-level messages from Mongoose while in dev
  if (process.env.NODE_ENV !== "production" && err.errors) {
    payload.details = Object.fromEntries(
      Object.entries(err.errors).map(([k, v]) => [k, v.message])
    );
  }

  res.status(status).json(payload);
}
