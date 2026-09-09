# HANDOFF — DỰNG HOMEPAGE PIXEL-PERFECT TỪ FIGMA (cho Codex làm tiếp)

*Tài liệu tự chứa. Đọc hết file này trước khi code — mọi cạm bẫy dưới đây đều đã trả giá bằng nhiều vòng sửa sai.*

---

## 1 · QUY TRÌNH ĐANG CHẠY

Khách **tự sửa tay trên Figma** theo từng section, kèm mô tả bằng lời về hiệu ứng mong muốn (Figma không thể hiện được animation). Việc của AI: **đọc đúng số đo thật từ Figma → code pixel-perfect** vào file thật, hiện thực hoá phần hiệu ứng bằng vốn motion đã chốt.

- **File Figma:** `R5iVFrI46A8yWlVmIiAtCx` — "WIS Homepage — Codex Alt (Pixel Perfect)"
- **File code đích:** `Demo_TrangChu/v2/Homepage_codex_alt.html` (bản deploy thật, HTML/CSS/JS thuần, **không build step**)
- **Token:** `Demo_TrangChu/assets/tokens.css` · **Font:** `Demo_TrangChu/assets/fonts/fonts.css`

### Node ID các section (canvas Page 1 = `0:1`, artboard `1:18`)
*Cập nhật 2026-09-09.*

| Section | Node | Trạng thái |
|---|---|---|
| Header (component toàn trang) | `180:17` | ✅ XONG — 1 component duy nhất, magnet ghim mép trên khi cuộn |
| Preload (intro overlay) | `153:52` | ✅ XONG |
| 01 — Hero | `2:2` | ✅ XONG — có layer Fade nối xuống Approach |
| 02 — Approach | `3:2` | ✅ XONG — backdrop ghim + 3 mục cuộn, hút về center |
| 03 — Services | `6:5` | ✅ XONG — copy riêng từng dịch vụ (chữ tay), ảnh đổi theo hover |
| 04 — Featured Works | `6:20` | ✅ XONG — huy hiệu "view this story" bám chuột, nút "view all stories" |
| 05 — Cultural Perspective | `6:29` | ✅ XONG (code) — **đã chuyển sang phương án Option 2**; Figma cũng đã dựng lại theo hướng này, khách sẽ chỉnh tay |
| Button (component dùng chung) | `211:106` | ✅ XONG — class `.btn`, hover có nền + chất liệu phim |
| 06 — Testimonial | `5:2` | ⬜ chưa làm |
| 07 — Contact + Footer | `6:36` | ⬜ chưa làm |
| 00 — Menu Overlay | `131:2` | ⬜ chưa làm |

**Toàn trang đã có:** smooth-scroll lerp (`EASE .12`) + lực hút về center của Approach nằm trong cùng vòng lerp; token `.boil` cho chữ viết tay; bộ filter `#ilb1/2/3` cho line boil của hình vẽ.

**Ba câu đang chờ khách chốt:** (1) hậu tố dài ("restraint."/"attention.") ở cỡ 128px rộng gần gấp đôi "care." — giữ cỡ cố định hay co theo độ dài; (2) node `2:6` ở Hero (chữ Inter màu đen) trông như node cũ sót lại, đang bỏ qua; (3) ba mẩu nội dung văn hoá cũ của section 05 (Mai Trung Thu · 1.600m Sapa · ô mai/chè lam) — đưa về Case Detail, chèn thành lớp phụ trong panel, hay bỏ hẳn.

---

## 2 · CÁCH ĐỌC SỐ ĐO (bắt buộc)

**KHÔNG đoán từ ảnh chụp.** Dùng `use_figma` chạy script đọc thẳng property của node:

```js
const n = await figma.getNodeByIdAsync("2:2");
// x, y, width, height, rotation, opacity, fills, effects
// TEXT: characters, fontName, fontSize, letterSpacing, lineHeight,
//       textCase, textAlignHorizontal, textAutoResize
// getStyledTextSegments(['fontName','fontSize','letterSpacing','fills'])
```

**Đọc lại Figma ngay trước mỗi lần code.** Khách sửa file liên tục — đã có lần dùng số đo đọc từ lượt trước và code sai font (Bricolage thay vì Fahkwang), bị chê thẳng.

---

## 3 · CÔNG THỨC QUY ĐỔI ĐÃ DÙNG (giữ nhất quán cho các section sau)

