# HƯỚNG RESPONSIVE MOBILE — WIS Homepage
**Người chịu trách nhiệm bản này:** Bùi Vũ Khải "Phantom" · 2026-09-11
**Đo trên:** `Homepage_codex_alt.html` @ **393×852** (iPhone 15 Pro), đã đóng băng reveal để đọc trạng thái nghỉ.

---

## 1. Kết luận trước, lý do sau

Mobile không phải "bản desktop bị co lại đang hơi lỗi". **Mobile là một thiết kế KHÁC, cũ hơn hai thế hệ, vẫn đang sống nguyên vẹn ở dưới.**

Toàn bộ đợt dựng lại pixel-perfect chỉ viết rule trong `@media(min-width:821px)` và dải iPad `821–1400 × ≤900`. Mọi thứ **dưới 821px chưa bao giờ được đụng tới** — nó vẫn chạy CSS mobile-first của vòng 1, rải trong **279 rule / 6 breakpoint** (`560 · 680 · 780 · 820 · 860 · 900`).

Nên câu hỏi đúng không phải "sửa responsive thế nào". Là: **đừng responsive cái này — hãy thiết kế lại cái này.**

---

## 2. Bằng chứng (số đo, không phải cảm giác)

| Triệu chứng | Số đo @393 | Ý nghĩa |
|---|---|---|
| **8 cỡ tiêu đề khác nhau** trên một trang | 27 · 30 · 31 · 32 · 35 · 38 · 42 · 54 px | Không có type scale. Desktop/iPad chỉ có **một** cỡ (44). |
| **Ảnh case rộng 181px** | 46% bề ngang màn | Thứ đắt nhất của thương hiệu bị render bằng nửa màn hình, hai bên trống 106px. |
| **Ảnh nền Approach biến mất** | `.ap-frame{display:none}` | Section mất luôn chủ thể, còn lại chữ trần. |
| **12 vùng chạm dưới 44px** | lang 14 · menu 14 · mục menu 22 | Dưới chuẩn tối thiểu của cả Apple lẫn Google. |
| **Section `.interlude` chỉ tồn tại trên mobile** | cao 624 | Nội dung không có trong thiết kế đã duyệt. |
| **Footer cao 1467** | ~1.7 màn | Riêng footer dài hơn cả Hero + Testimonial cộng lại. |
| Padding section không nhất quán | 0 / 102 / 110 | Không có nhịp dọc. |
| Tổng chiều dài trang | 13234px ≈ **15.5 màn** | |

---

## 3. Phân loại lại từng section — 3 chế độ

Không section nào được "co cho vừa" một cách mù quáng. Mỗi cái thuộc đúng một chế độ:

### FLUID — chỉ cần co, giữ nguyên cấu trúc
- **Contact** (form một cột dọc vốn đã đúng trên mọi khổ)
- **Cultural Intro** (hai khối chữ → xếp chồng)

### ADAPTIVE — cùng nội dung, format khác hẳn
- **Header** → thanh trên chỉ còn logo + nút menu; bỏ EN/VI khỏi thanh, đưa vào trong menu overlay
- **Menu overlay** → mục menu là **hàng cao 56–64px chạm được**, không phải dòng chữ 22px
- **Services** → danh sách 5 dịch vụ thành **accordion**: chạm mở ảnh + mô tả ngay tại chỗ (hover không tồn tại trên mobile, nên cơ chế "rê để đổi ảnh" của desktop là vô nghĩa)
- **Footer** → 4 cột thành 2 cột (Menu | Connect) + Studios chạy ngang; cắt chiều cao còn ~½

