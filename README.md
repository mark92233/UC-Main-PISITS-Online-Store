# UC-Main-PISITS-Online-Store Portal

Welcome to the Student Org Store project! This platform is built with **Laravel 11** (Backend), **React** (Frontend), **Tailwind CSS** (Styling), and **Inertia.js** (The glue connecting Laravel and React). 

If you have never used this stack before, don't worry! Follow these instructions step-by-step to get the project running on your local machine.

---

## Prerequisites
Before you start, make sure you have the following installed on your computer:
1. **[XAMPP](https://www.apachefriends.org/index.html)** (For our local MySQL Database and PHP)
2. **[Composer](https://getcomposer.org/)** (The package manager for PHP)
3. **[Node.js & npm](https://nodejs.org/)** (The package manager for React/Frontend)
4. **[Git](https://git-scm.com/)** (For version control)

---

## Local Setup Guide

### 1. Clone the Repository
Open your terminal (or Git Bash) and clone the project to your computer, then move into the folder:
```bash
git clone [https://github.com/mark92233/UC-Main-PISITS-Online-Store.git](https://github.com/mark92233/UC-Main-PISITS-Online-Store.git)
cd org-store

```

### 2. Install Dependencies

Because we use two different languages (PHP and JavaScript), we need to install packages for both.

```bash
# Install Backend (PHP) packages
composer install

# Install Frontend (React) packages
npm install

```

*(Note: If you don't see the `vendor` or `node_modules` folders in GitHub, that is normal! These commands create them on your machine.)*

### 3. Setup Environment Variables

Laravel uses a `.env` file to store sensitive passwords and local settings. This file is never pushed to GitHub.

1. Duplicate the `.env.example` file in the root folder.
2. Rename the duplicated file to exactly: `.env`
3. Generate your unique application security key by running:

```bash
php artisan key:generate

```

### 4. Database Configuration

1. Open the **XAMPP Control Panel** and Start both **Apache** and **MySQL**.
2. Go to your browser and open `http://localhost/phpmyadmin`.
3. Click "New" and create a database named: `org_store` (or whatever you want to name it).
4. Open your `.env` file in VS Code and update the Database section to look like this:

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=org_store
DB_USERNAME=root
DB_PASSWORD=

```

*(Leave `DB_PASSWORD` blank if you are using default XAMPP settings).*

### 5. Migrate and Seed the Database

Now we need to create the tables (Users, Masterlist) and fill the Masterlist with dummy data.
Run this command in your terminal:

```bash
php artisan migrate --seed

```

*If it asks if you want to create the database, type `yes`.*

---

##  Running the Application

To run this application, you **MUST have two separate terminal windows open at the same time**.

**Terminal 1: Start the Backend (Laravel)**

```bash
php artisan serve

```

**Terminal 2: Start the Frontend (Vite/React)**

```bash
npm run dev

```

Now, open your browser and go to: **`http://localhost:8000`**

---

## Architecture Crash Course (Where do I write code?)

If you are new to Laravel + Inertia + React, here is where everything lives:

* **Frontend UI (React):** `resources/js/Pages/`
* *Example:* You will find the Login screen at `resources/js/Pages/Auth/Login.jsx`


* **Backend Logic (Controllers):** `app/Http/Controllers/`
* *Example:* The login validation logic is in `app/Http/Controllers/AuthController.php`


* **Database Tables (Models):** `app/Models/`
* *Example:* The PHP class that talks to the users table is `app/Models/User.php`


* **Routing (URLs):** `routes/`
* *Example:* To add a new page URL, edit `routes/web.php` or `routes/auth.php`



---

##  Contribution Rules (Branching)

Please **do not** write code directly on the `main` branch.

1. Create a new branch for your feature:
```bash
git checkout -b feature/name-of-your-feature

```


2. Write your code, save, and commit:
```bash
git add .
git commit -m "Added my new feature"

```


3. Push your branch to GitHub:
```bash
git push origin feature/name-of-your-feature

```


4. Go to GitHub and open a **Pull Request (PR)** so the team can review your code before merging it into main.

```

```
