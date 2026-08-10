## Philosophy

### Trạng thái: ĐÃ CHỐT (2026-08-06)
- Nội dung, trình diễn, hiệu ứng: chốt.
- Bản chuẩn HTML: Demo_TrangChu/02_Philosophy.html (standalone) và đã ghép vào Demo_TrangChu/Homepage.html.
- Figma: frame Philosophy đã thêm vào page Homepage (file WIS - Homepage UI), trạng thái engaged (câu lớn + đoạn mở + note 01) làm bản tham chiếu; tương tác note thay-tại-chỗ chỉ có ở HTML.

### Bản chốt tạm (2026-08-06)
- Kiểu pinned scroll, section cao 280vh (quãng cuộn giữa các số đã rút ngắn). Ban đầu chỉ câu lớn rồi đoạn mở hiện lần lượt (gõ-fade blur) khi section ghim đúng đỉnh viewport; cuộn thêm thì câu lớn + đoạn mở khoá lên đỉnh, phần note bắt đầu.
- Câu lớn: chữ thường (không caplock) căn giữa, Mirage ~111px (5.78vw), letter-spacing 0, một dòng full ngang, "time." tô vàng.
- Đoạn mở: Mirage ~40px (2.08vw), căn giữa, rộng 10 cột (~1503px).
- Ba note: số 01/02/03 ~200px (10.42vw), fill gradient vàng tan vào nền, **TRÔI LÊN theo cuộn (translateY) và fade in/out theo scroll** (không đứng im). Label (SweetSans, vàng) + câu (SweetSans body ~19px, rộng ~10 cột) chỉ hiện gõ-fade **ngay sau khi số lên đúng vị trí và rõ 100%** (ngưỡng local>=0.42). Ba chấm chỉ thị bên phải.
- Text box bám lưới 12 cột (tầm frame trang): câu lớn full 12 cột, đoạn mở 10 cột, text note rộng; số căn giữa.
- Font: Mirage + SweetSans qua @font-face (HTML). Figma: frame Philosophy trong page Homepage, đã snap cột, dùng text style Title/Statement, Serif/Large, Label/Note, Body/Note (font thay thế Playfair/Jost, đổi sang Mirage/SweetSans trên Figma Desktop).
- Trạng thái: TẠM CHỐT, còn có thể tinh chỉnh (cỡ chữ, quãng cuộn, nhịp số).

### Mục tiêu
Cho khách thấy WIS nhìn và bắt đầu công việc thế nào: bắt đầu từ thời gian, không từ moodboard. Một section chữ full màn, chữ to, đọc như một tuyên ngôn editorial.

### Copy (doc 27, nguyên văn)
- Câu lớn: THE FIRST THING / WE MAKE / IS TIME.
- Đoạn mở: "Before the room, before the guest list, before the first sketch, there is time. Time to speak plainly, to notice what keeps returning, and to stay with a thought until it begins to open."
- Studio note 01 - THE FIRST CONVERSATION: "We begin without a ready answer. A place, a song, a family custom or a colour can be enough to open the room."
- Studio note 02 - WHAT RETURNS: "The important thing is often the thing that returns: a memory, a gesture, a certain way of gathering people together."
- Studio note 03 - THE FORM: "Then the work finds its form. Planning, styling and the rhythm of the day begin to hold the same idea."
- CTA: Read our approach

### Cách trình diễn (dàn trang lệch)
- Full màn, nền ink. Câu lớn Mirage khổ rất lớn (uppercase) chiếm chủ đạo, neo lệch trái.
- Đoạn mở đặt ở cột phải, hẹp.
- Ba studio note ở hàng dưới, đánh số 01/02/03 kiểu marginalia (label + body).
- CTA "Read our approach" ở góc dưới.
- Nhãn section nhỏ ở mép (vd "02 - The Method").
- Bố cục lệch có chủ đích, phá lưới, nhưng vẫn tối giản (chỉ chữ, không icon, không minh hoạ).

### Hiệu ứng
- Reveal khi cuộn vào: từng chữ hiện dần theo thứ tự đọc (câu lớn trước, rồi đoạn mở, rồi 3 note, rồi CTA), mỗi chữ fade + blur tan nhẹ, nhịp như gõ máy nhưng mềm (không con trỏ nhấp nháy cứng).
- Câu lớn nhịp chậm hơn (per-word ~80ms), phần body nhanh hơn (~22ms).
- prefers-reduced-motion: hiện thẳng.

### Tài sản
- Chỉ chữ. Font Mirage (title) + SweetSans (body/label) qua @font-face.

### Điều cần tránh
- Không icon, không hình minh hoạ, không ảnh.
- Chữ không tràn/vỡ trên màn lớn.
- Reveal không quá dài lê thê; giữ tổng thời gian gọn.

### Tiêu chí duyệt
- Chữ to gây ấn tượng, bố cục lệch có gu.
- Reveal gõ-fade mượt, nhẹ nhàng, đúng tinh thần "time".
- Full màn trên FHD, không co cụm.
