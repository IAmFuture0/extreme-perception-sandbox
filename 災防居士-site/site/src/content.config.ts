import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    // 最後查證日期。法規異動時更新此欄，不另發新文。
    checked: z.string(),
    // checked = 內容已逐項查證來源；draft = 部分為推論或待核對
    state: z.enum(['checked', 'draft']).default('draft'),
    // 本頁涉及的法規或標準，供交叉參照
    refs: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { notes };
