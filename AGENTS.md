# 巨匠咖啡網站維護規格

## 1. 文件目的

本文件提供「巨匠咖啡」形象網站的開發、交接與後續維護依據。

目前網站為單頁式靜態網站，以 Bootstrap 5 為版型框架，主要程式由 HTML、CSS 與少量原生 JavaScript 組成，不需要建置工具或後端環境。

## 2. 專案技術

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- 原生 JavaScript
- RWD 響應式設計
- 網站語系：繁體中文（`zh-Hant`）

## 3. 專案目錄

```text
website/
├─ index.html                 首頁與主要內容
├─ AGENTS.md                  專案維護規格與 Codex 專案指引
├─ css/
│  ├─ bootstrap.min.css       Bootstrap 本地壓縮版 CSS
│  ├─ style.css               網站自訂樣式
│  └─ ...                     其他 Bootstrap 原始與 map 檔案
├─ js/
│  ├─ bootstrap.bundle.min.js Bootstrap 本地 JS，包含 Popper
│  └─ ...                     其他 Bootstrap 原始與 map 檔案
└─ images/
   ├─ logo.png                導覽列與頁尾 Logo
   ├─ img-1.jpeg              咖啡豆圖片
   ├─ img-2.jpeg              咖啡聚會圖片
   ├─ img-3.jpeg              咖啡果實採收圖片
   ├─ img-4.jpeg              拉花咖啡圖片
   └─ img-5.jpeg              咖啡杯與咖啡豆圖片
```

## 4. 頁面區塊

首頁 `index.html` 由上到下包含：

1. 導覽列
   - 品牌 Logo 與名稱
   - 首頁
   - 關於我們
   - 產品介紹
   - 聯絡我們
   - 登入按鈕
   - 小尺寸裝置使用 Bootstrap Collapse 選單

2. 首頁輪播圖
   - Bootstrap Carousel
   - 共 5 張輪播圖
   - 每張自動播放間隔為 5 秒
   - 支援左右切換按鈕與下方指示器

3. 關於我們
   - 桌機版採左圖右文排列
   - 平板與手機版自動改為上下排列

4. 產品介紹
   - 共 4 張 Bootstrap Card
   - 桌機版每列 4 張
   - 平板版每列 2 張
   - 手機版每列 1 張

5. 頁尾資訊
   - 品牌 Logo
   - Facebook、Instagram、YouTube 社群連結
   - 公司名稱
   - 電話
   - 營業時間
   - 電子郵件
   - 公司地址
   - 動態年份版權宣告

6. 回到頂端按鈕
   - 頁面向下捲動超過 420px 後顯示
   - 點擊後平滑回到頁面頂端

## 5. CSS 載入順序

CSS 必須維持以下順序：

```html
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<!-- Google Fonts -->
<link href="css/style.css" rel="stylesheet">
```

`style.css` 必須放在 Bootstrap 後面，才能正確覆寫 Bootstrap 預設樣式。

請勿直接修改 `bootstrap.min.css`。所有網站客製樣式均應寫在 `css/style.css`。

## 6. JavaScript 載入

頁面底部載入本地 Bootstrap Bundle：

```html
<script src="js/bootstrap.bundle.min.js"></script>
```

請使用 `bootstrap.bundle.min.js`，因為此檔案已包含 Bootstrap 元件需要的 Popper。

目前頁面內嵌 JavaScript 用途：

- 自動更新頁尾版權年份
- 控制回到頂端按鈕顯示狀態
- 點選手機版選單項目後自動收合導覽選單

若後續 JavaScript 程式增加，建議移至 `js/main.js`，並於 Bootstrap 後載入：

```html
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/main.js"></script>
```

## 7. 自訂樣式規範

### 7.1 品牌色彩

品牌色彩定義於 `css/style.css` 的 `:root`：

```css
:root {
  --coffee: #743c37;
  --coffee-dark: #3f2925;
  --coffee-light: #a9665f;
  --cream: #f8f3ed;
  --ink: #382f2c;
}
```

新增元件時應優先使用上述 CSS 變數，避免重複新增相近色碼。

### 7.2 主要自訂類別

| 類別 | 用途 |
| --- | --- |
| `.brand-logo` | 導覽列 Logo |
| `.brand-name` | 品牌名稱 |
| `.brand-subtitle` | 品牌英文副標 |
| `.hero-slide` | 輪播圖片容器 |
| `.hero-copy` | 輪播文字內容 |
| `.btn-coffee` | 品牌主要按鈕 |
| `.section-space` | 內容區塊上下間距 |
| `.section-title` | 區塊標題 |
| `.about-image` | 關於我們圖片 |
| `.product-card` | 產品卡片 |
| `.social-link` | 社群連結按鈕 |
| `.footer-info` | 頁尾公司資訊 |
| `#backToTop` | 回到頂端按鈕 |

### 7.3 響應式斷點

自訂 CSS 使用兩個主要斷點：

- `max-width: 991.98px`
  - 對應 Bootstrap `lg` 以下
  - 調整導覽列、區塊間距與關於我們圖片高度

- `max-width: 575.98px`
  - 對應 Bootstrap `sm` 以下
  - 調整 Logo、輪播高度、文字置中與手機版間距

如需新增斷點，應優先配合 Bootstrap 官方斷點：

| 名稱 | 起始寬度 |
| --- | ---: |
| `sm` | 576px |
| `md` | 768px |
| `lg` | 992px |
| `xl` | 1200px |
| `xxl` | 1400px |

## 8. 圖片維護規範