### TRANSFORMATIVE — không scale được, phải tái sinh
- **Hero** — chữ tay + hậu tố + khung ảnh + spine dọc là một lockup tính theo mép ảnh. Trên 393 nó phải là bố cục khác: ảnh full-bleed, chữ tay đè lên, bỏ spine dọc (không ai đọc chữ xoay 90° trên điện thoại).
- **Featured Works** — đây là chỗ **tệ nhất và đáng sửa nhất**. Bố cục so le 3 ảnh/case của desktop không dịch được sang 393. Phải đổi paradigm: **mỗi case = một khối full-bleed**, ảnh chính tràn viền, hai ảnh phụ thành một hàng ngang cuộn được, tên case + địa danh nằm dưới. Huy hiệu "view this story" bỏ hẳn trên mobile — không có con trỏ thì không có gì để bám; cả tấm ảnh là vùng bấm.
- **Cultural Walk** — đi ngang 3 panel bằng cách cuộn dọc là cơ chế của desktop. Trên mobile: **vuốt ngang thật** (scroll-snap ngang), 3 panel = 3 thẻ, chấm chỉ vị trí ở dưới.
- **Approach** — 3 bước ghim trên một khung ảnh. Trên mobile phải thành **3 khối xếp dọc**, mỗi khối có ảnh riêng ở trên, số + chữ tay + đoạn văn ở dưới. Tuyệt đối không bỏ ảnh như hiện tại.

---

## 4. Nền móng phải làm TRƯỚC khi động vào từng section

Làm ngược thứ tự này là sửa mãi không xong.

**a) Một breakpoint duy nhất cho mobile.** Gộp 6 mốc hiện có về **một** mốc `max-width:820px`, dùng lại đúng token `--pm` đã có (mobile = 20px). Sáu mốc không phải là "responsive kỹ", nó là sáu lần sửa chữa chồng lên nhau.

**b) Type scale, 4 bậc, hết.**
| Bậc | Mobile | Dùng cho |
|---|---|---|
| Display | 34px / 1.0 | tiêu đề section (thay cho 8 cỡ hiện tại) |
| Title | 22px / 1.25 | tên dịch vụ, tên case |
| Body | 16px / 1.55 | đoạn văn (hiện đang 14 — dưới ngưỡng đọc thoải mái) |
| Caption | 11px / 0.3em | số thứ tự, nhãn |
Chữ tay Imperfetto giữ **một** cỡ duy nhất: 28px.

**c) Chạm tối thiểu 44×44.** Không ngoại lệ. Chữ có thể nhỏ, vùng chạm thì không.

**d) Ngân sách chuyển động.** Mobile bỏ: film grain canvas ở Footer (giữ Hero), line-boil của chữ viết tay, mọi hiệu ứng bám con trỏ. Giữ: reveal khi cuộn vào tầm nhìn, crossfade ảnh. Lý do không phải hiệu năng thuần tuý — mà là **user một tay, đang di chuyển, không nhìn chi tiết rung 0.3%**.

**e) Nhịp dọc một con số.** Mọi section: padding trên/dưới **72px**. Trang hiện tại có 0/102/110 lẫn lộn.

---

## 5. Thứ tự làm

1. **Nền móng** (a→e) — không có nó thì mọi việc sau đều phải làm lại.
2. **Featured Works** — lỗi nặng nhất, cũng là section bán hàng.
3. **Hero** — thứ đầu tiên khách nhìn thấy.
4. **Approach** — đang mất ảnh, tức mất một nửa nội dung.
5. **Services** → accordion.
6. **Cultural Walk** → vuốt ngang.
7. **Footer** → 2 cột.
8. **Menu + Header** → vùng chạm.

---

## 6. Ba câu phải chốt trước khi code

1. **`.interlude` giữ hay bỏ?** Nó chỉ xuất hiện trên mobile, không có trong bản thiết kế đã duyệt.
2. **Mobile có cần frame Figma riêng không**, hay tao code thẳng theo hướng này rồi khách duyệt trên máy thật? (Dựng Figma 393 cho 9 section là việc nặng — nhưng nếu khách muốn tự căn tay như đã làm với iPad thì phải có.)
3. **Chữ viết tay trên mobile**: giữ hiệu ứng rung (line-boil) hay tắt? Đây là DNA thương hiệu, nên đây là quyết định thương hiệu chứ không phải kỹ thuật.
