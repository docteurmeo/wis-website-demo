# WIS · BRIEF ĐẶT RENDER ILLUSTRATION (order cho pipeline ảnh / codex)

> **⚠️ ART DIRECTION OVERRIDE — 2026-09-07:** Mọi render mới bắt buộc đọc [`ILLUSTRATION_DNA.md`](ILLUSTRATION_DNA.md) trước. Mục 1, các prompt Mục 4–6 bên dưới là lịch sử brief cũ; nếu có mâu thuẫn, `ILLUSTRATION_DNA.md` được ưu tiên. Đặc biệt, không dùng lại công thức “Matisse continuous one-line / fineliner đều nét / outline để hở” làm mặc định.

*Tài liệu chuyên để viết prompt + đặt render các nét vẽ trang trí cho website WIS.
Claude KHÔNG tự vẽ SVG nữa (cứng, giả). Mọi nét vẽ order qua đây để có **bút pháp phóng khoáng, dứt khoát, kiểu ký họa (croquis)** — xem Mục 1, đã hiệu chỉnh sau vòng render đầu của batch Approach.*

Output đặt vào: `Demo_TrangChu/assets/illustrations/`
Cập nhật lần cuối: 2026-09-04

> **⚠️ HIỆU CHỈNH LẦN 1 (2026-09-04):** batch Approach render lần 1 bị chê **"nét quá nhòe và tham chi tiết, không đủ phóng khoáng, giống tả thật"** (brief cũ nhấn quá nhiều "grunge/paper tooth/uneven pressure" → ra phác thảo bút chì CÓ SHADING). Đã soi bộ ký tự hình minh hoạ trong font khách cấp **Imperfetto Seven** để lấy DNA nét bút đúng, viết lại Mục 1 + order.
>
> **⚠️ HIỆU CHỈNH LẦN 2 (2026-09-04):** render lần 2 (theo hiệu chỉnh lần 1) bị chê tiếp **"như cứt, vẽ như trẻ con vẽ, không có cảm giác phóng khoáng/ký họa tốc độ cao"**. Xem trực tiếp cả 3 file: đều là **outline khép kín mượt như vector** (viền đôi bám sát toàn bộ contour ống nghe điện thoại, elip hoàn hảo, xoắn ốc đều tăm tắp, compa vẽ khép kín 2 cạnh) — đúng dạng "icon/coloring-book outline", KHÔNG phải gesture sketch. Nguyên nhân: chữ "even line weight / crisp and clean / reduced to essential silhouette" trong prompt lần 2 vô tình đẩy model vẽ đường Bezier mượt khép kín quanh TOÀN BỘ rìa vật thể, thay vì vài nét chọn lọc bỏ dở. Đã sửa lại Mục 1 + order (4.4–4.6) lần 3: cấm rõ "outline khép kín/vector mượt", yêu cầu **continuous line drawing kiểu Matisse** (1 nét liền mạch, kinh tế, để hở, KHÔNG khép kín toàn bộ silhouette, có run tay thật ở đầu/cuối nét).
>
> **✅ LẦN 3 (bút pháp) — ĐÃ ĐƯỢC DUYỆT:** khách xác nhận bút pháp continuous-line Matisse đúng hướng ("bút pháp tốt hơn rồi đấy"). **Công thức prompt ở Mục 1 + template Mục 5 giữ nguyên, không sửa nữa.**
>
> **⚠️ HIỆU CHỈNH LẦN 4 (2026-09-04, NỘI DUNG không phải bút pháp):** khách chê tiếp **"chủ đề hình vẽ nhàm chán và thiếu cảm hứng"** — ống nghe điện thoại/vỏ ốc/compa là "universal vintage clip-art", không neo vào bất kỳ chi tiết cụ thể nào của WIS/Việt Nam (đổi logo sang brand khác vẫn dùng được y nguyên). Hội đồng (Kai + Thu Vy) rà lại: đồ vật phải qua **"specificity test"** — gắn với chi tiết thật trong nghi thức cưới Việt hoặc quy trình WIS, không phải biểu tượng nghề chung chung. Đã đổi 3 chủ thể Approach + thêm 2 vị trí mới (4.4–4.8 bên dưới) — **giữ NGUYÊN công thức bút pháp đã duyệt ở lần 3, chỉ đổi chủ thể**.

