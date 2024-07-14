import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.json({
    limit: "16kb",
  })
);

// express config
app.use(express.static("public"))
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser())

export { app };
