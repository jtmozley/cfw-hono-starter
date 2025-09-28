import { Hono } from "hono";
import world from "./world";

const hello = new Hono();

hello.route("/world", world);

export default hello;
