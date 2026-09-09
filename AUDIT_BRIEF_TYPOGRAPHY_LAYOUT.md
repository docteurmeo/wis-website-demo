# WIS Homepage · ĐỀ BÀI AUDIT ĐỘC LẬP — Bố cục chữ (Typography/Layout)

*Tài liệu tự-đủ-ngữ-cảnh để giao cho Codex đóng vai **auditor độc lập**. Không phải brief "làm theo hướng này" — ngược lại: đọc kỹ lịch sử, tự đánh giá, và đề xuất một hướng RIÊNG để đối chứng với hướng Claude đã làm. Cập nhật: 2026-09-04.*

---

## 0 · VAI TRÒ CỦA MÀY (Codex) TRONG VIỆC NÀY

Claude (AI khác) đã làm việc trực tiếp với khách qua nhiều vòng chỉnh sửa Homepage, có hội đồng persona (Kai/Thu Vy/Long) hỗ trợ. Kết quả mới nhất khách nhận xét: **"có tốt hơn nhưng vẫn ngây ngô lắm."** Sau nhiều vòng brainstorm mà vẫn chưa đạt, khách muốn một **góc nhìn hoàn toàn độc lập** — không phải Codex đọc code Claude rồi khen/chê/sửa nhẹ, mà là:

1. **Audit thật kỹ, deep-dive, tỉ mỉ** — đọc toàn bộ file thật (`Demo_TrangChu/v2/Homepage.html`), tự mình chỉ ra CHÍNH XÁC vì sao bố cục hiện tại (dù đã qua nhiều vòng sửa) vẫn có thể đọc là "ngây ngô"/an toàn/thiếu chiều sâu thiết kế — đừng nhận định chung chung, chỉ đúng dòng CSS/vùng bố cục cụ thể.
2. **Đề xuất một hướng cải tiến RIÊNG, độc lập** — không phải tinh chỉnh thêm hướng Claude đã làm, mà tự nghĩ từ đầu như thể mày chưa từng thấy bản hiện tại. Khách sẽ đặt 2 hướng cạnh nhau để so sánh và chọn.
3. Không cần code luôn (dù có thể) — quan trọng nhất là **tư duy/luận điểm thiết kế**, đủ cụ thể để implement sau nếu khách chọn hướng của mày.

---

## 1 · BỐI CẢNH THƯƠNG HIỆU (bắt buộc đọc trước)

**Wed In Style (WIS)** — wedding planner luxury/destination wedding tại Việt Nam. Website đang redesign Homepage, bản demo local (`Demo_TrangChu/v2/Homepage.html`), chưa public.

### Bước ngoặt định vị (khách nói trực tiếp, nguyên văn)

> "Tao đã gặp và nói chuyện trực tiếp với WIS. Tao đã thuyết phục rằng tinh thần cao cấp không cần dùng tiêu chuẩn cao cấp của mass (cách dùng font, layout,...) Mà cao cấp sẽ thể hiện qua triết lý riêng mạnh và rõ nét như 1 người nghệ sĩ có gu riêng. Và chúng ta sẽ lấy tinh thần craft, tận tâm, có chiều sâu,... để thể hiện WIS."

**Đây là kim chỉ nam duy nhất — không phải "làm đẹp hơn" mà là "đọc ra gu tác giả rõ rệt, không lẫn với site luxury phổ thông nào khác."**

---

## 2 · TIMELINE COMMENT KHÁCH (nguyên văn, theo thứ tự thời gian — đọc để hiểu ĐÃ THỬ GÌ VÀ BỊ CHÊ VÌ SAO)

### Vòng 1 — yêu cầu ban đầu cho Homepage (sau buổi gặp khách)
> "Font chữ. Không cần phải theo tiêu chuẩn luxury mass bằng các font chữ có chân thanh đậm kiểu truyền thống nữa. Cần dùng các font chữ có tính cách khác biệt hơn (cho Headline). Ưu tiên bộ trong Google font để tiện dụng và đa ngôn ngữ."
> "1 số dấu hiệu craft thông qua nét vẽ tay hoặc 1 số illustration nhỏ tinh tế, random được popup ở 1 vài nơi phù hợp hoặc bổ trợ cho chữ... nét vẽ phải giống như refs [font Imperfetto Scribble khách cấp]... muốn dùng code để nhẹ hơn và có thể appear dần theo đường nét vẽ."
> "Output hiện tại tạo cảm giác hơi to và choán hết màn hình, khách muốn cảm giác nhỏ hơn và gọn gàng hơn ở giữa."
> "Cảm giác nghệ cũng cần copy nhiều hơn, tao muốn có sự xuất hiện của 1 số đoạn văn dài (nhưng dùng font nhỏ để không choán quá..."
> "Tiết chế hiệu ứng hoặc chỉ dùng tinh tế, hoặc chỉ dùng những hiệu ứng nào liên quan đến tinh thần craft."

