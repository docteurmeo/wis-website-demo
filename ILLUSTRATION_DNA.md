# WIS · DNA BÚT PHÁP ILLUSTRATION

> **Quy tắc ưu tiên — 2026-09-07:** Đây là tài liệu art direction hiện hành cho mọi illustration mới của WIS. Trước khi viết prompt, render, chỉnh sửa hoặc thay asset, phải đọc hết tài liệu này và xem các reference ở Mục 2. Nếu tài liệu này mâu thuẫn với `ILLUSTRATION_BRIEF.md`, tài liệu này được ưu tiên.

Mục tiêu không phải là “line-art tối giản” nói chung. Illustration phải trông như do **cùng một người** thực hiện: một người vẽ bằng **bút sắt ngòi nhọn linh hoạt (flexible pointed steel nib)**, biết kiểm soát lực tay nhưng không chỉnh nét tới mức vô trùng. Tinh thần là craft, bespoke, tinh tế và có chủ ý — không là clip-art, không là gesture rỗng, không là minh hoạ kỹ thuật.

---

## 1. Nguồn DNA gốc

### 1.1 Font phải được audit trực tiếp

Hai nguồn bắt buộc:

- `Fonts/imperfetto-scribble-font-family-2026-04-07-06-21-27-utc/2 Imperfetto Two.otf`
- `Fonts/imperfetto-scribble-font-family-2026-04-07-06-21-27-utc/3 Imperfetto Three.otf`

`Imperfetto Three` là nguồn chính vì đây là font viết tay đang dùng trên website. `Imperfetto Two` là nguồn bổ trợ để hiểu cách mực tạo trọng lượng ở những điểm cần nhấn. Không được chỉ dựa vào mô tả trong prompt hoặc trí nhớ; phải mở/render specimen của hai font trước mỗi batch mới.

### 1.2 Những gì phải học từ font

**Imperfetto Three** cho thấy đường đi của ngòi bút:

- Không có đường cong Bezier dài, sạch và hoàn hảo. Mỗi đoạn cong có rung nhẹ, đổi hướng rất nhỏ và bất ngờ.
- Nét mảnh không đều theo kiểu máy móc. Một nét có hairline ở đoạn kéo nhẹ, rồi nở khi đổi lực, sau đó thu nhanh ở điểm nhấc bút.
- Những vòng/chữ khép lại không tròn. Chúng hơi lệch tâm, méo có chủ ý, và điểm gặp nhau thường chạm hoặc đi qua nhau rất nhẹ.
- Một số đoạn được đi lại lần hai, chệch rất ít. Lượt đi lại này tạo một vùng mực dày hơn ở **một phần** của nét, chứ không thành hai đường song song chạy quanh toàn bộ hình.

**Imperfetto Two** bổ sung tính vật chất của mực:

- Những phần đậm hơn có hình dạng hữu cơ, không phải một “stroke-width” tăng đều.
- Điểm chuyển hướng, điểm chạm và đầu nét có thể tạo mảng mực nhỏ, méo và hơi bè.
- Mảng đậm chỉ là một dấu nhấn cấu trúc. Nó không được biến thành vệt bẩn, bóng đổ, vệt cọ hay một blob lớn tách khỏi đường đi.

### 1.3 Kết luận vật liệu

Đây là **mực bút sắt**, không phải bút lông. Cạnh mực phải sắc và tương đối rõ. Không có lông cọ tưa, không loang nước, không nhòe than chì, không paper grain giả. Sự sống nằm ở đường đi, lực ngòi, và lần đi lại chệch nét — không nằm ở texture.

---

## 2. Bộ reference phải xem trước khi làm

Để tránh tình trạng mỗi asset là một “bàn tay” khác nhau, dùng đúng vai trò của từng file bên dưới.