---

## 0 · CÁCH DÙNG TÀI LIỆU NÀY
1. Mỗi asset = 1 khối "ORDER" ở Mục 4: có `id`, mô tả, **prompt EN** (dán thẳng vào model), negative prompt, kích thước, format.
2. Render xong → lưu đúng `filename` vào `assets/illustrations/` → đổi cột **Status** ở Mục 3 thành ✅.
3. Gắn vào web: xem Mục 2 (kỹ thuật). Slot đã chờ sẵn trong code (vd `.ill-stitch` ở Homepage).
4. Thêm asset mới: copy "TEMPLATE ORDER" ở cuối, điền vào.

---

## 1 · ĐỊNH HƯỚNG MỸ THUẬT (bắt buộc cho MỌI nét vẽ)

**DNA bút pháp — tham chiếu trực tiếp font "Imperfetto Seven" khách cấp** (bộ ký tự hình minh hoạ, không phải chữ — đã soi trực tiếp từng glyph): quan sát được — nét **mảnh, ĐỀU độ dày** (không phải chì có đậm-nhạt theo lực tay), mỗi hình chỉ **1–2 nét bút duy nhất** (single/double stroke), **KHÔNG shading, KHÔNG cross-hatch, KHÔNG tô khối** — hình được rút gọn tới mức tối thiểu vẫn nhận ra được (quả táo chỉ là 1 khoanh + cuống, ngôi sao chỉ vài vạch chéo, vỏ ốc chỉ 1 đường xoắn). Nhiều khoảng trắng, cảm giác **ký họa nhanh (croquis) / doodle bên lề sổ tay** — như vẽ trong 3-5 giây, không phải "nghiên cứu" hình trong nhiều phút.

**Chất liệu & bút pháp (đã hiệu chỉnh LẦN 3):**
- Vẽ tay bằng **bút mực/bút dạ mảnh nét đều** (fine liner / fineliner pen) — KHÔNG phải bút chì than có đậm-nhạt theo lực tay, KHÔNG vector, KHÔNG mượt kỹ thuật số.
- **Kiểu "continuous line drawing" / "one-line drawing" (tham chiếu: các bức vẽ đường liền mạch của Matisse/Picasso, hoặc croquis thời trang)** — 1 nét bút gần như liền mạch, kinh tế, CHỌN LỌC vài đường định nghĩa chủ thể — **KHÔNG bám theo/khép kín TOÀN BỘ rìa silhouette của vật thể.** Để hở nhiều phần, để khoảng trắng "nói thay" — đây là khác biệt cốt lõi giữa ký họa và outline-icon.
- **CẤM RÕ:** đường viền khép kín chạy hết 1 vòng quanh vật thể (kiểu tô màu/coloring-book outline), 2 đường song song ôm sát nhau tạo độ dày giả (double-line contour), hình elip/hình khép kín "hoàn hảo", đối xứng đều 2 bên. Nếu nhìn vào thấy giống 1 icon/logo/vector clipart — SAI.
- **TUYỆT ĐỐI KHÔNG:** shading, tô bóng, cross-hatch, gradient tông, vẽ khối 3D, chi tiết bề mặt (vân gỗ, nếp vải, texture da...).
- Nét PHẢI có run tay thật: đầu/cuối nét hơi thon/không đều, thỉnh thoảng 1 đoạn nét chồng lên chính nó (như tay vẽ lại/điều chỉnh giữa chừng), không phải đường Bezier toán học mượt tuyệt đối. Đây là hiệu ứng CHÍNH cần có — không phải phụ.
- Bất đối xứng, "imperfect on purpose", cảm giác được vẽ trong 3-5 giây bởi tay người thật — không "clean" theo nghĩa hoàn thiện/khép kín, mà "clean" theo nghĩa không có bóng/không có màu.

