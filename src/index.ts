import { Hono } from "hono";
import test from "./hello";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => c.text("Hello Hono!"));

app.route("/hello", test);

export default app;
