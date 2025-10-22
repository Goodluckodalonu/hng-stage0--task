# HNG Profile Card - Stage 0 && Stage 1 Task

This project is part of the **HNG Internship Stage 0 Task**, showcasing a personal **Profile Card**, **About Page**, and **Contact Page**.  
It highlights frontend development fundamentals — semantic HTML, structured CSS layouts, and form validation with vanilla JavaScript.


## Features

- **Responsive Layout:** Works seamlessly across devices using flexible CSS styling.  
- **Profile Card:** Displays name, role, hobbies, dislikes, and social media links.  
- **About Page:** Includes bio, personal goals, confidence areas, and motivational notes.  
- **Contact Form:** Validates input fields (name, email, subject, message) with custom error messages and a success prompt.  
- **Navigation Bar:** Links between all sections (`About`, `Contact`, `Profile`) with an active state indicator.  
- **Test IDs:** Each element includes `data-testid` attributes for easy testing and automation.

## Tech Stack

- **HTML5** – semantic structure for accessibility and clarity  
- **CSS3** – external stylesheets for design consistency and responsiveness  
- **JavaScript (Vanilla)** – form validation, DOM manipulation, and interaction handling  

## Folder Structure

```

HNG-Profile-Card-Stage0-Task/
│
├── image/
│   ├── logo.webp
│   ├── logo.jpg
│   └── file_00000000da946246bbff4fa3ba86c984-removebg-preview.png
│
├── stage1/
│   ├── contact-us.html
│   ├── profile.html
│   ├── contact.js
│   └── style/
│       ├── style.css
│       └── contact.css
│
├── style/
│   └── about.css
│
└── index.html  (About Me Page)

````

## Getting Started

Follow these steps to view or edit the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Goodluckodalonu/hng-stage0--task.git
````

### 2. Navigate into the project folder

```bash
cd hng-stage0--task
```

### 3. Open in a browser

Simply open `index.html` (or `stage1/profile.html`, `stage1/contact-us.html`) in your preferred browser.

> Tip: You can also open the folder in **VS Code** and use the **Live Server** extension for easier previewing.

## Form Validation Logic

The contact form uses **vanilla JavaScript** to:

* Check that all required fields are filled.
* Validate the email format.
* Ensure the message has at least 10 characters.
* Show dynamic error and success messages.

When the form is valid, it simulates a submission delay, displays a success message, and refreshes automatically.

## Live link

**View the project live:** [https://hng-stage1-me.netlify.app/](https://hng-stage1-me.netlify.app/)

## Test Attributes

This project includes `data-testid` attributes across key components to ensure compatibility with automated testing environments.

Feedback & Contributions

This project is open source and contributions are welcome!
If you’d like to improve the code, fix bugs, or suggest new features:

Fork the repo

Create a new branch (git checkout -b feature-name)

Commit your changes

Push to your fork

Submit a Pull Request

Feedback, suggestions, and issues are highly appreciated, they help make this project better.
