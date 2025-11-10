import express from 'express';
import { getDevelopers, createDeveloper } from '../controllers/developer.js';

const router = express.Router();

router.get("/", getDevelopers);

router.post("/", createDeveloper);

export default router;
