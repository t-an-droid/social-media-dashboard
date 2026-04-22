# 📊 Social Media Analytics Dashboard

A responsive, data-driven analytics dashboard built with **React** and **Recharts** that provides real-time insights into social media performance across multiple platforms — including follower growth, engagement trends, platform distribution, and a content scheduling calendar.

---

## ✨ Features

- **KPI Metric Cards** — At-a-glance stats for Total Followers, Engagement Rate, Total Posts, and Average Likes, each with a positive/negative percentage change indicator
- **Follower Growth Chart** — A line chart tracking daily follower count over a 7-day window
- **Engagement Metrics Chart** — A grouped bar chart visualising Likes, Comments, and Shares per day of the week
- **Platform Distribution Chart** — A pie chart breaking down audience share across Instagram, Facebook, Twitter, and LinkedIn
- **Recent Posts Performance Table** — A sortable data table showing individual post stats (likes, comments, shares)
- **Content Calendar** — A scheduling view for upcoming posts with platform-specific colour-coded tags
- **Date Range Selector** — UI control to filter data across Last 7 / 30 / 90 Days
- **Fully Responsive Design** — Mobile-first CSS Grid layout that adapts cleanly to all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework & component architecture |
| Recharts 3 | Data visualisation (Line, Bar, Pie charts) |
| CSS Grid & Flexbox | Responsive layout system |
| Axios | HTTP client (ready for API integration) |
| Create React App | Project scaffolding & build tooling |

---

## 📁 Project Structure

```
social-media-github/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MetricCard.js      # KPI stat card with change indicator
│   │   ├── LineChart.js       # Follower growth line chart
│   │   ├── BarChart.js        # Weekly engagement bar chart
│   │   ├── PieChart.js        # Platform distribution pie chart
│   │   ├── DataTable.js       # Post performance table
│   │   └── Calendar.js        # Scheduled content calendar
│   ├── styles/
│   │   └── App.css            # Global styles & responsive breakpoints
│   ├── App.js                 # Root component & dashboard layout
│   └── index.js               # App entry point
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v16+
- npm v8+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/social-media-dashboard.git

# 2. Navigate into the project directory
cd social-media-dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

The optimised production build will be in the `/build` folder.

---

## 🧩 Component Overview

### `MetricCard`
Displays a single KPI with its title, numeric value, and a colour-coded percentage change (green for positive, red for negative).

### `LineChart`
Renders a Recharts `LineChart` with `ResponsiveContainer` to visualise follower growth over time. Accepts a `data` array of `{ date, followers }` objects.

### `BarChart`
A grouped `BarChart` showing daily engagement broken down into Likes, Comments, and Shares. Accepts a `data` array of `{ name, likes, comments, shares }` objects.

### `PieChart`
A `PieChart` with percentage labels and a legend showing the share of followers per platform. Accepts a `data` array of `{ name, value }` objects.

### `DataTable`
A structured HTML table rendering post-level performance data with columns for Title, Likes, Comments, Shares, and Date.

### `Calendar`
A content scheduling table with colour-coded platform tags (Instagram pink, Facebook blue, Twitter sky, LinkedIn navy).

---

## 📱 Responsive Design

The dashboard uses CSS Grid with `auto-fit` and `minmax()` to create a fluid layout:

- **Desktop (1400px+):** 4-column metrics grid, 3-column charts grid
- **Tablet (768px–1400px):** Automatically reflows to 2 columns
- **Mobile (<768px):** Single-column stacked layout

---

## 🔮 Potential Enhancements

- [ ] Connect to a live social media API (e.g. Meta Graph API, Twitter/X API)
- [ ] Add authentication and per-user dashboard state
- [ ] Implement date range filtering with live data re-fetching
- [ ] Add dark mode toggle
- [ ] Export reports as PDF or CSV
- [ ] Add unit tests with React Testing Library

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---