**Màu & nền (QUAN TRỌNG cho hệ token đổi mùa):**
- Render **nét ĐEN thuần, đều màu, trên nền TRONG SUỐT (PNG alpha)**. Vì nét mảnh-đều (không phải chì đậm nhạt), file nên gần như **nhị phân** (đen hoặc trong suốt, ít vùng xám trung gian) — khác hẳn hướng "grain/độ mờ từng điểm" của brief cũ.
- KHÔNG tô màu, KHÔNG gradient, KHÔNG bóng đổ. Màu sẽ do web gán bằng token `--accent` (xem Mục 2) — nét phải đơn sắc.
- Nếu model chỉ xuất nền trắng: render **nét đen trên nền TRẮNG phẳng, tương phản cao** để tách nền (luminance→alpha) sau.

**Tech chung:** PNG, nền trong; render **@2x–3x**; chừa lề thoáng quanh hình (hình chỉ chiếm ~50-65% khung, không lấp đầy); không chữ ký/watermark.

---

## 2 · KỸ THUẬT GẮN VÀO WEB (giữ đổi màu 1-click)

Nét được dùng làm **CSS mask** phủ lên khối tô `--accent` → **mask lấy kênh alpha của ảnh**, nên grunge/độ xước của chì được **giữ nguyên** dưới dạng biến thiên độ đậm của màu accent. Đổi mùa (đổi `--accent`) thì nét đổi màu theo, texture còn nguyên.

```css
.ill{display:block;background:var(--accent);
  -webkit-mask:var(--src) no-repeat center/contain; mask:var(--src) no-repeat center/contain}
.ill-stitch{--src:url("../assets/illustrations/stitch_with_care.png")}
```
- Muốn giữ **đúng màu chì graphite thật** (không nhuộm theo mùa) thì dùng thẳng `<img>`/`background-image` thay vì mask — nhưng khi đó KHÔNG đổi mùa được. Mặc định: **dùng mask** để đồng bộ token.
- File alpha sạch (nền thật sự trong) là điều kiện để mask đẹp.

---

## 3 · DANH MỤC ASSET

| id | Dùng ở đâu | filename | Status |
|---|---|---|---|
| `stitch_with_care` | Nét khâu tay trên Interlude Homepage (đã gắn `.interlude-mark`) | `stitch_with_care.png` | ✅ Render + gắn Interlude qua CSS mask |
| `stitch_divider` | Divider chỉ-khâu ngang giữa các section (motif lặp) | `stitch_divider.png` | ✅ Render + đã khai báo primitive `.ill-divider` |
| `stitch_short` | Nét khâu ngắn / mũi kim làm dấu nhấn nhỏ, bullet | `stitch_short.png` | ✅ Render + đã khai báo primitive `.ill-short` |
| `approach_conversation` | Ý "01 The first conversation" — 1 tách trà bốc hơi | `approach_conversation.png` | ✅ Render + gắn Approach qua CSS mask |
| `approach_returns` | Ý "02 What returns" — 1 con sóng cuộn lại | `approach_returns.png` | ✅ Render + gắn Approach qua CSS mask |
| `approach_form` | Ý "03 The form" — 1 cuộn thước dây thợ may | `approach_form.png` | ✅ Render + gắn Approach qua CSS mask |
| `cp_calligraphy` | Bút lông thư pháp giữa nét — section Cultural Perspective | `cp_calligraphy.png` | ✅ Render + gắn `.cp-mark` qua CSS mask |
| `contact_pen` | Bút mực viết dở — section Contact (`.cf-left`) | `contact_pen.png` | ✅ Render + gắn `.cf-mark` qua CSS mask |

> Motif hệ thống đã chốt: **khâu tay (running stitch)** — "care = khâu tay/bespoke" — dùng cho divider/dấu nhấn nhỏ lặp lại. 3 illustration Approach là ý tưởng RIÊNG (không lặp motif khâu tay), nhưng vẫn PHẢI cùng một "bàn tay"/art direction ở Mục 1.

> **Ngân sách illustration (khuyến nghị hội đồng):** tối đa 1 illustration độc bản / section chính, trần toàn site ~8–10 file duy nhất cho cả Homepage. Vượt trần này, illustration bắt đầu cạnh tranh với ảnh thật và phá vỡ tinh thần "một cử chỉ dứt khoát, tối giản" — nhiều hơn không phải là mạnh hơn, mà là loãng. `stitch_divider` dùng lại nhiều instance qua CSS transform (xoay/lật/scale) không tính thêm vào trần.