| Vai trò | File | Được dùng để kiểm gì | Không được suy diễn thành |
|---|---|---|---|
| Nguồn ngữ pháp chính | Hai file OTF ở Mục 1 | rung, nhịp lực, đầu/cuối nét, cách đi nét lại | vẽ object thành chữ hoặc calligraphy brush |
| Master tạm thời mạnh nhất | `assets/illustrations/temp-approved/approach_form.png` | scale object, mật độ nét vừa đủ, contour có cấu trúc, mức độ “không sạch” vừa phải | giản lược mọi object thành icon 3 nét |
| Reference phụ cho object bút | `assets/illustrations/temp-approved/cp_calligraphy.png` và `assets/illustrations/temp-approved/contact_pen.png` | mức tối giản của chủ thể bút trong layout | phong cách nét hoàn chỉnh cho mọi object |
| Không dùng làm reference bút pháp | `assets/illustrations/temp-approved/approach_conversation.png` và `assets/illustrations/temp-approved/approach_returns.png` | chỉ để biết subject/slot hiện tại | chất lượng, mật độ hoặc cách dựng nét cần lặp lại |

Khi xem reference PNG, luôn flatten lên nền kem ấm hoặc nền tối của website. Trình xem nền đen có thể làm mất nét đen; checkerboard giả có thể khiến nhầm ảnh chưa có alpha là ảnh trong suốt.

---

## 3. Ngữ pháp nét — điều phải đúng

### 3.1 Object là một khối nhỏ, không phải một đường dài

- Mỗi object thường chỉ chiếm khoảng **25–40%** khung xuất. Tỷ lệ cuối cùng phụ thuộc slot, nhưng phải có khoảng thở rộng quanh vật.
- Hình nhỏ không đồng nghĩa với ít thông tin đến mức trẻ con. Object vẫn cần các phần cấu trúc khiến nó có tuổi và có craft: ví dụ ly cần rim + thân + handle; sóng cần crest + curl + base; thước cần loop + lòng trong + đầu kim loại/tick tối thiểu.
- Ưu tiên các **cụm nét ngắn, có quan hệ cấu trúc**. Không dùng một đường dài phô diễn xuyên khung chỉ để có vẻ phóng khoáng.

### 3.2 Contour khép nhưng không “coloring-book”

Ngôn ngữ hiện hành **không bắt buộc để hở silhouette**. Object có thể và thường nên có contour khép để đủ trọng lượng, đặc biệt ở các hình nhỏ trong layout.

Tuy vậy, closure phải là closure của bàn tay:

- Đường khép có thể được tạo bởi 3–6 đoạn ngắn chạm/đè nhẹ lên nhau.
- Oval, loop, rim và handle phải lệch, hơi mất cân bằng và không cùng bán kính.
- Chỉ một vài vùng có đường đi lại chệch khoảng rất ít; tuyệt đối không có hai line song song chạy đều quanh toàn bộ viền để “fake thickness”.
- Không được biến mỗi contour thành một nét mở vô định, cũng không được bao toàn bộ vật bằng một viền mượt hoàn hảo.

### 3.3 Nhịp lực và độ run

Một illustration đúng có ba mức lực xuất hiện xen kẽ:

1. **Hairline** ở đoạn kéo/đổi hướng nhẹ.
2. **Nét trung bình** là trọng lượng chủ đạo của hình.
3. **Nét nở cục bộ** ở một điểm hãm, giao, quay đầu hoặc điểm ngòi quay lại.

Độ run là sai số có hướng của bàn tay: cong bị lệch rất nhỏ, nét thẳng không hoàn toàn thẳng, vị trí dày/mảnh xuất hiện sớm hoặc muộn hơn dự đoán. Nó **không** là noise, xước nhỏ rải khắp, fuzzy edge, hoặc mực bẩn quanh toàn bộ đối tượng.

### 3.4 Lượt đi lại (retrace)

Retrace là một dấu hiệu quan trọng nhưng phải dùng tiết chế:

