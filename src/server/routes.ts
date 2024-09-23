import express from 'express';
import { renderArticle, renderIndex } from './render';

export function index(req: express.Request, res: express.Response) {
  // NOTE: Just an example.
  console.log('Request to', req.originalUrl);
  console.log(req.ip);
  console.log();
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

const content = `
        <p>Some lorem ipsum here</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
          laoreet nisl nec feugiat. <a href="#">Ut finibus ligula turpis</a>, vel auctor nunc
          varius et. Fusce ut tellus tristique, scelerisque magna in, sagittis
          velit. Sed id condimentum odio. Donec ultrices libero mi, non aliquet
          mi rhoncus non. Proin et diam nec odio accumsan suscipit. Cras
          vulputate faucibus ultricies. Vestibulum consequat blandit
          condimentum. Praesent lorem ex, porttitor tempus dictum in,
          ullamcorper et diam. In hac habitasse platea dictumst. Vivamus vitae
          neque interdum, luctus arcu quis, porttitor orci. Aenean molestie
          tellus lectus, et commodo nisl finibus nec. Quisque id nunc pharetra
          ipsum posuere tempus. Mauris eu libero fringilla, eleifend tortor ut,
          scelerisque elit. Suspendisse porta lorem sapien, at finibus tortor
          malesuada tristique. Aliquam in justo augue.
        </p>

        <h2>Sub title here brow</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
          laoreet nisl nec feugiat. Ut finibus ligula turpis, vel auctor nunc
          varius et. Fusce ut tellus tristique, scelerisque magna in, sagittis
          velit. Sed id condimentum odio. Donec ultrices libero mi, non aliquet
          mi rhoncus non. Proin et diam nec odio accumsan suscipit. Cras
          vulputate faucibus ultricies. Vestibulum consequat blandit
          condimentum. Praesent lorem ex, porttitor tempus dictum in,
          ullamcorper et diam. In hac habitasse platea dictumst. Vivamus vitae
          neque interdum, luctus arcu quis, porttitor orci. Aenean molestie
          tellus lectus, et commodo nisl finibus nec. Quisque id nunc pharetra
          ipsum posuere tempus. Mauris eu libero fringilla, eleifend tortor ut,
          scelerisque elit. Suspendisse porta lorem sapien, at finibus tortor
          malesuada tristique. Aliquam in justo augue.
        </p>

        <img src="https://picsum.photos/id/10/2500/1667" alt="My nice image" />

        <h2>Third paragraph</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
          laoreet nisl nec feugiat. Ut finibus ligula turpis, vel auctor nunc
          varius et. Fusce ut tellus tristique, scelerisque magna in, sagittis
          velit. Sed id condimentum odio. Donec ultrices libero mi, non aliquet
          mi rhoncus non. Proin et diam nec odio accumsan suscipit. Cras
          vulputate faucibus ultricies. Vestibulum consequat blandit
          condimentum. Praesent lorem ex, porttitor tempus dictum in,
          ullamcorper et diam. In hac habitasse platea dictumst. Vivamus vitae
          neque interdum, luctus arcu quis, porttitor orci. Aenean molestie
          tellus lectus, et commodo nisl finibus nec. Quisque id nunc pharetra
          ipsum posuere tempus. Mauris eu libero fringilla, eleifend tortor ut,
          scelerisque elit. Suspendisse porta lorem sapien, at finibus tortor
          malesuada tristique. Aliquam in justo augue.
        </p>

        <pre>
          <code class="language-c">#include &lt;stdio.h&gt;

int main(int argc, char* argv[]){
  printf("Hello World!!!");

  return 0;
}</code>
        </pre>

        <h3>Sub Sub here</h3>
        <h4>Sub Sub here</h4>
        <h5>Sub Sub here</h5>
        <h6>Sub Sub here</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
          laoreet nisl nec feugiat. Ut finibus ligula turpis, vel auctor nunc
          varius et. Fusce ut tellus tristique, scelerisque magna in, sagittis
          velit. Sed id condimentum odio. Donec ultrices libero mi, non aliquet
          mi rhoncus non. Proin et diam nec odio accumsan suscipit. Cras
          vulputate faucibus ultricies. Vestibulum consequat blandit
          condimentum. Praesent lorem ex, porttitor tempus dictum in
        </p>

`;

export function post(req: express.Request, res: express.Response) {
  console.log('Request to', req.originalUrl);
  console.log('Arg', req.params.id);
  console.log(req.ip);
  console.log();
  renderArticle(res, {
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

    article: {
      date: '15 de fevereiro de 2024, 15:40h',
      title: 'A nice hello world!',
      content: content,
    },
  });
}