> **Quy tắc đặt tên (áp dụng từ đây):** `{section}_{motif hoặc ý}.png` — ví dụ `approach_conversation.png` — để dễ theo dõi khi số lượng tăng. Giữ thư mục phẳng trong `assets/illustrations/` (site chưa đủ lớn để cần subfolder).

---

## 4 · ORDER CHI TIẾT (prompt dán thẳng)

### 4.1 · `stitch_with_care`
**Mô tả:** một đường chỉ khâu tay nằm ngang, hơi gợn sóng, mũi khâu không đều; cuối bên phải có cây kim mảnh xỏ chỉ. Đặt dưới chữ "with care". Khổ ngang dài.
**Filename:** `stitch_with_care.png` · **Size:** 2400 × 380 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A single horizontal hand-sewn running-stitch line drawn by hand with a real 2B graphite pencil,
slightly wavy and organic, uneven hand-stitched dashes of thread, a fine sewing needle with an
eyelet at the right end trailing a thin loose thread. Natural grunge texture, visible paper tooth,
scratchy broken strokes, uneven pressure, light graphite smudging, imperfect artisanal gesture.
Minimal, understated, editorial. Pure black strokes on a fully transparent background, monochrome,
the pencil grain preserved as soft partial opacity. Flat scanned-artwork look.
```
**NEGATIVE:**
```
vector, clean lines, digital smoothness, gradient, color, drop shadow, 3d, glossy, cartoon,
childish, clipart, cute, symmetrical, background fill, paper texture background, watermark, text
```

---

### 4.2 · `stitch_divider`
**Mô tả:** đường chỉ khâu tay ngang **dài**, đều nhịp hơn bản 4.1 (để lặp làm ngăn cách section), không cần kim; hai đầu nhạt dần. Có thể lặp/tile theo chiều ngang.
**Filename:** `stitch_divider.png` · **Size:** 3000 × 120 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A long horizontal hand-sewn running-stitch seam drawn by hand with a real 2B graphite pencil,
evenly spaced but organically uneven stitches, gently wavering baseline, ends fading out softly.
Natural grunge, visible paper tooth, scratchy broken graphite strokes, uneven pressure, artisanal
and imperfect. Minimal and quiet. Pure black on fully transparent background, monochrome, pencil
grain preserved as partial opacity. Flat scanned-artwork look.
```
**NEGATIVE:** *(như 4.1)*

---

