import { Hono } from "hono";

const world = new Hono();

world.get("", (c) => c.json("hello/world"));

export default world;