- Chỉ bồi vào khoảng 15–25% tổng đường đi; 1–3 vùng là đủ cho một object nhỏ.
- Nét thứ hai lệch rất ít, chạm vào nét cũ hoặc nhập lại nhanh; nó tạo cảm giác tay người quay lại lấy lực chứ không tạo layer minh hoạ.
- Điểm chồng tạo mực đậm hơn nhưng không được lớn hơn đáng kể so với độ dày nét ở gần đó.
- Không re-trace toàn bộ body, rim, crest hoặc thân bút. Làm vậy sẽ thành outline cơ khí/technical.

### 3.5 Mật độ và mức độ hoàn thiện

Một object thường cần **4–7 cử chỉ nét có mục đích**, không tính tick/chi tiết tối thiểu. Con số này không phải luật cứng; tiêu chí là vật phải có cấu trúc trưởng thành mà không bị tả thực.

Đúng: một outline chính có trọng lượng, một contour phụ cần thiết, một hoặc hai chi tiết nhận diện, vài điểm force/retrace.

Sai: hoặc chỉ còn 3 nét emoji, hoặc chồng quá nhiều nét vụn khiến bẩn và thiếu tự tin.

---

## 4. Các lỗi bị cấm

### 4.1 Sai vật liệu

- Bút lông, bristle, wash, broad brush, watercolor.
- Bút chì, graphite grain, charcoal, paper tooth, smudge.
- Marker đều nét, fineliner vô trùng, đường vector/Bézier sạch.

### 4.2 Sai cấu trúc

- Icon/logo/clip-art hoặc hình “emoji”: quá ít cấu trúc, quá đối xứng, quá generic.
- Product illustration/technical drawing: thân bút có cap/rings/grooves, thước có quá nhiều tick/số, object có toàn bộ chi tiết cơ khí.
- Contour đôi đều khắp, oval hoàn hảo, độ dày line cơ học.
- One-line kéo dài qua cả khung, hoặc silhouette hở đến mức object mất trọng lượng.

### 4.3 Sai độ sạch

- Vệt đọng mực lớn, cục mực tách rời, shadow, blur, nhòe, texture nền.
- Hatching, shading, 3D volume, ánh sáng tả thực.
- Nhiều nét nhỏ vô nghĩa quanh vật để giả “handmade”. Handmade đến từ nhịp đường chính; không đến từ rác thị giác.

### 4.4 Sai mức độ tối giản

- “Đơn giản” không có nghĩa là 2–3 nét mượt để thành hình trẻ con.
- “Phóng khoáng” không có nghĩa là để hở mọi cạnh hoặc vẽ một flourish dài.
- “Cùng style” không có nghĩa copy literal hình thước; phải copy **ngữ pháp nét**, rồi giữ logic riêng của từng subject.

---

## 5. Hướng dẫn dựng từng loại object

### Ly trà

Giữ bốn phần: rim/lòng ly, bowl, chân hoặc đáy ngắn, handle. Hơi nước là một cử chỉ phụ ngắn, không phải dải calligraphy dài. Không saucer, không shadow, không đọng mực lớn. Rim có thể là loop méo hai lớp cục bộ, nhưng không được thành ellipse trơn hoặc nhiều vòng xước.

### Sóng cuộn

Sóng phải là một khối curl có sức nặng: crest, vòng cuộn bên trong và base ngắn. Tối đa vài đường chính; không foam, không hàng chục strand, không abstract spiral, không emoji 3 nét. Crest có thể nở lực ở điểm gập nhưng không có vệt cọ hay mảng đen bừa.

### Thước dây

Narrow loop có lòng trắng/alpha bên trong, loop méo có chủ ý, một đầu kim loại nhỏ và chỉ vài tick không đều. Không số, không thước kỹ thuật, không black spool, không dải dài chạy khắp khung.

### Bút/calligraphy pen

