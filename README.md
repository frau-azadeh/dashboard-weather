# 🌦️ Weather Dashboard

A **modern weather dashboard** built with **Next.js**, **TypeScript**, and **Redux Toolkit** (RTK Query), featuring a responsive and user-friendly design.

## ✨ Features

- 🌍 **Current Weather**: Displays real-time weather conditions based on the user's location.
- 📅 **Weather Forecast**: Provides a 5-day weather forecast.
- 🎨 **Responsive Design**: Optimized for all devices using **Tailwind CSS**.
- ⚡ **Fast Data Fetching**: Powered by **RTK Query** for efficient API calls and caching.

## 🛠️ Tech Stack

- **Next.js**: Framework for server-side rendering and static site generation.
- **TypeScript**: Static type checking for safer code.
- **Redux Toolkit**: State management made simple.
- **RTK Query**: For seamless API integrations.
- **Tailwind CSS**: For utility-first CSS design.
- **Axios**: HTTP client for API requests.

## 🚀 Deployment

The project is live on [Vercel](https://weather-ashy-three-72.vercel.app/) 🌐. 

## 🧰 Installation

Follow these steps to get started:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/frau-azadeh/dashboard-weather.git

2. **Navigate to the project folder:**
    cd dashboard-weather

3. **Install dependencies:**
    npm install
    or
    yarn install

4. **Set up your environment variables:**
    .Create a .env.local file in the project root.
    .Add your API key: NEXT_PUBLIC_WEATHER_API_KEY=your_api_key

## 📡 Using RTK Query
This project uses RTK Query for managing API calls. The weather API integration is defined in:

File: redux/slices/weatherSlice.ts
Key Functions:
createApi
fetchBaseQuery
Features: Automatic caching, refetching, and real-time updates.

## 🖌️ Design
The UI is crafted using Tailwind CSS, ensuring a clean and modern look with full responsiveness. The design adapts seamlessly to various screen sizes.

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m "Add feature-name".
Push to the branch: git push origin feature-name.
Submit a pull request.

👩🏻‍💻Author : Azadeh Sharifi Soltani
