#  Project

##  Clone project

```bash
git clone https://github.com/Ushio12345/Pre_Test_EduPluse_Data.git
```

##  Install dependencies

```bash
npm install
```

Hoặc:

```bash
npm i
```

## 3. Start JSON Server

Dự án sử dụng JSON Server để giả lập API.

```bash
npm start
```

Mặc định server chạy tại:

```txt
http://localhost:8080
```

---

#  Expose API bằng Ngrok

Nếu muốn chia sẻ API cho Frontend hoặc người khác truy cập từ Internet:

## Cài đặt Ngrok

```bash
npm install -g ngrok
```

Hoặc dùng trực tiếp:

```bash
npx ngrok http 8080
```

## Khởi chạy

```bash
npx ngrok http 8080
```

Ví dụ kết quả:

```txt
Forwarding https://abc123.ngrok-free.app -> http://localhost:8080
```

Khi đó API sẽ có dạng:

```txt
https://abc123.ngrok-free.app
```

Ví dụ:

```txt
https://abc123.ngrok-free.app/courses
https://abc123.ngrok-free.app/quizzes
https://abc123.ngrok-free.app/users
```

---

# 📂 Sample Data Structure

```json
{
  "courses": [],
  "flashcards": [],
  "quizzes": [],
 
}
```

---

#  Frontend Configuration

## Local Development

```env
EDU_API_BASE_URL=http://localhost:8080
NEXT_PUBLIC_EDU_API_BASE_URL=http://localhost:8080
```

## Using Ngrok


```env

EDU_API_BASE_URL=https://abc123.ngrok-free.app
NEXT_PUBLIC_EDU_API_BASE_URL=https://abc123.ngrok-free.app
```
# Notes

- JSON Server mặc định chạy port `8080`
- Ngrok URL sẽ thay đổi mỗi lần restart nếu dùng bản free