Canvas Figma = **1920×1080**. Quy đổi:

| Loại | Công thức | Ví dụ thật |
|---|---|---|
| Bề rộng/vị trí ngang | `px / 1920 * 100` → vw | 558px → `29.06vw` |
| Cỡ chữ tỉ lệ theo màn | `clamp(min, Xvw, px)` | 128px → `clamp(3.4rem,6.67vw,128px)` |
| Cỡ chữ UI nhỏ (nav, caption, index) | **px/rem cố định**, KHÔNG scale | 14px → `.875rem` |
| letter-spacing % của Figma | chia 100 → `em` | 60% → `.6em` |
| line-height px của Figma | `px / fontSize` | 24/14 → `1.714` |
| Lề trang | `--page-margin` (=92px tại 1920) | x=92 → `var(--page-margin)` |
| Khối cần vừa cả màn thấp | chốt theo CẢ vw và vh | `width:min(29.06vw,55.9vh)` |

**Font mapping Figma → CSS:**
| Figma | CSS |
|---|---|
| Fahkwang | `'Fahkwang'` — đã thêm vào link Google Fonts ở `<head>` |
| Imperfetto Three | `var(--hand)` |
| Imperfetto One | `'Imperfetto One'` (chỉ dùng cho counter preload) |
| Beau Sweet Sans / Light | `var(--body)` + `font-weight:300` |
| Bricolage Grotesque | `var(--title)` |
| **Inter** | ⚠️ font mặc định Figma = **node rác chưa xoá**, không code (vd node `2:6` ở Hero) |

**Màu:** `rgb(238,230,212)` = `var(--bone)` · `rgb(22,15,8)` = `var(--ink)` · `rgb(198,161,91)` = `var(--accent)`.

### TOKEN `.boil` — LINE BOIL (khách đã duyệt 2026-09-08, BẮT BUỘC dùng lại)

Hiệu ứng "chữ được vẽ lại mỗi frame" như hoạt hình vẽ tay. **Áp cho TẤT CẢ chữ viết tay và hình vẽ minh hoạ trên site** — đây là quyết định của khách, không phải tuỳ chọn.

```html
<span class="boil b2" style="--boil-delay:-380ms; --boil-amp:3">…</span>
```
hoặc gọi JS helper có sẵn: `armBoil(el, amp)` (tự bốc keyframes + delay, tự bỏ qua khi reduced-motion).
Bật/tắt: class `.boil-on` trên tổ tiên (đang gắn với `IntersectionObserver` của Hero) hoặc `.is-on` trên chính nó.

**Bốn nguyên tắc — sai một cái là hỏng, đã trả giá 2 vòng sửa:**
1. **HOLD rồi NHẢY** (`step-end`). Interpolate mượt → mắt đọc ra "chữ đang trôi", rẻ tiền.
2. **Có FRAME NGHỈ** — vòng 800ms/8 nhịp nhưng **chỉ đổi 2–3 lần**. Đổi ở mọi nhịp → ngọ nguậy "cute", khách đã chê và bắt sửa.
3. **KHÔNG scale** (chữ phình/co lộ ngay là cute) và **xoay ≤0.12°** (lắc lư gây cảm giác cute mạnh hơn xê dịch nhiều).
4. **Mỗi phần tử lệch pha + bộ keyframes riêng** (3 bộ, delay âm ngẫu nhiên). Nhảy đồng loạt = "khối chữ bị giật" = lỗi.

**`--boil-amp` là HỆ SỐ, không phải pixel.** Biên độ đúng ≈ **0.3% kích thước phần tử**: chữ 78px → amp 1 (≈.24px); minh hoạ ~300px → **amp 3–4**. Bê nguyên số pixel của chữ sang hình lớn thì hiệu ứng biến mất. **Trần amp 4.**

⚠️ **`.boil` CHỈ dùng cho CHỮ đã tách từng ký tự — KHÔNG dùng cho hình vẽ liền khối.** Token dịch/xoay cả phần tử: với chữ, mỗi ký tự lệch pha riêng nên mắt đọc ra "nét được viết lại"; với một hình minh hoạ là một khối duy nhất thì chỉ ra **"hình lắc lư"** — khách đã chê đúng điểm này. Với hình vẽ phải làm méo **chính đường nét**: luân phiên vài bộ `feTurbulence` (tần số thấp 0.019–0.026 = sóng dài, giống tay run) + `feDisplacementMap` (scale 2–2.7) rồi đổi filter mỗi ~110ms. Xem `#ilb1/2/3` và `ilbTick()` trong section Approach.

