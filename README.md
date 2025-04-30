<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Wizard Component in Vue.js

A Laravel + Vue.js project featuring a wizard component.

## Setup Instructions

1. Clone the repository
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install Node.js dependencies:
   ```bash
   npm install
   ```
4. Set up environment file:
   - Copy the environment template file:
     ```bash
     cp .env.example .env
     ```
   - Generate a new application key:
     ```bash
     php artisan key:generate
     ```
   Note: Never commit the `.env` file to version control. Each environment should have its own `.env` file with appropriate settings.

5. Start the development server:
   ```bash
   php artisan serve
   ```
6. In a separate terminal, compile assets:
   ```bash
   npm run dev
   ```

## Docker Setup

If you prefer using Docker:

1. Copy the environment template file:
   ```bash
   cp .env.example .env
   ```

2. Start the containers:
   ```bash
   docker-compose up -d
   ```

3. Generate application key:
   ```bash
   docker-compose exec app php artisan key:generate
   ```

The application will be available at http://localhost:8000


# wizard-component-in-vuejs
A wizard component build using Vue.js
