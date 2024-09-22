import express from 'express';
import { renderIndex } from './render';

export function index(req: express.Request, res: express.Response) {
  // NOTE: Just an example.
  console.log(req.ip);
  renderIndex(res, {
    title: "Gabe's Square!",

    header: {
      homeLink: '#',
      headerText: 'Use Linux!',

      tags: [
        {
          link: '#',
          text: 'First Post!',
        },

        {
          link: '#',
          text: 'C++',
        },

        {
          link: '#',
          text: 'Rust',
        },
      ],

      years: [
        {
          link: '#',
          text: '2024',
        },

        {
          link: '#',
          text: '2025',
        },

        {
          link: '#',
          text: '2026',
        },
      ],
    },

    footer: {
      homeLink: '#',
    },

    articlesByDate: [
      {
        date: {
          link: '#',
          text: '2024',
        },

        articles: [
          {
            articleLink: '#',
            articleTitle: 'Hey there!',
            articleViews: '10',
            articleBrief: 'This is one of the first articles. Enjoy!',
            articleDate: '22 de setembro de 2024, 17:17h',
            tags: [
              {
                link: '#',
                text: 'First Post',
              },
              {
                link: '#',
                text: 'Blog',
              },
            ],
          },
        ],
      },
    ],
  });
}
