## Hero

### Trạng thái: ĐÃ CHỐT (2026-08-06)
- Nội dung, trình diễn, hiệu ứng: chốt.
- Bản chuẩn HTML: Demo_TrangChu/01_Hero.html (gồm cả preload để chuyển cảnh liền mạch).
- Nguồn bố cục: file Figma WIS - Homepage UI (frame Hero), user đã sửa tay theo ref adovasio; HTML code lại bám đúng toạ độ/cỡ chữ đọc từ Figma.

### Bản chốt (khoá lại để section sau kế thừa)
- Bố cục editorial chữ rải: headline "We craft glory stories." tách thành 4 chữ đặt rải quanh khung, không phải một khối căn giữa. Vị trí và cỡ đọc từ Figma: MADE Mirage Regular, cỡ 200px (dùng 10.42vw để co giãn), letter-spacing -1%, line-height 96%, màu bone. We (giữa-trên), craft (trái), glory (phải-dưới), stories. (dưới-giữa). Eyebrow "Weddings in Vietnam, since 2009" SweetSans 12px ở đáy giữa. KHÔNG có CTA và scroll cue.
- Nav: socials (Instagram, Facebook) trái, logo mark trắng căn giữa, nút Menu + hamburger phải.
- Chuyển cảnh: ảnh cuối của preload phóng mở (khung nhỏ giãn ra full-bleed, ảnh đứng yên) thành nền hero, liền mạch. Slide đầu trùng đúng ảnh vừa phóng, hiện tức thì, và lớp preload ẩn hẳn để không nhá frame sót.
- Chữ hiện lần lượt: từng chữ fade-in nối tiếp (stagger ~430ms) kèm blur tan dần cho cảm giác thơ mộng, rồi tới eyebrow.
- Banner slideshow: 5 ảnh cưới thật (Ninh Binh, Catherine, SNP, David & Thuy, VDN), crossfade nhẹ 1.9s, mỗi ảnh 3.8s, chạy ngay khi hero hiện.
- Font: Mirage + SweetSans qua @font-face (assets/fonts). prefers-reduced-motion: vào thẳng hero.
- [WIS cần cấp]: bộ ảnh banner ngang chất lượng cao (hiện dùng ảnh có sẵn, một số dạng dọc bị crop).

### Mục tiêu
Khoảnh khắc mở màn thương hiệu. Nối liền từ preload: ảnh cưới cuối cùng phóng to thành nền hero full-bleded, câu tuyên ngôn "We craft glory stories." hiện lên. Cảm giác điện ảnh, editorial, sang.

### Reference
- https://www.adovasio.it/ (wedding photographer Ý). Cơ chế: preloader có %counter, rồi ảnh trong intro phóng thành hero full-bleed kèm headline serif lớn ("Weddings that never fade"), nav tối giản.
- Học: ảnh cuối phóng mở full-bleed thành hero; headline serif rất lớn trên nền hình; nav gọn. Không học: subtitle dưới headline (doc 27 cấm), font Inter của họ.

### Copy (doc 27, dùng nguyên văn)
- Eyebrow: WEDDINGS IN VIETNAM, SINCE 2009
- Headline: We craft glory stories.
- CTA: Begin the conversation
- Không thêm đoạn mô tả dưới headline.

### Cách trình diễn
- Nối tiếp preload đã chốt. Khi counter đạt 100, ảnh cuối của deck (ảnh hero) phóng to mở ra full-bleed thành nền hero. Các thành phần preload khác (logo nền, counter, tagline, các lớp ảnh khác) mờ đi.
- Trên nền hero: nav header tối giản (logo mark WIS trắng bên trái, vài link + không rối), eyebrow nhỏ, headline Mirage rất lớn (center), CTA, và một scroll cue ở đáy.
- Veil gradient tối nhẹ để chữ nổi trên ảnh (đậm ở đỉnh cho nav và ở đáy, giữa vừa phải).
- Full màn, desktop-led.

### Hiệu ứng và tương tác
- Ảnh cuối phóng mở giữ độ nét (kỹ thuật: ảnh hero full-bleed cố định, khung ảnh nhỏ giãn ra để lộ, không upscale ảnh nhỏ), khoảng 1,1 giây.
- Hero content reveal có nhịp: nav, eyebrow, headline (Mirage rise/mask), CTA, cue.
- prefers-reduced-motion: vào thẳng hero, không phóng.

### Tài sản
- Ảnh hero: assets/preload/hero_ninhbinh.jpg (Catherine & Johnny, Ninh Binh, 1365x2048, hi-res để phóng full-bleed không vỡ). Đây là ảnh tạm.
- Logo mark trắng, fonts Mirage/SweetSans.
- [WIS cần cấp]: ảnh hero chính thức (ưu tiên một ảnh mạnh, có thể là landscape), và chốt các mục nav.

### Điều cần tránh
- Không subtitle dưới headline.
- Ảnh không được vỡ/nhòe khi phóng full-bleed.
- Chữ không được chìm vào vùng sáng của ảnh (bắt buộc có veil).
- Nav không được rối hoặc nhiều chữ.

### Tiêu chí duyệt
- Ảnh cuối mở ra mượt, nét, liền mạch từ preload.
- Headline nổi bật, điện ảnh, đọc rõ trên ảnh.
- Full màn trên FHD, không co cụm.
- Reduced-motion vẫn vào hero gọn gàng.
