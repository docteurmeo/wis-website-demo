## Featured Works

### Trạng thái (2026-08-06)
- Nội dung: copy doc 27 (3 case mẫu), tên cặp đôi tạm.
- Trình diễn: ref adovasio.it. Cơ chế PIN: một lớp tên + một dấu "&" ghim center dọc, ảnh cuộn qua ở cột giữa (không chạm tên hai mép), hết ảnh thì tên được VIẾT LẠI tại chỗ sang project kế (không cuộn đi). Tên chỉ fade in khi ảnh bắt đầu vào khung. Headline chạy ngang phải-sang-trái theo cuộn.
- HTML: 03_Featured_Works.html (standalone) + đã GHÉP vào Homepage.html (sau Philosophy).
- Figma: đã dựng frame "Section / Featured Works" (35:8) trong page Homepage, nối cuối frame Homepage 26:6 sau Philosophy. Font stand-in Playfair/Jost + biến màu WIS; CHƯA áp text style (user chỉnh font/style trên Desktop). 3 ảnh thật đã đổ vào.
- Quyết định tiếp theo: user chỉnh trong Figma; ưng thì recode HTML theo.

### Mục tiêu
Bằng chứng bằng hình ảnh và glory story. Cho khách thấy tác phẩm thật, cảm giác editorial, sang.

### Reference
- https://www.adovasio.it/ (khu vực dưới hero): tên cô dâu và chú rể ở hai mép, chữ "&" rất to nhạt ở giữa, ảnh lớn bên dưới; các project lần lượt hiện khi cuộn.

### Copy (doc 27)
- Headline chạy ngang: "Selected glory stories" (hoặc "The stories that stay").
- Project 01: Lily & Antoine - "A House in the Colors of a Painting" - The Reverie Saigon.
- Project 02: Nhật Anh & Anh Thư - "Coincidence" - Hanoi.
- Project 03: Hà & Hưng - "At 1,600 Meters" - Sapa.
- [WIS cần cấp]: chốt danh sách case chính thức, tên cặp đôi, ảnh, thứ tự.

### Bản recode theo Figma (2026-08-06, vòng 2)
- Headline "Selected glory stories" (MADE Mirage ~200px / 10.42vw, bone): khi cuộn tới thì TRƯỢT VÀO TỪ PHẢI, chạy 1 lần (không lặp). Bỏ marquee lặp cũ.
- Dấu "&": VECTOR (SVG xuất từ Figma), khổng lồ (~46.4vw), opacity 10%, bone, ghim center - NẰM LAYER DƯỚI ẢNH (ampbar z-index 1), làm nền mờ, ảnh cuộn đè lên.
- Tên cặp đôi rút thành INITIAL (1 chữ), MADE Mirage ~200px, màu VÀNG (gold), hai mép (trái/phải cách 56px) - LAYER TRÊN ẢNH (namebar z-index 5).
- Slogan/tagline mỗi project (SweetSans Medium 20px, UPPER, letter-spacing .28em, bone) ghim center - LAYER TRÊN ẢNH (nổi trên ảnh khi ảnh cuộn qua). Ví dụ "Love favor". Initial + slogan VIẾT LẠI CÙNG NHAU khi sang project.
- Caption concept + nơi chốn (dim, 14px, UPPER): ở ĐÁY mỗi project (cuộn cùng ảnh), theo thiết kế Figma.
- Cụm tên/tagline chỉ hiện khi intro đã cuộn khuất (projects cách intro ~44vh).
- Intro "Each begins..." MADE Mirage Thin 40px (2.08vw), canh trái, line-height 1.42, rộng tối đa ~1006px.
- Cột ảnh giữa rộng 30.5vw (586px): gA 100% (3/4), gB 57.3% (4/5) lệch phải, gC 78.3% (5/4) lệch trái; cách nhau ~13vh.
- Caption dưới mỗi project: SweetSans 14px, UPPER, letter-spacing .18em, màu dim.
- [CẦN CHỐT] slogan project 2 ("Quiet fate") và 3 ("Above clouds") đang là placeholder tao đặt tạm; initial dùng chữ đầu tên cặp đôi (L&A, N&A, H&H) - WIS/mày chốt lại.

### Cách trình diễn
- Mở đầu: một headline lớn (Mirage) chạy ngang từ phải sang trái theo cuộn (scroll-linked translateX).
- 3 project lần lượt hiện khi cuộn tới: tên cô dâu ở mép trái, tên chú rể ở mép phải, chữ "&" rất to và nhạt ở chính giữa (Mirage khổng lồ, opacity thấp).
- Mỗi project có 3 ảnh sắp xếp to nhỏ khác nhau (một ảnh lớn chủ đạo, một vừa, một nhỏ), vị trí lệch tầng nhưng theo nguyên tắc (kích thước giảm dần, so le cao thấp, cân bằng thị giác), không phải grid đều.
- Nền warm-dark, font Mirage (tên, headline) + SweetSans (caption/label).

### Hiệu ứng
- Headline: translateX theo cuộn (phải sang trái).
- Project: khi vào khung, tên trồi vào từ hai bên + "&" hiện, ảnh reveal lần lượt (scale/clip nhẹ).
- prefers-reduced-motion: hiện thẳng.

### Tài sản
- Ảnh cưới thật WIS (đang dùng bộ có sẵn làm placeholder, một số dùng lại). WIS cấp bộ ảnh thật cho từng case sau.

### Điều cần tránh
- Không grid ảnh đều tăm tắp; sắp xếp phải có nhịp.
- Tên/"&" không đè khó đọc lên ảnh.
- Không rối, giữ khoảng thở.

### Tiêu chí duyệt
- Headline chạy ngang mượt theo cuộn.
- Bố cục tên hai bên + "&" giữa đúng tinh thần adovasio.
- 3 ảnh sắp xếp to nhỏ có gu, project lần lượt hiện tự nhiên.
- Full màn trên FHD.
