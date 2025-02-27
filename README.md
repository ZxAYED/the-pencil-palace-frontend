The Pencil Palace ✏️🛍️
Welcome to The Pencil Palace, your ultimate destination for high-quality stationery and office supplies! 🏢📚
Whether you're a student, artist, or professional, we've got everything you need to fuel your creativity and productivity. ✨

🛍️ About This Website
The Pencil Palace is a full-fledged e-commerce platform offering a seamless online shopping experience for stationery lovers.

🏗️ Key Features
🛒 User Features
✔️ Browse Without Login: Explore the Home Page, About Us, and Products freely.
✔️ User Authentication:

Sign Up / Log In with Firebase Auth 🔐
Forgot Password? Receive a secure reset link via email
✔️ Shopping Experience:
View detailed product descriptions after logging in
Add items to the cart and proceed to checkout
Enter delivery details and make payments via ShurjoPay
Order History: View past purchases 🛍️
🛠️ Admin Panel
✔️ Product Management: Create, update, modify, or delete products 📦
✔️ Order Management: View all orders and update their statuses 📋
✔️ User Management: Block or delete users as necessary 🚀

📜 Error Handling & Optimization
✔️ 404 Page for smooth navigation 🔄
✔️ Global Error Handling in Backend
✔️ Fixed API Response Structure

☁️ Optimized & Cloud Images 📸
🔹 Image Storage: Cloudinary integration for secure and optimized image hosting
🔹 Frontend Optimization: react-image ensures faster loading & better quality
🔹 Lazy Loading for better performance

🏗️ Tech Stack
Frontend

🏗️ React (Vite) + TypeScript, MUI, TailwindCSS, Redux Toolkit
🎨 Animations: Swiper.js, React-scroll-parallax, Framer Motion
📊 Analytics: Recharts
📩 Notifications: Sonner
📋 Forms & Validation: React-hook-form

Backend

⚙️ Node.js, Express.js, MongoDB, Mongoose
🔐 JWT Authentication, Firebase Auth
☁️ Cloudinary for Image Uploading
📩 Email Handling: Nodemailer
💰 Payment Gateway: ShurjoPay
🛡 Security: bcrypt.js for password hashing

📂 Project Structure
css
Copy
Edit
📦 the-pencil-palace-frontend
├── 📂 frontend
│ ├── src
│ │ ├── 📂 components
│ │ ├── 📂 pages
│ │ ├── 📂 redux
│ │ ├── 📂 utils
│ │ ├── 📂 assets
│ │ ├── App.tsx
│ │ ├── main.tsx

📦 the-pencil-palace
├── 📂 backend
│ ├── 📂 src
│ │ ├── 📂 features
│ │ │ ├── 📂 admin
│ │ │ ├── 📂 auth
│ │ │ ├── 📂 product
│ │ │ ├── 📂 order
│ │ ├── 📂 utils
│ │ ├── 📂 middleware
│ │ ├── 📂 error
│ │ ├── server.ts
│ │ ├── app.ts
⚙️ Backend Features & Architecture
🏗️ MVC Structure Used
The backend follows a clean and scalable MVC (Model-View-Controller) architecture for efficient code management.

📂 Features Folder Structure
Each module (Admin, Auth, Product, Order) contains:
✔️ Interface – Defines TypeScript types & interfaces
✔️ Model – Defines the MongoDB schema
✔️ Service – Handles business logic
✔️ Controller – Processes requests & responses
✔️ Router.ts – Defines API endpoints

⚡ Additional Backend Features
Middleware: Error handling, authentication
Global Error Handler: Ensures consistent API responses
Environment Variables: Secure config using dotenv
File Handling: multer for handling file uploads
Security: bcrypt.js for password hashing, jsonwebtoken for authentication

---

## 🛠️ Installation & Setup

### Clone the Repository

```sh
git clone https://github.com/ZxAYED/the-pencil-palace-frontend.git
cd the-pencil-palace
```

### Install Dependencies

#### Frontend

```sh
cd frontend
npm install
npm run dev
```

#### Backend

```sh
git clone https://github.com/ZxAYED/the-pencil-palace
cd backend
npm install
npm run dev
```

---

---

## 📜 License

This project is licensed under the MIT License.
🎉 Happy Shopping at The Pencil Palace! 🛒✨
Let me know if you need any more improvements! 💡
