# EduEcomAI – Hệ thống gợi ý khóa học thông minh

EduEcomAI là một nền tảng học tập trực tuyến tích hợp công nghệ AI, giúp người học dễ dàng khám phá, quản lý và tiếp cận các khóa học phù hợp. Giao diện hiện đại, responsive và thân thiện với người dùng.

---

## Tính năng chính

- Hiển thị danh sách khóa học: Bao gồm đầy đủ thông tin về tên, mô tả, hình ảnh, giá,...
- Tìm kiếm & lọc: Tìm khóa học theo từ khóa và lọc theo mức giá.
- Gợi ý AI thông minh: Hệ thống đề xuất khóa học dựa trên hành vi người dùng, có hiệu ứng loading skeleton.
- Modal chi tiết: Hiển thị chi tiết khóa học khi người dùng click vào.
- Hệ thống yêu thích: Cho phép người dùng đánh dấu và quản lý danh sách yêu thích.
- Lịch sử xem: Theo dõi và hiển thị các khóa học đã từng được truy cập.

---

## UX/UI

- Responsive design: Tương thích với mọi thiết bị.
- Hiệu ứng hover và transition mượt mà.
- Toast notifications: Hiển thị phản hồi nhanh.
- Loading khi gọi API.
- Hiển thị lỗi khi API thất bại.
- Màu chủ đạo xanh hiện đại.

---

## Kỹ thuật

- React Hooks: Sử dụng useState, useEffect,...
- Component hóa rõ ràng, dễ mở rộng.
- Mock API cho phần gợi ý AI.
- Quản lý state hiệu quả.
- Xử lý lỗi đầy đủ, tránh crash.
- Hỗ trợ accessibility với semantic HTML.

---
## Công nghệ sử dụng

- ReactJS
- TailwindCSS
- React Router DOM
- Chatbase (tích hợp AI Chat)

---

## Trải nghiệm di động

- Menu responsive cho mobile.
- Bố cục linh hoạt, dễ điều hướng.
- Giao diện thân thiện với thao tác chạm.
- Hiển thị tốt trên mọi kích thước màn hình.

---

## Cài đặt và chạy dự án

```bash
# Clone dự án
git https://github.com/phab-dzz/thuongmaidientugiaoduc-ai.git
cd thuongmaidientugiaoduc-ai

# Cài dependencies
npm install

# Chạy ứng dụng
npm start