### 4.3 · `stitch_short`
**Mô tả:** vài mũi khâu tay ngắn (3–5 mũi) hoặc một mũi kim + nút chỉ nhỏ, làm dấu nhấn / bullet / gạch nối nhỏ.
**Filename:** `stitch_short.png` · **Size:** 600 × 300 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A tiny cluster of three or four hand-sewn stitches with thread, or a small sewing needle knotting
a thread, drawn by hand with a real 2B graphite pencil. Natural grunge texture, visible paper tooth,
scratchy uneven strokes, imperfect artisanal mark. Minimal. Pure black on fully transparent
background, monochrome, pencil grain preserved as partial opacity. Flat scanned-artwork look.
```
**NEGATIVE:** *(như 4.1)*

---

### 4.4 · `approach_conversation` (RENDER LẦN 4 — đổi chủ thể, giữ nguyên bút pháp đã duyệt)
**Mô tả:** Bút pháp lần 3 (continuous-line, để hở, có run tay) đã được khách DUYỆT — giữ nguyên công thức prompt. Chỉ đổi chủ thể: ống nghe điện thoại (nhàm, generic, "clip-art vintage toàn cầu") → **một tách trà nhỏ đang bốc hơi**, hơi nóng vẽ như một đoạn nét kéo dài uốn lượn của chính continuous-line đó. Lý do: "cuộc trò chuyện đầu tiên" ở Việt Nam luôn mở đầu bên ấm trà — cụ thể, ấm, đúng chất hiếu khách, không sến kiểu trầu cau (đã cân nhắc và loại vì trầu cau quá gần cliché "nhẫn cưới/chuông" của ngành).
**Filename:** `approach_conversation.png` · **Size:** 600 × 640 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A single small teacup with a wisp of steam rising from it, drawn in the style of a Matisse-esque
continuous one-line drawing — one economical, mostly unbroken pen gesture that only IMPLIES the
cup's form, with the steam rendered as a loose, unfurling continuation of the same single line.
Do NOT trace a closed outline around the entire silhouette; do NOT draw a double parallel line
to fake thickness. Leave parts of the object's edge unstated and incomplete, suggested by empty
space rather than fully drawn — the hand lifts the pen and moves on before finishing every edge.
Fine liner pen, thin line, but with a genuinely imperfect human hand quality: line ends taper
unevenly, one or two short segments overlap where the hand doubled back mid-gesture, the curve
is never perfectly smooth or symmetrical. NOT a smooth vector Bezier curve, NOT a closed contour,
NOT icon/logo/clipart style. No shading, no cross-hatching, no tonal rendering, no 3D volume, no
surface texture. Drawn fast and loose, as if in 3-5 seconds, confident and unfussy — NOT careful,
NOT fully resolved. Pure black line on a fully transparent background, monochrome.
```
**NEGATIVE:**
```
closed outline, traced silhouette, double-line contour, parallel outline, coloring book outline,
icon, logo, clipart, vector path, perfectly smooth curve, bezier-smooth, symmetrical, complete
silhouette, every edge drawn, uniform mechanical line, sterile, clean vector art, gradient, color,
drop shadow, 3d, glossy, cartoon, childish, background fill, watermark, text, scene, shading,
cross-hatching, tonal rendering, realistic rendering, surface texture, graphite grain, smudged,
telephone, teapot with handle drawn separately as a closed shape
```

---

### 4.5 · `approach_returns` (RENDER LẦN 4 — đổi chủ thể, giữ nguyên bút pháp đã duyệt)
**Mô tả:** Đổi vỏ ốc xoắn (trừu tượng, vay mượn ngoài ngành) → **một con sóng đang cuộn lại chính nó**, 1 nét cong dứt khoát không khép kín. Lý do: thuỷ triều luôn quay về bờ — đúng nghĩa "điều quay lại", và khớp trực tiếp chất biển/đảo đã có sẵn trong thương hiệu WIS (hero có slide ocean, Phú Quốc/Đà Nẵng nhắc ở Interlude) — không phải ẩn dụ vay mượn, mà là chất riêng.
**Filename:** `approach_returns.png` · **Size:** 700 × 500 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A single ocean wave caught mid-curl, about to break and fold back on itself, drawn in the style
of a Matisse-esque continuous one-line drawing — ONE unbroken pen gesture that only IMPLIES the
wave's curling form. Do NOT trace a closed outline around the entire shape; do NOT draw a double
parallel line to fake thickness; the shape should NOT be fully closed — let the line trail off
or stay open, as if the hand lifted before finishing. Fine liner pen, thin line, but with a
genuinely imperfect human hand quality: uneven curve, tapering line ends, not a perfect
mathematical curl. NOT a smooth vector curve, NOT a closed contour, NOT logo/icon style. No
shading, no cross-hatching, no tonal rendering, no 3D volume, no water texture or foam detail.
Drawn fast and loose, as if in 3-5 seconds. Pure black line on a fully transparent background,
monochrome.
```
**NEGATIVE:** *(như 4.4, thêm: seashell, spiral shell, water texture, foam detail, realistic wave, perfect geometric curve)*

---

### 4.6 · `approach_form` (RENDER LẦN 4 — đổi chủ thể, giữ nguyên bút pháp đã duyệt)
**Mô tả:** Đổi compa vẽ kỹ thuật (cliché giới thiết kế nói chung) → **một cuộn thước dây thợ may**, cuộn tròn với đầu kim loại nhỏ thò ra ngoài. Lý do: nối thẳng vào tinh thần "may đo/bespoke" vốn đã là xương sống thương hiệu (chữ "care" ở Services, motif khâu tay) — số đo quyết định dáng áo, đúng nghĩa đen "the form" (hình hài đang thành hình) mà không lặp lại chính hình cây kim/chỉ đã dùng ở motif khâu tay.
**Filename:** `approach_form.png` · **Size:** 620 × 620 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A single coiled tailor's measuring tape, wound into a loose loop with a small metal tip end
sticking out, drawn in the style of a Matisse-esque continuous one-line drawing — a few
economical pen strokes that only IMPLY its coiled form. Do NOT trace a closed double-line
outline around the coil; draw it as loose overlapping single-line loops, not an outlined shape
with two parallel edges. Leave the tip and inner coil loosely suggested, not fully resolved.
Fine liner pen, thin line, but with a genuinely imperfect human hand quality: line ends taper
unevenly, slightly uneven loops, not a perfectly smooth vector line. NOT icon/logo/clipart
style, NOT symmetrical, NOT a fully-outlined technical drawing. No shading, no cross-hatching,
no tonal rendering, no 3D volume, no printed ruler markings/numbers. Drawn fast and loose, as if
in 3-5 seconds. Pure black line on a fully transparent background, monochrome.
```
**NEGATIVE:** *(như 4.4, thêm: drafting compass, dividers, floor plan, blueprint, ruler markings, numbers, CAD, isometric, double-line outlined coil)*