**Claude làm:** đổi font headline → Fraunces (serif variable, trục WONK). Font tay → Mea Culpa (Google Fonts). Hero thu nhỏ, hạ scale toàn trang ~40-50%.

### Vòng 2 — chê thẳng, liệt kê từng lỗi
> "Tao vẫn thấy đéo khác gì thậm chí còn xấu hơn."
> "Font headline giờ vẫn đang là font theo kiểu cao cấp mass. Đổi khác cho đương đại và hiện đại hơn."
> "Font viết tay của mày vẫn xấu... tao cần sự xuất hiện của các chữ viết tay lớn và ấn tượng hơn."
> "Bố cục Hero giờ tầm thường quá > tao đề xuất có đoạn văn riêng cho từng ảnh để gia tăng tính kể chuyện, đề xuất sử dụng font chữ nghệ thuật vào."
> "Approach giờ cồng kềnh quá > đề xuất reset và làm mới hoàn toàn theo triết lý mới."
> "Phần case vẫn bị cảm giác to đùng đoàng và rộng toàn màn hình, Đã nói là khách đéo thích như thế rồi mà?"
> "Testimonial giờ buồn vãi lồn, reset và tiếp cận mới."

**Claude làm:** font headline → Bricolage Grotesque (sans variable). Font tay → Imperfetto Two (từ bộ font khách tự cấp, chọn qua so sánh trực quan cả 7 biến thể). Hero: thêm đoạn văn dài riêng theo từng ảnh nền. Approach: reset bỏ scroll-jack phức tạp, dựng tĩnh 3 ý. Featured Works: giảm mạnh kích thước ảnh/khoảng cách dọc. Testimonial: reset bỏ layout cũ, dựng 2 cột tên-lớn/quote.

### Vòng 3 — vẫn chê layout + đòi illustration thật
> "Các cụm chữ trên hero tao thấy rải rác và đéo đẹp, đéo có chủ đích layout, ý tao mỗi ảnh phải là 1 đoạn văn dài chứ đéo phải là mỗi 1 đoạn chữ ngắn. Thảo luận nhóm để giải quyết layout chữ trên hero nghệ thuật hơn và tốt hơn đi."
> "Approach giờ nhìn tầm thường vãi. Phần này nhiều chữ nên tao nghĩ đây là cơ hội tốt cho illustration, có hình minh họa vẽ tay cho từng ý."
> "Nói chung tao chưa thấy sức mạnh của concept vì thiếu các hình vẽ và các dấu hiệu craft."

**Claude làm:** hợp nhất Hero thành 1 cột (kicker→headline tĩnh→rule/index→đoạn dài crossfade, timer riêng tách khỏi nhịp đổi ảnh). Dựng pipeline order-render AI cho illustration (không tự vẽ code SVG — bị chê "cứng, giả" ở vòng trước đó). 3 illustration đầu cho Approach.

### Vòng 4 — illustration bị chê nhiều lớp liên tiếp
> "Nét bút quá nhòe và tham chi tiết. Cách vẽ không đủ phóng khoáng, bị giống tả thật. Tao cần bút pháp phóng khoáng dạng kí họa hơn. Tham khảo nét bút của các kí tự hình minh họa trong font này [Imperfetto Seven] để hiểu hơn về DNA bút pháp." (Nguyên nhân: brief cũ đẩy AI vẽ kiểu bút chì có shading/tả khối.)
> Render lại lần 2: "như cứt, vẽ như trẻ con vẽ. Không có cảm giác phóng khoáng, kí họa tốc độ cao." (Nguyên nhân: outline khép kín mượt như vector, giống icon/coloring-book — không phải gesture sketch.)
> Render lại lần 3 (kỹ thuật continuous-line kiểu Matisse): **"bút pháp tốt hơn rồi đấy"** — duyệt bút pháp.
> Nhưng: "chủ đề hình vẽ nhàm chán và thiếu cảm hứng" (điện thoại/vỏ ốc/compa — đồ vật generic, "ai cũng dùng được, không có gì là WIS").
> → Đổi chủ đề sang đồ vật gắn văn hoá cưới Việt cụ thể hơn: tách trà bốc hơi, con sóng cuộn (khớp DNA biển của WIS), cuộn thước dây thợ may (khớp "bespoke/may đo"), bút lông thư pháp, bút mực viết dở — khách duyệt.
> "các hình vẽ bị nhỏ quá nên ko rõ concept, bố cục cần phải tôn vinh các hình vẽ lên" → phóng to 2.5-3 lần + sửa tỉ lệ khung khớp ảnh gốc.
> ("Làm đéo gì có hình???" hoá ra là bug thật: CSS `mask-image` bị Chrome chặn CORS khi mở qua `file://` — phải xem qua HTTP server local, không phải double-click file.)

