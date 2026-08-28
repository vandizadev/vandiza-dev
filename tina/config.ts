import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID || 'dummy',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: { publicFolder: 'public', mediaRoot: 'images/uploads' },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog & Artikel',
        path: 'src/content/blog',
        format: 'md',
        fields: [
          { name: 'title', label: 'Judul', type: 'string' },
          { name: 'description', label: 'Ringkasan', type: 'string' },
          { name: 'cover', label: 'Cover', type: 'image' },
          { name: 'tags', label: 'Tag', type: 'string' },
          { name: 'body', label: 'Isi', type: 'rich-text' },
        ],
      },
      {
        name: 'cases',
        label: 'Case Study',
        path: 'src/content/cases',
        format: 'md',
        fields: [
          { name: 'title', label: 'Judul', type: 'string' },
          { name: 'client', label: 'Nama Klien', type: 'string' },
          { name: 'result', label: 'Hasil', type: 'string' },
          { name: 'quote', label: 'Testimoni', type: 'string' },
          { name: 'body', label: 'Isi', type: 'rich-text' },
        ],
      },
    ],
  },
});