---

### 4.7 · `cp_calligraphy` (MỚI)
**Mô tả:** MỘT cây bút lông thư pháp/vẽ tranh lụa, đang giữa một nét vẽ (đầu bút chạm giấy, vệt mực kéo theo). Đặt tại section Cultural Perspective (`.cp-intro`, gần `.eyebrow "A sense of place"`) — vùng hiện chỉ có chữ trên nền tối, còn trống. Nối trực tiếp tới chi tiết "Mai Trung Thu's palette" đã có trong copy slide 01 — tránh cliché du lịch (nón lá/áo dài).
**Filename:** `cp_calligraphy.png` · **Size:** 640 × 520 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A single calligraphy brush mid-stroke, its tip touching down with a trailing wisp of ink,
drawn in the style of a Matisse-esque continuous one-line drawing — one economical, mostly
unbroken pen gesture that only IMPLIES the brush's form and the ink trail. Do NOT trace a closed
outline around the entire silhouette; do NOT draw a double parallel line to fake thickness.
Leave parts of the object's edge unstated and incomplete, suggested by empty space rather than
fully drawn. Fine liner pen, thin line, but with a genuinely imperfect human hand quality: line
ends taper unevenly, one or two short segments overlap where the hand doubled back mid-gesture.
NOT a smooth vector Bezier curve, NOT a closed contour, NOT icon/logo/clipart style. No shading,
no cross-hatching, no tonal rendering, no 3D volume, no bristle texture detail. Drawn fast and
loose, as if in 3-5 seconds, confident and unfussy. Pure black line on a fully transparent
background, monochrome.
```
**NEGATIVE:** *(như 4.4, thêm: conical hat, ao dai, tourist cliché, bristle texture, ink pot drawn separately as closed shape)*

---

### 4.8 · `contact_pen` (MỚI)
**Mô tả:** MỘT cây bút mực đang viết dở, để lại 1 vệt mực kéo dài rồi ngưng đột ngột (câu chưa viết xong). Đặt tại `.cf-left`, gần `.cf-head "A story begins somewhere"` — cột hiện khá trống so với form bên phải. Ẩn dụ: WIS chỉ mở đầu câu chuyện, phần còn lại là của khách — đối ứng Hero (mở bằng ảnh, kết bằng nét bút).
**Filename:** `contact_pen.png` · **Size:** 640 × 460 px · **Format:** PNG nền trong.

**PROMPT (EN):**
```
A single fountain pen mid-write, resting at an angle with a trailing ink line that starts
confidently then stops abruptly mid-gesture (an unfinished sentence), drawn in the style of a
Matisse-esque continuous one-line drawing — one economical, mostly unbroken pen gesture that
only IMPLIES the pen's form and the trailing ink line. Do NOT trace a closed outline around the
entire silhouette; do NOT draw a double parallel line to fake thickness. Leave parts of the
object's edge unstated and incomplete, suggested by empty space rather than fully drawn. Fine
liner pen, thin line, but with a genuinely imperfect human hand quality: line ends taper
unevenly, one or two short segments overlap where the hand doubled back mid-gesture. NOT a
smooth vector Bezier curve, NOT a closed contour, NOT icon/logo/clipart style. No shading, no
cross-hatching, no tonal rendering, no 3D volume, no nib/metal detail. Drawn fast and loose, as
if in 3-5 seconds, confident and unfussy. Pure black line on a fully transparent background,
monochrome.
```
**NEGATIVE:** *(như 4.4, thêm: nib detail, metal clip, full written sentence/legible text, ink bottle drawn separately as closed shape)*

---

## 5 · TEMPLATE ORDER (copy khi thêm asset mới)

**Chọn chủ thể là 1 ĐỒ VẬT CỤ THỂ** (không phải hoạt cảnh/nhiều nhân vật/sơ đồ). Nếu ý tưởng đang là 1 cảnh (2 người, 1 sơ đồ, 1 bối cảnh) — quy về 1 đồ vật độc lập ẩn dụ cho ý đó trước khi viết order.

```
### 4.x · `<id>`
**Mô tả:** <tiếng Việt: MỘT đồ vật gì, đặt ở đâu, tỉ lệ ngang/dọc — không phải hoạt cảnh>
**Filename:** `<id>.png` · **Size:** <W × H px> · **Format:** PNG nền trong.