### Vòng 5 — đòi phá cấu trúc, không phải tinh chỉnh
> "Tao chỉ thấy bố cục chữ vẫn đang khá nhàm chán và basic (chữ ở hero, aproach, testimonial). Mày không có cách nào thoát khỏi lối mòn trình bày này để làm cho mới mẻ hơn được à?"

**Claude làm:** triệu hồi Kai (persona design) với brief "phá cấu trúc, không phải tinh chỉnh cấu trúc", cấm trả lời chung chung, yêu cầu tham chiếu thiết kế thật cụ thể. Kai đề xuất + Claude implement:
- **Hero:** bỏ "1 khối chữ góc dưới-trái" → 4 điểm neo tách biệt (eyebrow chạy dọc mép trái kiểu gáy tạp chí `writing-mode:vertical-rl`, đoạn văn dài co thành caption mảnh áp mép trên, index góc trên-phải, headline khổng lồ áp mép dưới dùng `text-stroke`). Tham chiếu Kai đưa: Cereal/Kinfolk magazine spine text, Jacquemus.com hero.
- **Approach:** bỏ lưới 3-cột-đều (SaaS feature-grid) → 3 hàng full-width lệch trục luân phiên (trái/phải-canh-phải/trái-thụt-sâu), ghost-numeral (số phóng to mờ xuyên nền). Tham chiếu: Irma Boom (canh lề lệch), Bureau/OK-RM (ghost numeral manifesto). Giữ nguyên 3 illustration đã duyệt.
- **Testimonial:** bỏ 2-cột tên/quote song song → "lá thư viết tay" (quote chủ đạo có drop-cap tay, tên lùi xuống làm chữ ký góc dưới-phải, nav lùi góc dưới-trái kiểu lật trang sổ).

### Vòng 6 — VẪN CHƯA ĐẠT (hiện tại)
> **"Lượt chỉnh sửa vừa rồi có tốt hơn nhưng đối với tao vẫn ngây ngô lắm."**

Đây là điểm dừng — sau ~6 vòng brainstorm + hội đồng persona + tham chiếu thiết kế thật, kết quả vẫn bị đánh giá "ngây ngô". Khách quyết định cần góc nhìn độc lập thứ hai (mày) thay vì tiếp tục vòng lặp brainstorm-cùng-một-nguồn.

---

## 3 · NHẬN ĐỊNH CỦA NGƯỜI LÀM VIỆC TRỰC TIẾP VỚI KHÁCH (không phải của Claude)

- Khách **không đánh giá theo tiêu chí kỹ thuật** (đúng/sai code, đúng/sai bút pháp đã duyệt) mà theo **cảm giác tổng thể khi nhìn vào** — mỗi vòng sửa đúng yêu cầu cụ thể (font, size, bút pháp, chủ đề) đều được xác nhận đạt ở CHI TIẾT đó, nhưng CẢM GIÁC TỔNG THỂ vẫn bị chê tiếp ở lượt sau.
- Nghi vấn cá nhân (người làm việc trực tiếp với khách, chưa kiểm chứng): vấn đề có thể không nằm ở chi tiết (font/màu/kích thước/bút pháp) mà ở **CẤU TRÚC TỔNG THỂ / NHỊP ĐIỆU TOÀN TRANG** — dù từng khối đã đổi bố cục, tổng thể site vẫn có thể đang đọc như "trang landing page chỉnh chu" chứ chưa đọc như "tác phẩm của 1 tác giả có gu" — đây đúng là khoảng cách giữa "áp dụng kỹ thuật thiết kế lạ" và "có một điểm nhìn/triết lý xuyên suốt thực sự khác biệt".
- Khách dùng từ "ngây ngô" (naive/amateurish) — không phải "chưa đẹp" hay "chưa đúng" — đáng để mày cân nhắc: ngây ngô thường đến từ việc **cố gắng trông "nghệ" bằng kỹ thuật bề mặt** (đổi trục canh lề, ghost numeral, spine text...) mà thiếu sự TỰ TIN/TỐI GIẢN THỰC SỰ của một thiết kế đã được nghĩ chín — tức có thể vấn đề là ĐANG LÀM QUÁ NHIỀU THỨ CÙNG LÚC thay vì làm ÍT hơn nhưng dứt khoát hơn.

---

## 4 · TRẠNG THÁI KỸ THUẬT HIỆN TẠI (để không đề xuất trùng/vi phạm)

