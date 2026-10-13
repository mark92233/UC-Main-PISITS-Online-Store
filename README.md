
# UC Main PSITS Online Store

Welcome to the student organization e-commerce portal! This project is built using **Laravel 11**, **React**, **Tailwind CSS**, and **Inertia.js**.

---

##  Project Architecture (Where to write code)
If you are new to this stack, here is exactly where the different parts of the application live:

* **Frontend UI (React):** `resources/js/Pages/`
  * *Example:* The Login screen is located at `resources/js/Pages/Auth/Login.jsx`
* **Backend Logic (Controllers):** `app/Http/Controllers/`
  * *Example:* The authentication logic is handled in `app/Http/Controllers/AuthController.php`
* **Database (Models & Migrations):** `app/Models/` and `database/migrations/`
  * *Example:* The PHP class that interacts with the users table is `app/Models/User.php`
* **Routing (URLs):** `routes/`
  * *Example:* To add or edit page URLs, modify `routes/web.php` or `routes/auth.php`

---

##  Local Setup Guide

Follow these steps to get the project running on your local machine:

### 1. Clone & Install
Open your terminal and run the following commands to download the code and install the required PHP and JavaScript packages:
```bash
git clone [https://github.com/mark92233/UC-Main-PISITS-Online-Store.git](https://github.com/mark92233/UC-Main-PISITS-Online-Store.git)
cd UC-Main-PISITS-Online-Store
composer install
npm install

```

### 2. Environment Configuration

Duplicate the `.env.example` file, rename it to exactly `.env`, and generate your app key:

```bash
cp .env.example .env
php artisan key:generate

```

### 3. Database Setup

1. Open XAMPP and start both **Apache** and **MySQL**.
2. Open `http://localhost/phpmyadmin` in your browser and create a new database named `org_store`.
3. Open your `.env` file in your code editor and update the database section:

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=org_store
DB_USERNAME=root
DB_PASSWORD=

```

### 4. Migrate and Seed

Run this command to build the database tables and populate them with our dummy development data:

```bash
php artisan migrate --seed

```

### 5. Start the Servers

To run this application, you **must have two separate terminal windows open at the same time**:

* **Terminal 1 (Backend):** `php artisan serve`
* **Terminal 2 (Frontend):** `npm run dev`

Open your browser and visit: **`http://localhost:8000`**

---

## Development Seeded Account

You can use the following credentials to bypass the OTP flow and log directly into the system for testing purposes:

* **Student ID:** `123456789`
* **Password:** `password123`
