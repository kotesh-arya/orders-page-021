# Orders-page 021 trade

## Overview

This project is a **Stock Dashboard** application that provides users withstatic layout that includes such as:
- Viewing stock details
- Filtering stocks
- Handling client orders
- Displaying notifications with badges
- Using dropdown menus for navigation

The project makes use of **React**, **TailwindCSS** for styling, and integrates **lucide-react** for icons, including an interactive dropdown, badge elements, and more. The purpose of this project is to create a highly interactive, responsive, and visually appealing dashboard for stock-related activities.

## Features

- **Stock Dashboard Interface**: Display stock details in a tabular format with interactive features.
- **Responsive Design**: The UI is responsive, offering a seamless experience across devices.
- **Dropdown Menus**: Dynamic dropdown menus that appear on hover and display submenu items if applicable.
- **Iconography**: Use of icons for visual enhancement (e.g., `ChevronDown`, `X`, etc.).

## Approach

The application follows a **component-based** approach, focusing on reusable components to ensure maintainability and scalability. Below is an explanation of the key elements and their roles in the application.

### 1. **Components**

- **Table Component**: Displays client orders and stock details in rows and columns.
- **Badge Component**: Displays badges for stocks, clients, or any entity in a rounded, customizable format.
- **Input Component**: Used for filtering or searching within the app.
- **Button Component**: Interactive buttons with multiple variants (e.g., "outline", "destructive").
- **Dropdown Menu**: Interactive menu with submenu items that appear on hover.
  
Each component is styled using **TailwindCSS** to keep the design consistent and responsive.

### 2. **Stock Table**

The stock table is the main display area of the application. Each row contains detailed information about client orders, including time, client name, ticker symbol, side (buy/sell), product type, quantity, and price. The table allows for dynamic rendering based on stock data and supports sorting and filtering.

### 3. **Badges for Notifications**

Badges are used to highlight information about the stocks or clients. These are dynamically generated based on the stock ticker or client name. Each badge also includes an **X icon** that, when clicked, will trigger an action (e.g., removing the badge or hiding it from view).

### 4. **Dropdown Menus**

Dropdown menus are used for easy navigation between different sections, and they are dynamically populated based on the data. Items with submenus show a **ChevronDown icon**, indicating that the user can interact with the item to reveal further options.

### 5. **Interactive Elements**

- **Icons** are used throughout the application to enhance the UI and make it more intuitive (e.g., `ChevronDown` for dropdown, `X` for dismissing badges, `Filter` for sorting).
- **Hover Effects**: Items, such as the dropdown menu and badge dismiss icon, include hover effects to provide better user feedback.


## Project Structure

```plaintext
/my-next-app
├── /components/ui
│   ├── button.tsx
│   ├── input.tsx
│   ├── badge.tsx
│   ├── table.tsx
├── /public
│   └── /assets
├── /utils
│   └── helpers.ts
└── package.json
```
