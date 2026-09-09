# CASE DETAIL — WIREFRAME NỘI DUNG TRƯỚC KHI CODE (Catherine & Johnny)
*Theo đúng "Bước tiếp theo" đã ghi trong `00_Project_Log.md` (mục CODEX, 2026-09-07): bắt đầu bằng wireframe content-first (ảnh thật + text theo scene) trước khi dựng UI — không vá tiếp `Case_CatherineJohnny_template_codex.html` hay `_wis_rebuild.html`.*

---

## 1 · CHẨN ĐOÁN: 4 LẦN THỬ ĐỀU SAI CÙNG 1 LỖI, KHÔNG PHẢI 4 LỖI KHÁC NHAU

| Lần thử | Ai | Vấn đề bị chê |
|---|---|---|
| `Case_CatherineJohnny_redesign_draft.html` | Claude | Lưới 3 ảnh đều — generic |
| `Case_CatherineJohnny_redesign_v2.html` | Claude | Layout khác nhau mỗi khối để "cho khác" — lối mòn, non tay |
| `Case_CatherineJohnny_v3.html` (đúng khung `Research/39`) | Claude | Chưa có feedback trực tiếp, nhưng cùng cấu trúc "1 anchor + 1-2 support/beat, cách nhau nhiều khoảng thở vh" |
| `Case_CatherineJohnny_template_codex.html` | Codex | **"formal, hẻo, chưa có ý đồ rõ"** |
| `Case_CatherineJohnny_wis_rebuild.html` | Codex | Bê nguyên flow Homepage → trang dài 13.4k px dù nhiều ảnh; nén còn 6.45k px |

**Cả 3 bản gần nhất (v3 của tôi + 2 bản Codex) đều đúng về NGUYÊN TẮC** (không lưới đều, không bịa nội dung, dùng đúng token/motion trang chủ) — nhưng đều sai ở **MẬT ĐỘ**. Nguyên nhân gốc: tất cả đều lấy nhịp thở của **Homepage** (1 ý/section, nhiều khoảng trắng `vh`, 1-2 ảnh/section) làm chuẩn — nhưng Homepage là trang **tóm tắt/tuyên ngôn** (khách đọc lướt để nắm gu), còn Case Detail là trang **kể chuyện bằng ảnh thật của 1 sự kiện đã xảy ra** — khách đến đây để THẨM ĐỊNH khối lượng bằng chứng, không phải đọc 1 tuyên ngôn ngắn. Ít ảnh + nhiều khoảng thở = đúng tinh thần Homepage nhưng đọc thành "hẻo, formal" trên trang case.

**Đây KHÔNG phải lỗi cấu trúc narrative** (7 module của `Research/39` vẫn đúng — Opening Frame / Reason Beats / Decisive Frame / Closing / Credit Ledger / Full Gallery không đổi). **Đây là lỗi thiếu 1 quy tắc MẬT ĐỘ** mà doc 39 chưa nói rõ. Bổ sung ngay dưới đây, trước khi dựng lại.

---

## 2 · QUY TẮC MẬT ĐỘ MỚI (bổ sung cho `Research/39` Mục 5 — Visual System)

> **Mỗi Reason Beat là 1 "scene" đặc — không phải 1 section thưa.** Trong CÙNG MỘT bố cục liền mạch: 1 khối chữ (statement + body) + 1 ảnh neo (anchor, lớn nhất) + **3-4 ảnh bằng chứng** (evidence, không phải 1-2 như bản v3/Codex vừa thử) xếp cùng lúc, không tách thành nhiều section con cách nhau bởi khoảng trắng lớn. Cả case chỉ nên có **4 scene** (không phải 3 hoặc 5-6) — đủ đặc để không "hẻo", đủ ít để không thành lưới ảnh vô luận điểm.
>
> **Mượn từ Homepage: CHỈ** dark tone, token màu/font, chrome header/footer/menu, kỷ luật `--page-margin`/`--reading`, 2 easing đã chốt. **KHÔNG mượn:** nhịp lên-xuống 1-ảnh-1-thở của Hero/Approach/Testimonial như một component để copy nguyên khối sang Case.
>
> **Vẫn giữ nguyên các cấm đã chốt:** không lưới đều 3 cột, không mỗi scene "cố tình khác nhau" để trông đa dạng (khác biệt phải đến từ SỐ ẢNH THẬT khác nhau mỗi scene, không phải chọn bố cục ngẫu hứng), không hiệu ứng riêng từng ảnh, không collage/paper/sticker/rotation (visual language không thuộc hệ UI WIS).

---

## 3 · WIREFRAME 4 SCENE — PHÂN BỔ ẢNH THẬT + TEXT (chưa code, chỉ phân bổ nội dung)

