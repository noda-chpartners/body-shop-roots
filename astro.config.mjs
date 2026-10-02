export default {
  site: 'https://body-shop-roots.pages.dev',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
};
