# Website MatchingVietnam.com — Theo cấu trúc Stavian.com

Xây dựng website corporate cho Matching Vietnam theo cấu trúc sitemap của stavian.com, sử dụng nhận diện thương hiệu của Matching Vietnam.

## Thông tin nhận diện thương hiệu

| Yếu tố | Giá trị |
|---------|---------|
| Logo | Chữ M cách điệu với lá cờ Việt Nam (ngôi sao vàng, dải đỏ) |
| Màu chính | Đỏ `#C8102E`, Đen `#1A1A1A`, Vàng `#FFD700` |
| Màu phụ | Trắng `#FFFFFF`, Xám nhạt `#F5F5F5`, Xám đậm `#333333` |
| Font | "MATCHING" (bold/black), "VIETNAM" (red) |
| Tagline | "Trusted Samples, Direct from Factories" |
| Hotline | 096 152 1688 |
| Email | ceo@matchingvietnam.com |
| Địa chỉ | Tòa nhà 169 Nguyễn Ngọc Vũ, Hà Nội, Việt Nam |
| Công ty | MCV GLOBAL JSC — MST: 0111272400 |

## Sitemap (dựa theo Stavian.com → Matching Vietnam)

```
matchingvietnam.com/
├── index.html          (Trang chủ)
├── about.html          (Giới thiệu)
│   ├── Tổng quan
│   ├── Tầm nhìn & Sứ mệnh
│   ├── Đội ngũ
│   └── Thành tựu & Đối tác
├── services.html       (Dịch vụ)
│   ├── Export Enablement
│   ├── Factory Onboarding
│   ├── Buyer Matching & AI Sales
│   ├── Packaging & Logistics
│   └── Cross-border E-commerce
├── industries.html     (Ngành hàng)
│   ├── Food & Beverage
│   ├── Agricultural Products
│   ├── Shopping Bags & Packaging
│   └── Herbs & Wellness
├── partners.html       (Đối tác / Hệ sinh thái)
│   └── Danh sách vendor/factory partners
├── sustainability.html (Phát triển bền vững)
├── newsroom.html       (Tin tức & Blog)
├── careers.html        (Tuyển dụng)
└── contact.html        (Liên hệ)
```

## Proposed Changes

### Công nghệ sử dụng
- **HTML5 + Vanilla CSS + JavaScript** (static site, không cần framework)
- **Google Fonts**: Inter (body), Outfit (headings)
- **CSS**: Modern design với glassmorphism, gradient, micro-animations
- Logo sử dụng ảnh có sẵn: `Logo-ngang.png`, `logo.png`, `favicon.png`

---

### [NEW] Shared CSS Design System
#### [NEW] [style.css](file:///Users/admin/Desktop/MatchingVietnam/Website/style.css)
- CSS Variables cho brand colors, typography, spacing
- Reset/normalize styles
- Reusable components: `.btn`, `.card`, `.section`, `.container`
- Navigation & footer styles
- Responsive grid system
- Animations & transitions

---

### [NEW] Homepage
#### [NEW] [index.html](file:///Users/admin/Desktop/MatchingVietnam/Website/index.html)
- **Hero Section**: Full-width banner với tagline, CTA buttons
- **Giới thiệu ngắn**: Matching Vietnam là gì
- **Dịch vụ nổi bật**: 5 cards dịch vụ chính
- **Ngành hàng**: 4 industry cards với hover effects
- **Đối tác tiêu biểu**: Logo carousel/grid
- **Tin tức mới nhất**: 3 bài blog gần nhất
- **CTA Section**: Kêu gọi đăng ký / liên hệ
- **Số liệu thống kê**: Counter animation (50+ factories, 10+ countries, etc.)

---

### [NEW] About Us Page
#### [NEW] [about.html](file:///Users/admin/Desktop/MatchingVietnam/Website/about.html)
- Tổng quan công ty & câu chuyện
- Tầm nhìn & Sứ mệnh
- Giá trị cốt lõi
- Timeline lịch sử phát triển
- Đội ngũ lãnh đạo

---

### [NEW] Services Page
#### [NEW] [services.html](file:///Users/admin/Desktop/MatchingVietnam/Website/services.html)
- 5 dịch vụ chính với mô tả chi tiết
- Icon + animation cho mỗi dịch vụ
- CTA form liên hệ

---

### [NEW] Industries Page
#### [NEW] [industries.html](file:///Users/admin/Desktop/MatchingVietnam/Website/industries.html)
- 4 ngành hàng chính: Food & Beverage, Agricultural Products, Shopping Bags & Packaging, Herbs & Wellness
- Mỗi ngành hàng có hình ảnh + mô tả + sản phẩm tiêu biểu

---

### [NEW] Partners Page
#### [NEW] [partners.html](file:///Users/admin/Desktop/MatchingVietnam/Website/partners.html)
- Grid hiển thị factory/vendor partners
- Thông tin vendor: tên, ngành hàng, địa chỉ
- CTA đăng ký làm đối tác

---

### [NEW] Sustainability Page
#### [NEW] [sustainability.html](file:///Users/admin/Desktop/MatchingVietnam/Website/sustainability.html)
- ESG Framework
- Cam kết phát triển bền vững
- Hoạt động CSR

---

### [NEW] Newsroom Page
#### [NEW] [newsroom.html](file:///Users/admin/Desktop/MatchingVietnam/Website/newsroom.html)
- Blog grid layout
- Các bài viết mẫu

---

### [NEW] Careers Page
#### [NEW] [careers.html](file:///Users/admin/Desktop/MatchingVietnam/Website/careers.html)
- Giới thiệu văn hóa công ty
- Vị trí tuyển dụng hiện tại
- Form ứng tuyển

---

### [NEW] Contact Page
#### [NEW] [contact.html](file:///Users/admin/Desktop/MatchingVietnam/Website/contact.html)
- Form liên hệ
- Bản đồ Google Maps
- Thông tin liên hệ (địa chỉ, SĐT, email)
- Giờ làm việc

---

### [NEW] Shared JavaScript
#### [NEW] [script.js](file:///Users/admin/Desktop/MatchingVietnam/Website/script.js)
- Mobile menu toggle
- Smooth scroll
- Counter animation (stats section)
- Scroll reveal animations
- Active nav highlighting

## Verification Plan

### Automated Tests
- Mở website bằng browser tool, kiểm tra giao diện từng page
- Kiểm tra responsive trên mobile viewport

### Manual Verification
- User review giao diện và nội dung
