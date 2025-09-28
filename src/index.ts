import { Hono } from "hono";
import test from "./hello";

export type Bindings = {
  HELLO: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.text("Hello Hono!"));

app.route("/hello", test);

export default app;