**File thật:** `Demo_TrangChu/v2/Homepage.html` (~1000 dòng, HTML/CSS/JS thuần, không framework, không build step). Token màu/font: `Demo_TrangChu/assets/tokens.css`.

**Đã CHỐT, không nên đề xuất đổi lại (trừ khi có lý do rất mạnh):**
- Nền đen ấm (`--c-ink`), palette warm-dark — khách chốt từ đầu dự án, không phải phần đang bị chê.
- Font headline: **Bricolage Grotesque** (sans variable, Google Fonts, đã duyệt qua 2 lần đổi).
- Font viết tay: **Imperfetto Two** (từ bộ font khách tự cấp "Imperfetto Scribble", đã duyệt).
- Bút pháp illustration: **continuous-line kiểu Matisse** (1 nét kinh tế, để hở, có run tay, KHÔNG khép kín như icon) — đã duyệt sau 3 lần sửa, đừng đề xuất quay lại pencil-shading hay closed-outline.
- Nội dung 5 illustration đã render + duyệt: tách trà bốc hơi, con sóng cuộn, cuộn thước dây thợ may (Approach ×3), bút lông thư pháp (Cultural Perspective), bút mực viết dở (Contact) — đừng đề xuất đổi Ý TƯỞNG các hình này (có thể đề xuất VỊ TRÍ/CÁCH DÙNG khác nếu có lý do).
- Copy/nội dung text các section (đã duyệt ở brief khác) — đây là audit về TRÌNH BÀY/BỐ CỤC, không phải viết lại nội dung.

**Đang bị đánh giá "ngây ngô" (đây là vùng cần audit):**
- `.hero` / `.hero-lockup` — cấu trúc 4-điểm-neo (spine dọc trái, headline áp mép dưới, caption áp mép trên, index góc phải). CSS dòng ~66-135.
- `.approach` / `.ap-notes` — hàng full-width lệch trục + ghost-numeral. CSS dòng ~128-172.
- `.tm` — "lá thư viết tay" (quote chủ đạo + chữ ký góc). CSS dòng ~308-335 (số dòng có thể lệch nhẹ do các sửa sau).

**Ràng buộc kỹ thuật:** không có build step (không React/Vue/framework), chỉ HTML/CSS/JS thuần load trực tiếp qua `<script>`/`<style>` inline. Có thể dùng CSS Grid/Flexbox/transform/clip-path/mix-blend-mode/scroll-driven animation/SVG — miễn chạy được bằng trình duyệt hiện đại không cần build. Ảnh minh hoạ dùng CSS `mask-image` để nhuộm theo token màu — **lưu ý: kỹ thuật này KHÔNG chạy khi mở qua `file://` (bị Chrome chặn CORS), phải test qua HTTP server local.**

---

## 5 · YÊU CẦU CỤ THỂ CHO CODEX

1. **Đọc trực tiếp** `Demo_TrangChu/v2/Homepage.html` (toàn bộ, không chỉ 3 khối trên — audit cả nhịp điệu tổng thể site nếu thấy liên quan) và `Demo_TrangChu/assets/tokens.css`.
2. **Audit — chỉ ra CHÍNH XÁC** (kèm dòng code/vùng cụ thể): vì sao tổng thể vẫn có thể đọc là "ngây ngô" dù từng chi tiết đã đổi nhiều lần. Đừng lặp lại nhận định đã có ở Mục 3 — đào sâu hơn, tìm góc nhìn mới.
3. **Đề xuất 1 hướng cải tiến ĐỘC LẬP** cho Hero + Approach + Testimonial (và bất kỳ chỗ nào khác thấy cần) — không cần giữ cấu trúc "spine/zigzag/lá thư" hiện tại nếu có lý do tốt hơn để bỏ hẳn. Được phép đề xuất **làm ÍT hơn** (bớt kỹ thuật, không phải thêm kỹ thuật) nếu đó là hướng giải quyết đúng gốc rễ "ngây ngô".
4. Tôn trọng danh sách "đã chốt" ở Mục 4 (font, màu nền, bút pháp/nội dung illustration, copy) — audit và đề xuất về TRÌNH BÀY, không phải thay đổi các quyết định đã duyệt riêng đó.
5. Kết quả: tài liệu markdown tương tự file này — có thể sửa trực tiếp `Demo_TrangChu/v2/Homepage.html` thành bản thử nghiệm riêng (khuyến khích: **đừng ghi đè bản hiện tại** — lưu thành `Demo_TrangChu/v2/Homepage_codex_alt.html` hoặc tương tự, để khách so sánh song song 2 bản qua trình duyệt) kèm giải thích luận điểm thiết kế.

**Không cần hỏi lại trước khi làm.** Đây là audit độc lập — càng ít bị ảnh hưởng bởi hướng đã có, càng có giá trị so sánh.
