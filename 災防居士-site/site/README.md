# 災防居士

台灣災防技術的法規與認證筆記。

## 本機開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 產出到 dist/
```

## 新增一則筆記

在 `src/content/notes/` 放一個 `.md` 檔：

```markdown
---
title: 標題
subtitle: 副標，一句話說明這頁在處理什麼問題
checked: '2026-09-09'    # 最後查證日期，法規異動時更新
state: draft             # checked = 逐項對照過原始來源；draft = 含推論或待核對正本
order: 2                 # 首頁排序，數字小的在前
refs:                    # 本頁涉及的法規與標準
  - 消防法
---

內文（Markdown）
```

**體例**：法規變動時修訂原頁並更新 `checked`，不另發新文。這些是參考資料，不是時事。

`state` 是本站唯一使用訊號色的地方，別拿來當裝飾——標 `checked` 就代表你真的逐項核對過。

## 部署到 GitHub Pages

1. 建 repo，推到 `main`
2. repo → Settings → Pages → Source 選 **GitHub Actions**
3. 改 `astro.config.mjs` 的 `site`：
   - 自訂網域：`https://your-domain.tw`
   - GitHub 子路徑：`site: 'https://<帳號>.github.io'` 並加 `base: '/<repo 名>'`
4. push 之後 workflow 會自動建置並發布

## 其他選項

Cloudflare Pages 或 Netlify 都可以直接接這個 repo，build command `npm run build`、output directory `dist`。用自訂網域的話 Cloudflare 較省事。
