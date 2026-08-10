## Cultural Perspective (Khối 5 - Góc nhìn Việt Nam), sau Featured Works

### Trạng thái
- Nội dung: doc 27 Khối 5 (nguyên văn). Chi tiết cảm quan + ảnh cần WIS duyệt lại đúng case.
- Trình diễn: Full-bleed đắm chìm (user chọn). Vòng 1.
- Demo HTML: 05_Cultural_Perspective.html.
- Quyết định tiếp theo: user duyệt Chốt / Chỉnh / Đổi hướng.

### Mục tiêu
Giải thích chiều sâu riêng của WIS SAU khi khách đã thấy tác phẩm. Việt Nam đi vào công việc qua cái nhìn/nghe/chạm được. Không tuyên ngôn văn hoá chung chung, không icon, không biểu tượng tách ngữ cảnh.

### Copy (doc 27, nguyên văn)
- Dòng dẫn: A SENSE OF PLACE
- Headline: "Vietnam, in the present tense."
- Đoạn mở: "Vietnam enters the work through what can be seen, heard and held. A colour can carry a memory. A place can set the scale of a day. A welcome can stay with a guest long after the evening ends."
- Field note 01: "A colour can carry a memory." - "For Lily and Antoine, Mai Trung Thu's palette moved from paper to candlelight in a room at The Reverie Saigon."
- Field note 02: "A place has its own weather." - "At 1,600 metres in Sapa, hydrangeas and mountain air set the scale for H and H's ceremony."
- Field note 03: "Welcome can be tasted." - "At Lily and Antoine's welcome table, o mai, banh dau xanh and che lam greeted guests before the evening began."
- CTA: Explore destination weddings
- [WIS duyệt]: chi tiết Mai Trung Thu, Sapa, o mai/banh dau xanh/che lam và bộ ảnh phải đúng case. Tên case sẽ đồng bộ với Featured Works (C+J, K+M, P+L) nếu WIS chốt.

### Cách trình diễn (full-bleed đắm chìm)
- Mở đầu: một panel statement (dòng dẫn + headline lớn + đoạn mở) trên nền ink, reveal khi cuộn.
- 3 field note: mỗi note là một khung ẢNH FULL MÀN (100vh), có lớp phủ tối nhẹ ở đáy cho dễ đọc; chữ (số 01-03 + câu lớn + đoạn) đè lên ảnh, canh dưới-trái. Hiện lần lượt khi cuộn tới: chữ fade-up, ảnh zoom-out nhẹ (scale 1.12 -> 1).
- Cuối: CTA "Explore destination weddings".
- Nền warm-dark, Mirage (statement + câu note) + SweetSans (dòng dẫn/đoạn/CTA).

### Hiệu ứng
- Statement: reveal fade-up khi cuộn vào.
- Mỗi note: ảnh scale 1.12 -> 1 + chữ fade-up khi vào khung (IntersectionObserver). Lớp phủ tối gradient đáy.
- prefers-reduced-motion: hiện thẳng, bỏ scale.

### Tài sản
- 3 ảnh full-bleed (tạm placeholder ảnh case thật; WIS cấp ảnh đúng chi tiết cảm quan từng note).

### Điều cần tránh
- Không icon, không biểu tượng văn hoá trang trí tách ngữ cảnh, không ảnh stock.
- Chữ luôn đọc được trên ảnh (lớp phủ + text-shadow nếu cần).
- Không lạm dụng hiệu ứng; giữ chậm, sang.

### Tiêu chí duyệt
- Ảnh full màn gây ấn tượng, chữ đọc rõ, nhịp cuộn chậm-sang.
- 3 note hiện lần lượt mượt, full trên FHD.