所有網站內容圖片應放在 `images/` 資料夾，HTML 使用相對路徑：

```html
<img src="images/檔名.jpg" alt="圖片內容說明">
```

背景圖片使用：

```html
<div style="background-image: url('images/檔名.jpg')"></div>
```

維護原則：

- Logo 建議使用 PNG、SVG 或透明背景 WebP。
- Banner 建議尺寸至少為 1920 × 800px。
- 一般內容圖片建議寬度至少為 1200px。
- 產品圖片建議使用相同長寬比例。
- 圖片檔名使用英文小寫、數字與連字號。
- 不使用空格、中文或特殊符號作為檔名。
- 上線前應壓縮圖片，避免單張圖片過大。
- 所有 `<img>` 必須提供符合內容的 `alt`。

## 9. 常見內容修改

### 9.1 更換 Logo

將新 Logo 放入 `images/`，再修改導覽列與頁尾的 `src`。目前兩處均使用：

```html
src="images/logo.png"
```

### 9.2 更換輪播圖片

搜尋 `.hero-slide`，修改行內 `background-image`：

```html
style="background-image:url('images/img-5.jpeg')"
```

新增或刪除輪播頁時，必須同步調整：

- `.carousel-item`
- `.carousel-indicators` 中的按鈕數量
- `data-bs-slide-to` 的索引，索引從 `0` 開始
- 第一張必須保留 `active`

### 9.3 修改產品卡

每項產品使用以下結構：

```html
<div class="col-sm-6 col-lg-3">
  <article class="card product-card">
    <img src="images/產品圖片.jpeg" class="card-img-top" alt="產品圖片說明">
    <div class="card-body d-flex flex-column text-center p-4">
      <h3 class="card-title h5">產品名稱</h3>
      <p class="card-text">產品介紹文字</p>
      <a href="#contact" class="btn btn-coffee btn-sm mt-auto align-self-center">瞭解更多</a>
    </div>
  </article>
</div>
```

若產品數量超過 4 項，Bootstrap Grid 會自動換行。

### 9.4 修改公司資訊

公司資訊集中於 `<footer id="contact">` 中。

修改電話或電子郵件時，必須同時更新顯示文字與連結：

```html
<a href="tel:電話號碼">顯示電話</a>
<a href="mailto:電子郵件">顯示電子郵件</a>
```

### 9.5 修改導覽項目

導覽項目的 `href` 必須對應頁面區塊的 `id`：

```html
<a href="#about">關於我們</a>
<section id="about">...</section>
```

新增區塊時，避免重複使用相同 `id`。

## 10. 外部資源與離線需求

目前 Bootstrap CSS、Bootstrap JavaScript 與網站圖片皆使用本地檔案。

以下資源仍使用外部 CDN：

- Bootstrap Icons
- Google Fonts

若網站必須完全離線運作，需將圖示字型與 Google Fonts 下載到本地端，並同步更新 `index.html` 與 `style.css` 的引用路徑。

外部字型無法載入時，瀏覽器會退回系統 sans-serif 或 serif 字型，不影響主要內容閱讀。

## 11. 瀏覽器與無障礙要求

建議支援目前主流最新版瀏覽器：

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Apple Safari

維護時應注意：

- 圖片必須有 `alt`。
- 純圖示按鈕必須有 `aria-label`。
- 導覽與輪播按鈕需能使用鍵盤操作。
- 文字與背景需維持足夠對比。
- 不應只用顏色表示重要狀態。
- 標題階層應依序使用 `h1`、`h2`、`h3`。

## 12. 上線前檢查清單

- [ ] 導覽列所有連結可正確移動至目標區塊
- [ ] 手機版導覽選單可正常開啟與收合
- [ ] 5 張輪播圖片均可正常顯示
- [ ] 輪播上一張、下一張與指示器可操作
- [ ] 關於我們圖片與文字在手機版沒有溢出
- [ ] 產品卡在桌機、平板與手機版排列正常
- [ ] 社群連結已換成正式網址
- [ ] 電話、Email、地址與營業時間正確
- [ ] 回到頂端按鈕可正常顯示與使用
- [ ] 所有圖片路徑與檔名大小寫一致
- [ ] 瀏覽器開發者工具沒有 404 或 JavaScript 錯誤
- [ ] 已於 Chrome、Edge 與手機尺寸測試

## 13. 維護注意事項

- 不要直接修改 Bootstrap 原始檔案。
- HTML 結構修改後，應同步檢查 `css/style.css` 與 JavaScript 選取器。
- 刪除元素前，先搜尋其 `class` 或 `id` 是否被 CSS、JavaScript 或錨點連結使用。
- 新增自訂樣式時，使用語意清楚的類別名稱。
- 避免大量使用行內 CSS；輪播背景圖路徑是目前保留的例外。
- 正式社群網址尚未設定，目前社群按鈕的 `href="#"` 為預留值。
- 「登入」目前連到聯絡我們區塊，尚未串接會員或登入系統。
- 本專案為純前端展示頁，表單、會員、商品資料與後台功能需另行開發。

## 14. 版本紀錄

| 日期 | 版本 | 說明 |
| --- | --- | --- |
| 2026-06-22 | 1.0.0 | 建立 Bootstrap 5 單頁網站與維護規格 |


## github
### HTTPS
https://github.com/breathtiger/gjuncoffee-202606.git

### SSH
git@github.com:breathtiger/gjuncoffee-202606.git


## 對外發布網址

https://breathtiger.github.io/gjuncoffee-202606/