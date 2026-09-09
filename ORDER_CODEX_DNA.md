# ORDER CHO CODEX — NÂNG HÀM LƯỢNG DNA NỬA SAU TRANG CHỦ

File làm việc: `Demo_TrangChu/v2/Homepage_codex_alt.html` (một file, không build).
Local: `node .claude/static-server.js` → http://localhost:5177/Demo_TrangChu/v2/Homepage_codex_alt.html
Figma: https://www.figma.com/design/R5iVFrI46A8yWlVmIiAtCx (fileKey `R5iVFrI46A8yWlVmIiAtCx`)
Đọc kèm: `Demo_TrangChu/HANDOFF_FIGMA_PIXEL_PERFECT.md` (quy tắc quy đổi, token, 10 cái bẫy đã dính)

---

## 1. VIỆC CẦN LÀM

Đề xuất **và triển khai** cách nâng hàm lượng DNA thương hiệu ở nửa sau trang chủ.
DNA của WIS = **chữ viết tay** (font Imperfetto + token line boil) và **hình minh
hoạ vẽ tay ấn tượng**.

Khách chốt hai điều kiện:
- **"Ít nhưng đắt và sáng tạo"** — không cần nhiều element, cần ít mà đáng.
- Section đang làm TỐT: **Hero, Approach, Services**. Còn lại chưa đủ.

**Trình bày phương án trước khi code.** Khách yêu cầu vậy ở mọi hạng mục lớn.

---

## 2. DỮ LIỆU KIỂM KÊ (đo thật từ DOM ở 1920×1080 — dùng được, không phải phỏng đoán)

| Section | Chữ viết tay | Minh hoạ |
|---|---|---|
| Hero | "We craft love story with" 78px (+ hậu tố động Fahkwang 128px) | — |
| Approach | 3 tiêu đề bước 48px | **3 hình SVG 262px**, ghim center, đổi theo bước, 3 màu |
| Interlude | — | 1 hình thêu `stitch_with_care.png` |
| Services | 5 câu copy 37px (nguyên văn từ wedinstyle.vn) | — |
| Featured Works | "Love flavor" 37px | — |
| Cultural Perspective | 3 tên địa danh 96px | — |
| Testimonial | dấu `“` 200px + tên cặp đôi 37px | — |
| Contact | — | — |
| Footer | — | — |

**Ba dữ kiện đáng chú ý:**
1. Minh hoạ vẽ tay **chỉ tồn tại ở đúng một section** (Approach). Nhánh minh hoạ
   chết hẳn từ giữa trang.
2. Hai khối chữ tay **lớn nhất trang** là dấu `“` 200px và tên địa danh 96px —
   cả hai đều lớn hơn câu tuyên ngôn Hero 78px, và cả hai đều **không phải giọng
   của WIS** (một ký tự trang trí, một danh từ riêng không thuộc về WIS).
3. Đường cong DNA đậm ở 3 section đầu rồi tắt hẳn ⇒ nửa sau đọc ra như trang khác.

---

## 3. ĐÃ ĐỀ XUẤT VÀ BỊ KHÁCH BÁC — ĐỪNG LẶP LẠI

Hội đồng (art director + biên tập thương hiệu) đã đưa ra bộ đề xuất dưới đây.
Khách đọc xong nhận xét đúng ba chữ: **"nhàm chán"**. Không đề xuất lại, dù là
biến thể:

- Bỏ dấu `“` 200px ở Testimonial.
- Cultural: đổi tên địa danh sang chữ in, thay bằng một dòng "nhận định của WIS"
  viết tay cỡ ~30px.
- Cultural: vẽ một nét đơn (đường chân trời/địa hình) chạy dưới tên địa danh.
- Contact: thêm một (hoặc vài) dòng ghi chú viết tay bên lề form.
- Footer: đổi wordmark "Let's talk." sang chữ tay, HOẶC thêm một hình minh hoạ
  nhỏ đặt lệch trong khoảng trống của wordmark.
- Featured Works: thêm một tính từ viết tay hiện khi hover từng cặp đôi.
- Testimonial: thay tên cặp đôi bằng chữ ký viết tay thật của khách.
- "Để trắng có chủ ý" ở Works/Interlude.

Mẫu số chung của cả bộ này: **đều là thêm/bớt một mảnh chữ hoặc một hình tĩnh
vào chỗ trống**. Nếu hướng mới cũng chỉ là "đặt thêm một element vào một vị trí"
thì gần như chắc chắn sẽ bị bác tiếp.