⚠️ **KHÔNG áp `.boil` lên phần tử đang dùng `transform` để ĐỊNH VỊ.** Token animate chính `transform`, nên keyframes sẽ nuốt mất `translate(-50%,-50%)` và phần tử tụt đúng nửa kích thước. Đã dính ở minh hoạ Approach (lệch 131px = nửa của 262). Căn giữa bằng `position:absolute;inset:0;margin:auto` hoặc bọc thêm một lớp wrapper — tách **định vị** và **hiệu ứng** thành hai việc khác nhau.

⚠️ **Bẫy specificity:** nếu phần tử đích đã có rule dùng **shorthand `animation`** specificity cao hơn, shorthand reset cả duration/timing/iteration/play-state → boil chạy sai mà nhìn qua tưởng đúng. Kiểm bằng `getComputedStyle(el).animationDuration` phải ra `0.8s` và `animationTimingFunction` ra `steps(1)`.

**Motion đã chốt — không thêm easing mới:** `cubic-bezier(.16,1,.3,1)` (fade/translateY 14–30px) và `cubic-bezier(.76,0,.2,1)` (wipe clip-path). Mỗi section tối đa 1 kiểu hiệu ứng. `IntersectionObserver` bắn 1 lần rồi disconnect. Mọi hiệu ứng phải có nhánh `prefers-reduced-motion` **thay thế 1-1, không xoá sạch**.

---

## 4 · CẠM BẪY ĐÃ TRẢ GIÁ (đọc kỹ, đừng lặp lại)

1. **Rule `!important` từ lượt cũ ẩn cả section.** Preload từng bị `.pl{display:none!important}` + `body.locked{overflow:auto}` sót lại trong khối "HOMEPAGE REFRAME" → preload không bao giờ chạy. **Dấu hiệu nhận biết: đặt inline style mà `getComputedStyle` vẫn trả giá trị khác → grep ngay `!important`, đừng đổ lỗi cho môi trường/timing.** Đây là lỗi đã mất 2 vòng sửa sai vì bỏ qua bằng chứng này.
2. **`--page-margin` chỉ khai báo trong `@media(min-width:821px)`.** Dùng nó ngoài media query → `left:var(--page-margin)` thành invalid → dạt về 0. Đã đưa lên `:root`, nhưng cẩn thận với các biến khác nằm trong media.
3. **`<span>` inline + `writing-mode:vertical-*` → hộp 0×0.** Phải `display:block`.
4. **Đo khi animation reveal chưa chạy xong → lệch đồng loạt +14px.** Trước khi đo, ép xong trạng thái (`hero.classList.add('txt-in')` rồi đợi >1.2s) hoặc tắt transition.
5. **Figma báo kích thước TRƯỚC xoay; DOM báo bounding SAU xoay.** Node xoay 5° có `w=254,h=246` trong Figma nhưng `274×267` trong DOM — không phải sai. Kiểm bằng `h·cos θ + w·sin θ`.
6. **`letter-spacing` của CSS thêm khoảng trắng SAU ký tự cuối** → khối căn giữa bị lệch nửa tracking (với `.6em` là 4.2px, thấy rõ). Bù bằng `margin-right:-<tracking>em`.
7. **Text `textAutoResize: HUG` trong Figma quyết định bề rộng của khối cha.** Đừng hardcode bề rộng khối cha — dùng `width:max-content` (vd `.pl-foot` rộng 662px chính là bề rộng dòng caption).
8. **Trong Browser pane bị ẩn, `innerWidth` trả 0** và mọi `getBoundingClientRect` vô nghĩa. Phải mở tab foreground (`tabs_create foreground:true`) rồi `resize_window` **TRƯỚC** khi `navigate`.
9. **rAF bị dừng khi tab ở nền** → animation đứng im. Preload đã xử lý bằng cách chỉ bắt đầu đếm khi `document.hidden === false` (nghe `visibilitychange`), giữ failsafe 4.5s chống kẹt.
10. **`runPreload()` từng bị gọi 2 lần** (chạy ngay + `window.onload`) → dựng deck 2 lần, 2 vòng rAF đua nhau. Đã có cờ `preloadStarted`. Cẩn thận pattern này ở chỗ khác.

