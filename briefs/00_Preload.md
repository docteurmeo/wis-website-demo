## Preload (intro loader)

### Trạng thái: ĐÃ CHỐT (2026-08-06)
- Nội dung: chốt.
- Trình diễn: chốt.
- Hiệu ứng: chốt.
- Demo HTML (bản chuẩn): Demo_TrangChu/00_Preload.html
- Còn treo (không chặn): câu tagline chữ nhỏ ở đáy đang để placeholder "Premium Wedding Planner in Vietnam", chờ WIS cấp câu chính xác trên logo rồi thay 1 dòng.

### Bản chốt (khoá lại để section sau kế thừa)
- Nền warm-dark #160F08. Overlay full màn, có overflow:hidden để không lòi khi kéo lên.
- Logo nền: dùng bản mark không tagline Demo_TrangChu/assets/wis_logo_mark.svg (tách từ BI WIS_Logo.svg, viewBox cắt bỏ dòng tagline). Render bằng thẻ img + filter brightness(0) invert(1) để tô trắng. Center cả hai chiều (top:50% left:50% translate(-50%,-50%)). width clamp(506px,79vw,1144px). opacity .16.
- Thẻ ảnh: center, tỷ lệ 2/3, deck 10 lớp ảnh cưới thật, mỗi ảnh phóng to bung ra từ giữa (scale .08 -> 1) rồi ảnh sau đè lên. Nằm trên logo (z cao hơn).
- Counter [000] -> [100] mono SweetSans + vạch tiến trình vàng, chạy khoảng 3,2 giây. Xong giữ 1 nhịp rồi overlay kéo lên (translateY -101%) lộ Hero.
- Font: title Mirage, body SweetSans (fonts.css dùng chung).
- Có nút Xem lại, có xử lý prefers-reduced-motion.
- Ảnh thật: assets/preload/p1..p5 (David&Thuy, SNP, Catherine&Johnny, KM, VDN).

### Mục tiêu
Khoảnh khắc đầu tiên trước khi vào trang chủ. Trong lúc trang tải, người xem thấy ngay đây là một studio làm cưới cao cấp qua chính ảnh cưới thật, không phải một spinner vô hồn. Kết thúc bằng logo WIS rồi mở màn vào Hero.

### Reference
- https://k95.it/en - cơ chế preload gốc: overlay full màn, ở giữa là một chồng ảnh chân dung xếp lớp (boot-loader__stack, ảnh tỷ lệ dọc ~368x500), lật/deal qua từng ảnh như lật một cỗ bài, kèm bộ đếm phần trăm dạng ngoặc "[0]". Xong thì overlay biến mất để lộ site.
- Học: cơ chế deck ảnh lật + counter phần trăm + màn phủ rồi mở. Không học: nền trắng của k95 (đổi sang warm-dark để hợp brand và vì logo WIS là bản trắng).

### Cách trình diễn
- Overlay full-bleed, nền warm-dark (brand). Không cột giữa hẹp.
- Giữa màn: một thẻ ảnh chân dung (tỷ lệ 2/3) lật qua loạt ảnh cưới thật của WIS như deal bài.
- Logo WIS (bản trắng) đặt trên đầu, nhỏ, giữ suốt quá trình như letterhead.
- Bộ đếm phần trăm dạng editorial "[000]" tới "[100]" ở dưới, kèm một vạch tiến trình mảnh màu vàng.
- Khi đạt 100%: giữ một nhịp ngắn, thẻ ảnh cuối đứng lại, rồi cả overlay kéo lên (curtain up) lộ Hero bên dưới.

### Tài sản (đã có, ảnh thật)
- Logo: assets/preload/wis_logo.svg (bản trắng, có tagline).
- Ảnh chân dung thật 5 dự án: p1_davidthuy, p2_snp, p3_catherine, p4_km, p5_vdn (assets/preload/), tỷ lệ ~683x1024.
- Hero lộ ra sau preload: tạm là placeholder tối với headline "We craft glory stories." (Hero là section riêng, chưa dựng thật).

### Hiệu ứng và tương tác
- Counter 0 tới 100 trong khoảng 3 tới 3,5 giây.
- Ảnh lật đều theo tiến trình (khoảng 8 tới 10 lần lật, cycle qua 5 ảnh), mỗi lần một nhịp nhẹ (scale/opacity/hơi nghiêng như ảnh xếp chồng), không hard-cut thô.
- Kết thúc: overlay translateY lên trên, ease mượt, khoảng 0,9 giây.
- Có nút chạy lại để duyệt nhiều lần. Tôn trọng prefers-reduced-motion (bỏ lật, hiện thẳng logo rồi mở).

### Điều cần tránh
- Không spinner, không phần trăm khô kiểu app.
- Không nền trắng, không icon, không chữ thừa ngoài logo và counter.
- Không để preload quá dài (tối đa ~3,5 giây), không loop vô tận.
- Không dùng ảnh stock, chỉ ảnh thật WIS.

### Tiêu chí duyệt
- Trong 1 giây đầu đã thấy ảnh cưới thật và cảm được đây là studio cưới cao cấp.
- Nhịp lật và counter khớp nhau, mượt, không giật.
- Logo WIS rõ, kết thúc gọn, mở vào Hero liền mạch.
- Full màn hình trên FHD, không co cụm.
