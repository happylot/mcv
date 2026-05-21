# Matching Vietnam Website

Website corporate tĩnh cho Matching Vietnam, tập trung vào việc giới thiệu mô hình kết nối buyer quốc tế với nhà máy Việt Nam, năng lực dịch vụ và hệ sinh thái đối tác.

## Tổng quan

Dự án hiện được xây dựng dưới dạng static site nhiều trang, phục vụ mục tiêu truyền thông thương hiệu và giới thiệu dịch vụ của Matching Vietnam. Nội dung website xoay quanh các nhóm chính:

- Giới thiệu doanh nghiệp và định vị thương hiệu
- Các dịch vụ như Export Enablement, Factory Onboarding, Buyer Matching, Packaging & Logistics, Cross-border E-commerce
- Các ngành hàng ưu tiên
- Hệ sinh thái đối tác
- Nội dung về phát triển bền vững, tuyển dụng, tin tức và liên hệ

Tagline chính của dự án là: `Trusted Samples, Direct from Factories`.

## Công nghệ sử dụng

- `HTML5` cho cấu trúc trang
- `CSS3` thuần với design system dùng biến CSS
- `Vanilla JavaScript` cho điều hướng mobile, submenu, animation, counter và chuyển ngôn ngữ
- `Google Fonts` (`Be Vietnam Pro`, `Inter`)

Không dùng framework frontend hoặc backend. Repo này phù hợp để triển khai như một website tĩnh.

## Cấu trúc thư mục

```text
Website/
├── README.md
├── Landing/
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── industries.html
│   ├── partners.html
│   ├── sustainability.html
│   ├── newsroom.html
│   ├── careers.html
│   ├── contact.html
│   ├── style.css
│   ├── script.js
│   ├── favicon.png
│   ├── matching am ban png-03.png
│   ├── matching file goc PNG-01.png
│   ├── Vietnam-Coffee-Plantations-2.webp
│   ├── README.md
│   └── Implementation plan.md
└── Buy.matchingvietnam.com/
```

## Các trang chính

- `Landing/index.html`: trang chủ
- `Landing/about.html`: giới thiệu doanh nghiệp
- `Landing/services.html`: mô tả dịch vụ
- `Landing/industries.html`: ngành hàng ưu tiên
- `Landing/partners.html`: hệ sinh thái đối tác
- `Landing/sustainability.html`: định hướng bền vững
- `Landing/newsroom.html`: tin tức và bài viết
- `Landing/careers.html`: tuyển dụng
- `Landing/contact.html`: thông tin liên hệ

## Tính năng hiện có

- Website nhiều trang với điều hướng nhất quán
- Menu desktop/mobile và submenu
- Hỗ trợ chuyển đổi nội dung `VI/EN` phía client
- Hiệu ứng reveal khi cuộn trang
- Animated counters ở khu vực thống kê
- Giao diện responsive cho desktop và mobile

## Chạy dự án local

Vì đây là static site, chỉ cần mở trực tiếp file `Landing/index.html` trong trình duyệt hoặc chạy một local server đơn giản.

Ví dụ với Python:

```bash
cd /Users/admin/Desktop/MatchingVietnam/Website/Landing
python3 -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## CI/CD deploy

Repo đã được cấu hình GitHub Actions tại `.github/workflows/deploy-pages.yml`.

- Trigger: mỗi lần push lên nhánh `main`
- Artifact deploy: toàn bộ thư mục `Landing/`
- Web root trên production: nội dung bên trong `Landing/` sẽ được publish trực tiếp làm website
- Target: GitHub Pages

Để pipeline chạy được trên production, trong GitHub repo settings cần đặt:

- `Settings > Pages > Source`: `GitHub Actions`
- `Settings > Actions > General`: workflow permissions cho phép đọc repo và deploy Pages

## Ghi chú

- File triển khai chính hiện nằm trong thư mục `Landing/`
- `Landing/Implementation plan.md` mô tả định hướng nội dung và sitemap ban đầu
- `Landing/README.md` chứa mô tả dự án ở mức nội dung/thương hiệu
