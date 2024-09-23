import express from 'express';
import type { IndexData, PostData } from './render.types';


export function renderIndex(res: express.Response, data: IndexData) {
  res.render('index', { data });
}

export function renderArticle(res: express.Response, data: PostData) {
  res.render('article', { data });
}
