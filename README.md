Full Stack E-Commerce + Dashboard & CMS Project
Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023

Welcome to my Full Stack E-Commerce project, featuring an integrated Dashboard and CMS, hosted on GitHub. This project harnesses the latest technologies such as Next.js 13 App Router, React, Tailwind CSS, Prisma, and MySQL to offer a robust online retail platform. Designed to accommodate multiple vendors, this system simplifies complex e-commerce operations through a unified, efficient CMS.

GitHub Repository: https://github.com/jon-jc/e-commerce

Key Features:
Dynamic Admin Dashboard: Utilizing Shadcn UI, our admin dashboard doubles as a CMS and API hub, empowering you to manage multiple vendor stores such as a Shoe Store, Laptop Store, and Suit Store. Each store benefits from individual API route generation for seamless operation.
Comprehensive Category Management: Create, update, and delete product categories to keep your inventory organized and up-to-date.
Advanced Product Management: Effortlessly create, update, and delete products, with support for uploading and changing multiple images.
Customizable Filters: Define and manage filters like Color and Size for products, enhancing the shopping experience for your customers.
Billboard Management: Craft and modify billboards with the ability to link them to categories or display them independently. Our admin panel automates API endpoint creation for these features.
Search and Pagination: Implement efficient search functionalities across categories, products, and other elements, complete with pagination for user convenience.
Featured Products: Highlight top-selling or featured products on the homepage to attract customer attention.
Sales and Orders Overview: Monitor your business performance with a detailed view of orders, sales, and revenue through intuitive graphs.
Clerk Authentication Integration: Implement secure and scalable user authentication with Clerk to safeguard your platform.
Efficient Order Management: Streamline the process of creating and managing orders to ensure customer satisfaction.
Stripe Integration: Incorporate Stripe for secure payment processing and handle webhooks for real-time notifications.
Prerequisites:
Node version 14.x
Getting Started:

Getting Started:
Clone the repository:

``sh
Copy code
git clone https://github.com/jon-jc/e-commerce.git
Install packages:

``sh
Copy code
npm install
Set up your .env file with the necessary keys and URLs for Clerk, Cloudinary, Stripe, and your database.

Connect to PlanetScale, generate Prisma client, and push the Prisma schema:

``sh
Copy code
npx prisma generate
npx prisma db push
Start the application:

``sh
Copy code
npm run dev
Available Commands:
Use npm to execute the following commands for development and deployment:

npm run dev: Launches a development instance of the application.
Explore this repository to jumpstart your journey into the world of e-commerce. Elevate your online store with a professional-grade platform designed to streamline operations and enhance user experience.