---

## 5 · CÁCH VERIFY (bắt buộc trước khi báo xong)

```js
// tab foreground, resize 1920×1080 TRƯỚC khi navigate
const r=el=>{const b=el.getBoundingClientRect();return[Math.round(b.x),Math.round(b.y),Math.round(b.width),Math.round(b.height)]};
// so từng số với số đo Figma; sai số chấp nhận ≤1px (làm tròn subpixel)
```
Đo trong **đúng trạng thái hiển thị thật** (vd preload phải có `body.locked` — không có scrollbar; nếu body scroll được thì scrollbar 10px làm lệch tâm 5px). Kiểm cả `document.fonts.check('14px Fahkwang')` và `console` không lỗi.

---

## 6 · ĐÃ LÀM GÌ Ở 2 SECTION XONG

### Preload (`153:52`)
Logo nền `clamp(294px,34.69vw,666px)` opacity .16 · thẻ ảnh `clamp(94px,8.23vw,158px)` tỉ lệ `158/210`, shadow `0 40px 90px rgba(0,0,0,.6)` · foot `width:max-content` (=662px) cách đáy `6.48vh` · counter Imperfetto One 24px `.28em` màu bone · bar track **trắng thuần** + phần đã chạy màu bone, cao 2px · caption Fahkwang 14px `.6em` UPPER **1 dòng** (`white-space:nowrap`, có media query <780px co chữ để vẫn 1 dòng). JS: dựng 10 thẻ ảnh, đếm 000→100 trong 2.2s bằng rAF, thẻ cuối phóng vào khung ảnh Hero.

### Hero (`2:2`)
Ảnh **không còn full-bleed** → khung dọc `min(29.06vw,55.9vh)` tỉ lệ 3:4 căn giữa (=558×744 tại 1920, **khớp 0px**), overlay đen 20%, 5 ảnh luân phiên fade 4.6s · nav 3 phần cùng y=161 · spine dọc `display:block` + `writing-mode:vertical-rl` + `rotate(180deg)` · chữ tay Imperfetto Three `clamp(2.4rem,4.06vw,78px)` xoay `-5deg` · hậu tố động Fahkwang `clamp(3.4rem,6.67vw,128px)` · cột phải `clamp(196px,13.65vw,262px)` Fahkwang 14/24px **justified**. `expand()` của preload đo `#heroFrame` trực tiếp.

**Hậu tố động đã chốt (thứ tự cố định, 2.6s/từ):** `care → intent → place → restraint → attention → memory`. Dự phòng: `patience, discipline, clarity, warmth, discretion, nerve`. Không kéo dài quá 6 từ.

---

## 7 · ĐANG CHỜ KHÁCH QUYẾT (đừng tự quyết)

1. Hậu tố dài ("restraint." / "attention.") ở 128px rộng gần gấp đôi "care." và tràn qua ảnh nhiều hơn — giữ cỡ cố định hay co theo độ dài từ?
2. Đoạn văn cột phải hiện cao 408px, khung Lorem trong Figma cao 576px — giữ ngắn (đúng nguyên tắc không viết dài để lấp chỗ) hay viết thêm ~45 từ?
3. Node `2:6` ở Hero (chữ Inter màu đen nằm dưới spine thật) trông như node cũ sót lại — đã bỏ qua khi code, chờ xác nhận.

---

## 8 · NGUYÊN TẮC NỘI DUNG (nếu phải viết copy)

Giọng WIS: câu ngắn xen câu dài, trầm, tiết chế, **chi tiết cụ thể thay cho tính từ rỗng** ("moving a single chair three times", không phải "meticulous attention to detail"). Cấm: *bespoke, timeless, elegance, passion, perfection, magic, dream, luxury, we believe, unforgettable, attention to detail*. Chuẩn giọng: `20_Brand_Foundation_v3_ChatGPT_Reviewed.md` (bản chuẩn) + copy đang chạy trong `Homepage_codex_alt.html`.
**Không bịa dữ kiện thật** (địa danh, con số, chi tiết dự án) khi WIS chưa xác nhận. **Kiểm tra không trùng ý với section liền kề** — hero từng suýt lặp gần nguyên văn ý "what keeps returning" của Approach.