*20 ảnh local hiện có: `cj_hero, cj_s1-4, cj_g1-7, cj_x1-8`. Phân bổ dưới đây dùng 17/20 ảnh vào 4 scene — 3 ảnh còn dư (`g5, x2, x8`) DƯỚI ngưỡng 8 ảnh của Full Gallery (`Research/39` Mục 4.3, rule 6) → **Full Gallery KHÔNG tồn tại ở bản này**, không cố lấp cho đủ. Đây là hệ quả đúng của quy tắc, không phải thiếu sót.*

### Scene 1 — Khởi nguồn (Reason Beat I)
- **Text:** statement "The same order, every visit, became the beginning of everything." + đoạn FIG.01 thật (Johnny thành khách quen ở quán trà sữa...).
- **Anchor:** `cj_s4` (lớn nhất, chiếm ~55-60% chiều rộng composition).
- **Evidence (3 ảnh, nhỏ hơn, xếp cạnh/dưới anchor trong cùng 1 khối):** `cj_x1`, `cj_g6`, `cj_s1`.
- **Lý do chọn ảnh này:** đây là 4 ảnh có tông intimate/portrait nhất trong kho — dùng để gợi "sự bắt đầu, sự ấm áp" dù không phải ảnh chụp tại quán trà sữa (đúng thực tế: planner không có ảnh từ trước ngày cưới — text mang chi tiết khởi nguồn, ảnh mang đúng cảm giác của scene, không diễn lại y hệt sự kiện).

### Scene 2 — Con đường tới đó (Reason Beat II)
- **Text:** statement "They chose a venue reachable only by boat..." + 2 đoạn thật (chọn Ninh Bình + hành trình bằng thuyền) + câu tín hiệu năng lực vận hành (đã đánh dấu [WIS xác nhận] ở bản v3).
- **Anchor:** `cj_s2` (ảnh venue/thuyền rộng nhất).
- **Evidence (3 ảnh):** `cj_s3`, `cj_g7`, `cj_x6`.
- **Lý do:** đây là scene có material hình ảnh dồi dào nhất (venue + di chuyển bằng thuyền) — xứng đáng là scene "rộng" nhất trong 4 scene, đúng tinh thần để SỐ ẢNH THẬT quyết định độ lớn, không phải chọn ngẫu hứng.

### Scene 3 — Khoảnh khắc (Decisive Frame, vẫn là "1 cử chỉ quyết đoán" nhưng không cô đơn)
- **Text:** "Then, slowly, Catherine appeared — like a queen butterfly emerging into her garden."
- **Anchor:** `cj_x7` (full-bleed hoặc gần full-bleed, đây vẫn là khung ảnh LỚN NHẤT toàn trang — giữ đúng vai trò cao trào).
- **Evidence (2 ảnh, nhỏ, đặt flanking hai bên hoặc dưới, KHÔNG cạnh tranh với anchor):** `cj_g1`, `cj_g2`.
- **Lý do:** bản v3 trước để Decisive Frame đứng 1 mình hoàn toàn — đúng nguyên tắc "0-1 lần/case, tĩnh" nhưng lại là chỗ góp phần vào cảm giác "hẻo" vì đứng cô lập quá lâu giữa 2 scene đặc. Thêm 2 ảnh bối cảnh nhỏ giữ nhịp đặc xuyên suốt mà không làm mất vai trò cao trào của ảnh chính (tỉ lệ kích thước vẫn chênh lệch rõ).

### Scene 4 — Chỉ họ mới có (Reason Beat III)
- **Text:** statement "Two details only the two of them would think to add." + 2 đoạn thật (xăm hình + đồ cay).
- **Anchor:** `cj_x3` (ảnh xăm hình).
- **Evidence (4 ảnh — scene đặc nhất, đúng vì đây là nơi có nhiều chi tiết cụ thể nhất cần "bằng chứng"):** `cj_x4`, `cj_x5`, `cj_g3`, `cj_g4`.

### Sau Scene 4 → Closing (1 dòng, không ảnh mới) → Credit Ledger → *(không Full Gallery)* → Related/CTA/Footer.

---

## 4 · ẢNH CÒN DƯ (không dùng, không ép vào)
`cj_g5`, `cj_x2`, `cj_x8` — không đủ 8 để mở Full Gallery, không đủ chất liệu narrative riêng để thành scene thứ 5. Giữ lại, không xoá — có thể dùng nếu 1 scene nào đó cần thay ảnh yếu hơn, hoặc nếu sau này WIS cấp thêm context khiến 1 trong 3 ảnh này gắn được vào 1 lý do cụ thể.

---

## 5 · BƯỚC TIẾP THEO (đề xuất, tránh lặp lỗi "code cả trang rồi mới biết sai")

Thay vì dựng nguyên trang rồi mới xin feedback (đã sai 5 lần liên tiếp theo cách này), dựng **thử đúng 1 scene** (đề xuất Scene 2 — nhiều ảnh nhất, dễ thấy rõ nhất sự khác biệt về mật độ so với bản v3/Codex cũ) làm mẫu, xác nhận đúng "độ đặc" mong muốn trước khi làm nốt 3 scene còn lại + Closing/Credits theo đúng khuôn đã duyệt ở scene mẫu.
