import http from "http"
import express from 'express';
import dotenv from 'dotenv'
import dbConfig from "./config/dbConfig.js";

dotenv.config()
const app = express();