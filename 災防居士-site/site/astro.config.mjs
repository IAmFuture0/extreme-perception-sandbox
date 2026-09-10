import { defineConfig } from 'astro/config';

export default defineConfig({
  // 部署到自訂網域時改成該網域；用 GitHub Pages 子路徑時另設 base
  site: 'https://example.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