**PROMPT (EN):**
A single <đồ vật cụ thể>, drawn in the style of a Matisse-esque continuous one-line drawing —
one economical, mostly unbroken pen gesture that only IMPLIES the object's form. Do NOT trace a
closed outline around the entire silhouette; do NOT draw a double parallel line to fake
thickness. Leave parts of the object's edge unstated and incomplete, suggested by empty space
rather than fully drawn. Fine liner pen, thin line, but with a genuinely imperfect human hand
quality: line ends taper unevenly, one or two short segments overlap where the hand doubled back
mid-gesture, the curve is never perfectly smooth or symmetrical. NOT a smooth vector Bezier
curve, NOT a closed contour, NOT icon/logo/clipart style. No shading, no cross-hatching, no
tonal rendering, no 3D volume, no surface texture. Drawn fast and loose, as if in 3-5 seconds,
confident and unfussy — NOT careful, NOT fully resolved. Pure black line on a fully transparent
background, monochrome.

**NEGATIVE:**
closed outline, traced silhouette, double-line contour, parallel outline, coloring book outline,
icon, logo, clipart, vector path, perfectly smooth curve, bezier-smooth, symmetrical, complete
silhouette, every edge drawn, uniform mechanical line, sterile, clean vector art, gradient, color,
drop shadow, 3d, glossy, cartoon, childish, background fill, watermark, text, scene, shading,
cross-hatching, tonal rendering, realistic rendering, surface texture, graphite grain, smudged
```

---

## 6 · CHECK KHI NHẬN FILE
- [ ] Chủ thể là **1 đồ vật cụ thể**, không phải hoạt cảnh/sơ đồ/nhiều nhân vật.
- [ ] **KHÔNG phải outline khép kín** (kiểm tra kỹ: có đường đôi song song ôm quanh rìa không? có khép kín 100% vòng ngoài không? Nếu có → giống icon, SAI — phải render lại).
- [ ] Nét có **run tay thật** (đầu/cuối thon không đều, có chỗ chồng nét) — không phải Bezier mượt tuyệt đối.
- [ ] Vài phần rìa vật thể **để hở/không vẽ hết** — không phải mọi cạnh đều được vẽ.
- [ ] Cảm giác **ký họa nhanh, phóng khoáng** (như Matisse continuous-line) — không "nhòe", không giống tả thật, KHÔNG giống icon/logo/clipart.
- [ ] Nền **thật sự trong suốt** (không viền trắng, không ô caro giả).
- [ ] Nét **đen/đơn sắc**. Không màu, không bóng, không chữ.
- [ ] Đủ độ phân giải (@2x+), nhiều khoảng trắng quanh hình (hình chỉ chiếm ~50-65% khung).
- [ ] Thả vào `assets/illustrations/`, đúng `filename`, gắn qua CSS mask (Mục 2), đổi Status ✅.