Chủ thể chỉ được nhận ra bằng thân ngắn + nib + vệt mực ngắn. Không cap, rings, grooves, clip, engraving, cơ cấu kim loại. Bút phải là ký hiệu có craft, không phải product sketch. Vệt mực phải ngắn, không biến thành flourish trơn hoặc chữ có thể đọc được.

---

## 6. Prompt recipe bắt buộc

Khi tạo prompt EN, dùng cấu trúc này và thay subject/size. Đính kèm reference PNG phù hợp ở Mục 2 nếu workflow render hỗ trợ ảnh reference.

```text
Use case: illustration-story
Asset type: transparent PNG editorial illustration, final <W> × <H> px.
Reference: use the supplied WIS reference only for line grammar: compact scale,
controlled irregular contour, pointed steel-nib ink, sparse local retracing, and
clean adult finish. Do not copy the reference subject.

Subject: one small <OBJECT>, centred with generous negative space. Keep the
structural parts required to recognise it: <STRUCTURAL PARTS>.

Line grammar: black India ink with a flexible pointed STEEL NIB. Build the form
from 4–7 short, deliberate hand gestures. Closed contours are allowed and should
be slightly lopsided; use hairlines, medium strokes, and only one or two local
pressure swells. Add one or two tiny off-register retraces at structurally useful
turns. Crisp ink edges; no long smooth curve, no fuzz, no random scratchiness.

Output: pure black line over genuine transparent alpha, flat 2D, exact canvas size.

Avoid: brush, bristles, watercolor, pencil, graphite, marker, paper texture,
smudge, shadow, gradient, 3D, hatching, vector smoothness, uniform mechanical
line, icon/emoji simplification, product-detail rendering, long flourish,
checkerboard background, text, watermark.
```

Prompt phải nói rõ mức độ detail đúng với object. Đừng cấm chi tiết tới mức subject thành biểu tượng trẻ con; cũng đừng liệt kê mọi component kỹ thuật khiến model vẽ product illustration.

---

## 7. Quy trình bắt buộc cho mọi yêu cầu illustration sau này

1. **Đọc tài liệu này hoàn chỉnh.**
2. **Mở/render** `Imperfetto Two`, `Imperfetto Three`, và reference PNG phù hợp ở Mục 2 trên nền kem ấm.
3. Viết một checklist riêng cho subject: phần cấu trúc phải có, phần detail phải loại, scale trong khung.
4. Render từng asset riêng; không batch một prompt chung cho các subject khác nhau.
5. Review trên nền sáng và trong slot thật của website (nền tối + CSS mask) trước khi ghi đè asset.
6. Chỉ ghi đè file production sau khi output qua checklist Mục 8. Nếu chưa đạt, lưu variant ở nơi tạm và không đổi link trong HTML.
7. Sau khi được người dùng chốt, copy asset vào `assets/illustrations/temp-approved/` hoặc một snapshot được đặt tên rõ ràng rồi mới đổi link trong HTML. Snapshot giúp các lần thử sau không làm hỏng design đang review.

---

## 8. Checklist chốt file

- [ ] Đã đọc tài liệu này và xem đúng reference trước khi prompt.
- [ ] Bút pháp là mực bút sắt: cạnh sắc, lực ngòi có chủ ý; không brush/pencil/marker/vector.
- [ ] Object có scale nhỏ, khoảng thở rộng, nhưng vẫn có đủ cấu trúc để trưởng thành.
- [ ] Contour khép/lệch có chủ ý; không open-line vô định và không coloring-book/vector outline.
- [ ] Chỉ có vài retrace cục bộ; không double contour đều khắp.
- [ ] Không có hạt rác, mực bẩn, blob lớn, shading, blur hoặc shadow.
- [ ] Mật độ nét tương thích với master reference, không thành icon trẻ con hay product illustration.
- [ ] PNG đúng kích thước, nền alpha thật, RGB nét đen thuần; không nền trắng và không checkerboard giả.
- [ ] Đã kiểm output trong section thực tế của `Homepage_codex_alt.html` trước khi thay snapshot/production link.

