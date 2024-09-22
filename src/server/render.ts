import express from 'express';
import type { indexData } from './render.types';


export function renderIndex(res: express.Response, data: indexData) {
  res.render('index', { data });
}
