# WIS - Direction cho he trang con desktop

*Ban de chot truoc khi code. Pham vi: `v2/` va luong dieu huong tu `Homepage_codex_alt.html`.*

---

## 1. Quyet dinh pham vi

Trang chu la chuan ve **ngon ngu thiet ke**, khong phai quota hieu ung hay mat do
thi giac phai sao chep. Sitemap va bao gia goc chia he thong thanh hai cap:

| Cap | Trang | Nhiem vu thiet ke |
| --- | --- | --- |
| Showcase | Home, Our Works, Destination Weddings | Tao an tuong, chung minh gu va nang luc bang trai nghiem co dan dung. |
| Basic editorial | Approach, Services, 4 service detail, About, Journal, Contact, Venue | Thong tin ro rang va de dung, nhung van co mot tu the bien tap rieng; khong duoc doc nhu template SaaS hay wedding template. |
| Reusable editorial template | Case detail | Ke mot glory story bang anh va bang chung that. Co chieu sau doc, khong thanh mot homepage thu hai. |

`Destination Weddings` hien chua co trang that trong luong v2. Day la **mot trang
canonical duy nhat**: menu chinh goi la `Destination Weddings`, con Services goi
la `Destination`; ca hai deu tro ve cung route. `Venues in Vietnam` la trang con.
Khong thay bang mot landing tam thoi, va khong tao them service dossier Destination
thu nam; no la flagship thu ba va can duoc thiet ke rieng khi co content/asset dung.

## 2. DNA can ke thua tu Homepage

1. **Dark field co chat lieu, khong chi nen den.** Warm ink, lop anh, do tuong
   phan va khoang tho tao cam giac phim/tai lieu; gold chi la dau nhan, khong la
   mau UI mac dinh.
2. **Luoi truoc, trang tri sau.** Moi diem canh phai co quan he voi page margin,
   reading measure va baseline; khong dat chu/anh theo cam tinh tung section.
3. **Anh la bang chung.** Crop, kich thuoc va vi tri anh phai no ra mot su that
   cua cau chuyen, khong chi lam nen dep cho heading.
4. **Craft la mot hanh vi.** Imperfetto, line-boil, film, cursor, reveal chi duoc
   dung khi no lam ro mot hanh dong: viet, ghi chu, xem, chon, mo mot cau chuyen.
   Khong dan sticker chu viet tay vao cho trong.
5. **Tiet che tu tin.** Mot trang basic chi can mot cu chi quyet dinh. Mot trang
   showcase co the co nhieu chuong hon, nhung khong duoc dung “la” de thay cho
   hierarchy va content.

## 3. Shared editorial substrate

Day la phan dung chung truoc khi lam rieng tung trang. No can thay the viec dong
bo chi bang mau/font/hang footer.

- **Header/menu chrome:** giu component dang duoc duyet va dung chung. Day la
  redesign phan than trang, khong tu y doi cau truc navigation; chi can dam bao
  spacing, contrast va transition cua component khong troi giua cac trang.
- **Page opening:** eyebrow/kicker, title, one reading column va mot diem neo
  hinh anh hoac metadata. Khong dung mot khoang trong cao tuy y de day title
  xuong man hinh.
- **Type:** Fahkwang la giong chinh. Display, section title, reading, metadata,
  CTA la cac cap on dinh; khong tu y them font hay clamp rieng theo trang.
- **Image treatment:** co 3 vai ro ro rang: evidence (anh ke chuyen), pause
  (anh cho nhip tho), index (anh de chon/mot link). Moi role co ty le/caption
  rieng; tranh gallery card dong deu.
- **Motion:** reveal mot lan la default. Chi showcase duoc them stateful
  choreography; motion phai tuong thich `prefers-reduced-motion`.
- **Footer:** giu ban da dong bo tu homepage. Khong lam lai.

## 4. Spine cho tung loai trang

### Our Works - showcase: **The glory-story index**

Muc dich: day la portfolio, khong phai gallery anh cuoi.

- Mo dau bang mot frame duoc chon nhu bia so: anh, couple/location/year va mot
  **diem khoi dau that**. Tieu de khong can khong lo; anh va fact phai tao luc.
- Cac project sau la cac *folio*, khong phai card. Moi folio co: so thu tu,
  anh crop co chu dich, ten couple, dia diem, mot dong glory-story. Luoi giu
  mot truc caption chung, nhung portrait/landscape thay doi theo chat lieu anh.
- Hover/cursor chi lam mot viec: cho thay “open this story”; khong lat card,
  khong parallax hang loat.
- Ket trang la mot current-selection/note ngan, khong nhac lai grid hay chen
  marketing CTA lon.

### Case detail - reusable editorial: **A sequence of evidence**

Muc dich: doc duoc cau chuyen va tin duoc rang WIS da thiet ke no.

