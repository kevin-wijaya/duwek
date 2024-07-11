# duwek
![banner](/public/banner.png)

**Note**: The project is currently in **[Private Mode]**

## Table of Contents
+ [Description](#description)
+ [Tech Stack](#techstack)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Screenshots](#screenshots)
+ [Author](#author)

## Description <a name = "description"></a>

**duwek** is web-based money management designed for personal finance management. It is built using express framework with MVC architecture. The key features of the app, include: 
* Application Features: 
    - **Dashboard** : Provides a summary of the current month's financial activities
    - **Savings Management** : An interactive UI to manage and track savings
    - **Transactions** : Easily track income and expenses
    - **Categorization** : Organize transactions and budgets into categories for clearer insights
    - **Budgeting** : Helps users track expenses and achieve financial goals efficiently
    - **Responsive Design** : Optimized for mobile users, ensuring a seamless experience across devices

* Security Features:
    - **JWT Authentication and Authorization**: Ensures secure login and authorization 
    - **Forgot Password**: Convenient feature for password recovery via email, powered by Nodemailer
    - **Database Management**: Utilizes simple migration and seeding capabilities

## Tech Stack <a name = "techstack"></a>

- Web Application: Express.JS, EJS, MySQL, JQuery, Tailwind CSS
- Utilities: Json Web Token (JWT), Nodemailer

## Getting Started <a name = "getting_started"></a>

These instructions will guide you through installing the project on your local machine for testing purposes.

### Requirements

This project is built using node 20.11 and NPM 10.2.

### Installation

Clone this repository
```
git clone https://github.com/kevin-wijaya/duwek.git
```
Install dependencies
```
npm install
```
Create `.env.development`
```
cp .env.template .env.development && npm run key:generate
```
Create the database named `duwek` in MySQL, you can execute the following SQL command:
```
CREATE DATABASE IF NOT EXISTS duwek;
```
Migrate the database
```
npm run db:migrate
```
Inside `.env.development`, you should provide google email and app password for forgot password feature. (Note: The app password is different from your email password)
```
EMAIL_USER=<youremail@gmail.com>
EMAIL_PASS="<youremailpassword>"
```
Here is a link if you don't know how to create an app password
```
https://support.google.com/mail/answer/185833?hl=en
```
Now you ready to run the app
```
npm run dev
```

## Usage <a name = "usage"></a>

To use this web application, please follow these steps:
1. Register an account using a valid Gmail address
2. Login to the application
3. Create a new savings account
4. Add a new transaction

## Screenshots <a name = "screenshots"></a>

Here are some screenshots of the application:

![dashboard](https://github.com/kevin-wijaya/resources/raw/main/images/duwek/dashboard.png)

![saving-list](https://github.com/kevin-wijaya/resources/raw/main/images/duwek/saving-list.png)

![saving-add](https://github.com/kevin-wijaya/resources/raw/main/images/duwek/saving-add.png)

![transactions-list](https://github.com/kevin-wijaya/resources/raw/main/images/duwek/transactions-list.png)

![transactions-filter](https://github.com/kevin-wijaya/resources/raw/main/images/duwek/transactions-filter.png)

![budget-list](https://github.com/kevin-wijaya/resources/raw/main/images/duwek/budget-list.png)


## Author <a name = "Author"></a>
- **Kevin Wijaya** 