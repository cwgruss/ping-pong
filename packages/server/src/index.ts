import {  PingPong } from "./server";
import express = require("express");
import { join } from "path";

const app = new PingPong().getApplication();

app.use('/', express.static(join(__dirname , 'public')));

export { app };