---

## 4. GỢI Ý HƯỚNG ĐI KHÁC (không bắt buộc, để tránh lặp lại vết cũ)

Những trục chưa ai động tới:
- **DNA nằm ở CHUYỂN ĐỘNG / CƠ CHẾ tương tác**, không nằm ở element tĩnh — ví dụ
  bản thân cách một section chuyển cảnh mang chất vẽ tay.
- **DNA nằm ở CHUYỂN TIẾP GIỮA các section** thay vì bên trong từng section
  (hiện các section rời nhau, không có gì nối).
- **Minh hoạ có quan hệ với ảnh thật** (đè, cắt, khoét, dẫn hướng) thay vì đứng
  cạnh ảnh.
- **Con trỏ chuột / trạng thái hover** như một vật thể vẽ tay (trang đã có
  precedent: nút "view this story" đi theo chuột ở Featured Works).
- **Một chi tiết vẽ tay xuyên suốt nhiều section** thay vì mỗi section một mảnh
  rời — thứ duy nhất hiện đang xuyên suốt là token line boil.

---

## 5. RÀNG BUỘC KỸ THUẬT BẮT BUỘC

- **Token line boil** (`.boil` + `armBoil(el, amp)`): mọi chữ viết tay và hình vẽ
  minh hoạ đều PHẢI có. Hai giới hạn cứng đã ghi nhận:
  (a) không áp lên element đang dùng `transform` để định vị — keyframes nuốt mất
  translate; (b) không áp lên minh hoạ một mảnh — sẽ ra cảm giác "lắc lư" chứ
  không phải run nét; minh hoạ dùng SVG `feTurbulence` + `feDisplacementMap` cycling
  (xem `#ilb1/2/3` trong file).
  Biên độ `amp` ≈ 0,3% kích thước element (chữ 78px → 1; 37px → .6; 96px → 1.5;
  hình 262px → 3). Trần amp 4.
- **Chi phí render**: mỗi khối boil là một vòng lặp chạy liên tục. Trang đã có
  film grain canvas ở Hero + Footer, cuộn ngang ở Cultural, bar tự chạy ở
  Testimonial, smooth-scroll lerp toàn trang. Thêm nhiều điểm rung nữa là có
  nguy cơ giật trên máy yếu — chữ tay rung mà giật thì đọc ra "web lỗi".
- **Neo dọc**: 1080 trong Figma là TRẦN viewport, không phải chiều cao cố định.
  Element mép trên neo `top:<px>`, ở giữa neo `top:calc(50% ± offset)`, mép dưới
  neo `bottom:<px>`. Đừng dùng % của chiều cao section.
- **Rule cũ đè rule mới** là cái bẫy đã dính ít nhất 6 lần trong dự án này. Trước
  khi viết CSS cho một class, **grep hết mọi rule của class đó** (file có nhiều
  media query chồng nhau) và xoá rule chết.
- Font viết tay có sẵn: Imperfetto One → Seven (`assets/fonts/imperfetto/`).
  Minh hoạ hiện có: `assets/illustrations/` (SVG Approach đã tách nền, PNG thêu).

---

## 6. QUY TRÌNH LÀM VIỆC VỚI KHÁCH

1. Khách sửa thủ công trên Figma + mô tả hiệu ứng mong muốn bằng lời.
2. Codex đọc số đo THẬT từ Figma bằng `use_figma` (`getNodeByIdAsync`, đọc
   `fills`/`fontName`/`textAutoResize`/`letterSpacing`/`lineHeight`) — **không suy
   từ ảnh chụp**, và đọc lại trước mỗi lần code vì khách sửa liên tục.
3. Code pixel perfect, rồi **verify bằng cách đo `getBoundingClientRect` ở
   viewport giả lập 1920×1080**, không verify bằng mắt.
4. Ghi lại vào `00_Project_Log.md`.

Lưu ý môi trường đã kiểm chứng: pane trình duyệt của agent **không chạy
`requestAnimationFrame`**, `document.visibilityState` luôn `"hidden"`, và
IntersectionObserver không bắn ⇒ mọi hiệu ứng phụ thuộc frame/in-view sẽ KHÔNG
vẽ khi tự kiểm tra. Verify bằng CSSOM/`getComputedStyle`/đo hình học, hoặc nhờ
khách xem mắt thường.