- Mo bang glory-story proposition + 1 fact da xac nhan, roi vao chuoi anh.
- 2-3 quyet dinh that la cac diem quay: vi du noi chon, cach khach den, dau an
  rieng. Moi diem co copy doc duoc va mot cum anh phuc vu dung diem do.
- Khong dung chuong generic, mask-word khong noi dung, triptych deu, sticky
  scroll, hay pull-quote lap lai.
- Catherine & Johnny la master de lam sach nhip, khong phai mot loai layout
  bat buoc cho moi case.

### Approach - basic editorial: **The annotated method**

Muc dich: bien cach lam viec thanh gia tri nhin thay duoc, khong thanh checklist.

- Mot tuyen ngon va mot process doc theo truc duy nhat.
- Moi tram co “what we listen for” + mot bang chung that/vi du that.
- Chi can mot gesture craft xuyen trang: note/mark theo tien trinh. Khong lap
  lai bo 3 minh hoa hay co che ghim cua homepage.

### Services - basic editorial: **The service ledger**

Muc dich: giup khach tu nhan ra loai dong hanh phu hop, khong ban package.

- Giu ledger/index, nhung hang active phai mo mot doan mo ta ngan va mot anh
  evidence; hang khac lui ve nen.
- Destination la mot entry chung den trang flagship canonical, khong dung “coming
  soon” nhu mot hang san pham ngang cap voi dich vu da co, va khong tao mot service
  dossier rieng ben canh flagship.

### Service detail - template chung: **The service dossier**

Muc dich: lam ro trai nghiem cua goi dich vu trong it man doc.

- Mot mo trang, mot doan “best for”, mot overview, 1-2 anh co caption, mot
  doan ve pham vi cham soc, CTA. Khong can them chuong hay hieu ung.
- Template dung chung ve luoi/type; moi goi phan biet bang mot vat lieu hinh
  anh va giong copy: Standard = city rhythm, Premium = whole-day authorship,
  Elopement = place-led intimacy, Decoration = light/material.

### About - basic editorial: **An authored archive**

Muc dich: chung minh di san va con nguoi, khong phai “about us” chung chung.

- Mot anh/portrait co ly do, brand story ngan, mot moc since-2009, team/founder
  neu co du lieu that. Archive khong can retro hay nhieu animation.

### Journal - basic editorial: **A quiet magazine index**

Muc dich: nuoi gu va SEO bang mot he bien tap de xuat ban lau dai.

- One featured story + danh sach bai viet theo nam/category + metadata doc de.
- Anh chi la cover/entry point. Hieu ung chi o focus state cua link.
- Khong public placeholder, sample hay note van hanh.

### Contact - basic functional editorial: **The invitation**

Muc dich: loc lead trong cam giac duoc lang nghe.

- Giu multi-step nhe, tien do ro, microcopy mem va trang thai xac nhan tinh te.
- Khong bien form thanh mot section nghe thuat lam cham viec dien thong tin.

## 5. Hang rao chat luong

- Moi trang co **mot** sentence ro rang: “trang nay dang lam gi cho khach?” Neu
  khong tra loi duoc, khong duoc them effect.
- Khong public `[WIS: ...]`, `placeholder`, `sample`, note duyet, hay copy noi
  bo. Day la P0 truoc khi demo/deploy.
- Khong sao chep feature cua homepage de lam cho “co chat”: khong co section nao
  mac dinh duoc phep sticky, horizontal scroll, canvas grain, cursor effect hay
  handwritten accent.
- Khong dung card grid deu, quote centered lap lai, “luxury” serif, hoac khoang
  trang khong co quan he voi luoi.
- Anh/content that la dieu kien de hoan thien Showcase va Case. Thieu asset thi
  de slot dang hoang, khong biet thanh mot concept gia.

## 6. Thu tu trien khai

1. Go note/placeholder public va dong bo page-opening substrate.
2. Prototype **Our Works** desktop; day la bai kiem tra xem he showcase co du
   gu hay chua.
3. Dua Catherine & Johnny ve reusable case master.
4. Lam Services hub, roi mot service-detail master va bien the 4 goi.
5. Lam Approach, About, Journal, Contact.
6. Thiet ke Destination khi co content/asset that; khong dung trang tam thay the
   flagship.

## 7. Tieu chi duyet Our Works prototype

- Nhin 3 giay nhan ra day la portfolio cua mot “cultural author”, khong phai
  wedding gallery hay agency portfolio template.
- Nhin 30 giay doc duoc ten, noi chon va diem khoi dau cua it nhat 3 project.
- Khong can mot hieu ung nao de giai thich bo cuc.
- Khi hover/click, motion lam ro hanh dong chon xem cau chuyen, khong lam phan
  trinh dien.
- Neu an tat ca chu viet tay va effect, luoi, type va anh van phai dung vung.
