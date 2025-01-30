# 🐶 DealHound – Sniffing Out the Best Deals!  

**DealHound** is a startup project that aggregates the best deals from multiple e-commerce sites into one place. Users can filter deals by store, discount percentage, and more. 

This project was inspired by my personal experience searching for a **144Hz+ 1440p IPS monitor** across multiple stores, trying to find the best price. Instead of manually checking Newegg, Walmart, Amazon, and Best Buy, **DealHound** does the hard work for you!

---

## 📌 Table of Contents
- [🎯 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🌎 Hosting & Deployment](#-hosting--deployment)
- [💰 Monetization](#-monetization)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🎯 Features
✅ **Find deals from multiple e-commerce sites** (Amazon, Newegg, Best Buy, etc.)  
✅ **Filter by store, discount percentage, and product category**  
✅ **Real-time updates** on newly scraped deals  
✅ **Custom notifications** for price drops  
✅ **Optimized search experience** with fast, responsive UI  

---

## 🛠 Tech Stack

### **Frontend:**
- ⚡ **[React](https://react.dev/)** with **[Next.js](https://nextjs.org/)** for server-side rendering
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** for styling
- 🔄 **[TanStack Query](https://tanstack.com/query/latest)** for API fetching & caching
- 🗄️ **[Redux](https://redux.js.org/)** for state management

### **Backend:**
- 🚀 **[Node.js](https://nodejs.org/)** with **[Express](https://expressjs.com/)** for scalability
- 🗄️ **[PostgreSQL](https://www.postgresql.org/)** or **[MongoDB](https://www.mongodb.com/)** for data storage
- 📦 **[Prisma](https://www.prisma.io/)** / **[TypeORM](https://typeorm.io/)** for database interactions
- 🔄 **WebSockets** for real-time deal updates

### **Web Scraping:**
- 🔍 **[Puppeteer](https://pptr.dev/)** for scraping JavaScript-heavy sites
- 🕷️ **[Scrapy](https://scrapy.org/)** (Python) for large-scale scraping
- 🏪 **Public store APIs** when available (to avoid unnecessary scraping)

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Wyatt-Rowland/DealHound.git
cd DealHound
