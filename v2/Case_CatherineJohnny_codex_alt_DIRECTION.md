# Catherine & Johnny — Design direction: “The Folio”

## Luận điểm

Trang này không kể một đám cưới bằng những “chương” lặp lại. Nó được dựng như một **editorial folio**: một chuỗi trang có nhịp đọc rõ, giữ người xem lại với bằng chứng cụ thể của Catherine và Johnny — một order trà sữa, chuyến thuyền vào Aravinda, khoảnh khắc im tiếng của con sông, hình xăm tạm và ớt.

Đây là cách trực tiếp đưa pillar **Glory Story** vào trang: khởi đầu từ một chi tiết đời thật, rồi chỉ mở rộng bằng các dữ kiện đã xác nhận. Không có backstory mới, không có mỹ từ để thay thế cho sự thật.

## Hệ trình bày

- Toàn bộ desktop dùng một lưới 12 cột; margin, gutter, cột đọc (`--reading: 34rem`), thước chữ và đường rule là token ở đầu file. Không có mỗi section một hệ `clamp()` tùy hứng.
- Type scale có bốn cấp cố định: label 10px, copy 16px/1.82, lead 30px, display 76px. Ở mobile, chúng giảm đồng loạt qua một breakpoint thay vì đổi từng khối.
- Hình không được dùng như “feature card”. Chúng là nhịp ngắt của văn bản: cover, bằng chứng portrait, một dải sông ngang, một portrait của nghi lễ, rồi contact sheet cuối trang.
- Credits là một ledger có hàng ngang và quan hệ label/value, không phải bảng 6 ô. Đây là thông tin cần đọc, không phải trang trí.

## Nó giải feedback như thế nào

- **Ít hiệu ứng, dễ dừng đọc:** chỉ một reveal nhẹ cho mỗi khối lớn, không sticky, không scale ảnh, không slideshow hay animation cho từng ảnh.
- **Nhiều chữ thật:** mỗi cột đọc giữ 31–34rem, line-height 1.82, độ tương phản đủ cao trên nền tối. Tất cả copy là các sự kiện trong nguồn đã xác nhận.
- **Clean, modern, fashion:** sự tự tin đến từ cover split-grid, khoảng trống có chủ đích, rule và canh cột nhất quán; không đến từ pattern hình học hoặc font “luxury” quen thuộc.
- **Handcrafted có tiết chế:** Imperfetto Three chỉ xuất hiện một lần ở frontispiece/ceremony, như một nét ghi chú, không biến thành font chữ chạy.

## Phạm vi

File dựng: `Case_CatherineJohnny_codex_alt.html`. Bản deploy và hai bản thử bị chê không bị chỉnh sửa.
