# 📦 Node.js CRUD REST API

Project ini merupakan **REST API sederhana menggunakan Node.js dan Express.js** untuk memenuhi tugas pembuatan CRUD **Categories** dan **Products** dengan database **MySQL**.

Repository ini dibuat untuk memenuhi tugas mata kuliah **Pemrograman Web1**.

---

## 🚀 yang di gunakan atau yang di install

* Node.js
* Express.js
* MySQL
* mysql2
* dotenv
* Postman (untuk testing API)

---

## ⚙️ Cara Menjalankan Project

1. Masuk ke folder project
dsini nama folder saya
   ```bash
   cd tugas_pemweb1
   ```

2. Install dependency

   ```bash
   npm install
   ```

3. Buat file `.env` lalu isi konfigurasi database

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=tugaspemweb1
   ```

4. Jalankan server

   ```bash
   npm run dev
   ```

   atau bisa juga 

   ```bash
   node server.js
   ```

5. Server akan berjalan di:

   ```
   http://localhost:3000
   ```

---

## 🔗 Endpoint API

### 📂 Categories

| Method | Endpoint      | Keterangan                    |
| ------ | ------------- | ----------------------------- |
| GET    | /category     | Ambil semua kategori          |
| GET    | /category/:id | Ambil kategori berdasarkan ID |
| POST   | /category     | Tambah kategori               |
| PUT    | /category/:id | Update kategori               |
| DELETE | /category/:id | Hapus kategori                |

### 📦 Products

| Method | Endpoint     | Keterangan                  |
| ------ | ------------ | --------------------------- |
| GET    | /product     | Ambil semua produk          |
| GET    | /product/:id | Ambil produk berdasarkan ID |
| POST   | /product     | Tambah produk               |
| PUT    | /product/:id | Update produk               |
| DELETE | /product/:id | Hapus produk                |

---

## 🧪 Testing API

Pengujian API dilakukan menggunakan **Postman**.

Contoh pengujian:
*GET
*PUSH
*PUT
*DELETE

## ✅ Status Tugas

* Database ✔️
* CRUD Categories ✔️
* CRUD Products ✔️
* JSON Request & Response ✔️
* Siap di-upload ke GitHub ✔️

---
✍️ **Dibuat oleh:**
Nama: *(Mohammad Fatih Mubarok)*
NIM: *(24090002)*
Kelas: *(3A)*
