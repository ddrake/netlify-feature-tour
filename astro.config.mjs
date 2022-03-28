import preact from '@astrojs/preact';
export default {
  buildOptions: {
    sitemap: true,
  },
  integrations: [
    preact(),
  ],
};
