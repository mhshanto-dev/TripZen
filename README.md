# TripZen — Travel Booking Platform

TripZen is a full-stack travel booking web application that lets users discover destinations, explore detailed trip information, and manage bookings through a clean, fully responsive interface. Built with the Next.js App Router on the frontend and a decoupled Node.js/Express REST API on the backend.

**Live Demo:** https://tripzen-umber.vercel.app/
**Backend Repository:** https://github.com/mhshanto-dev/TripZenServer

---

## Features

- Browse and search travel destinations with detailed trip pages
- Secure authentication with Better Auth, JWT, and Google OAuth
- Protected routes for booking and account-related actions
- Booking management for authenticated users
- Fully responsive UI built with Tailwind CSS
- Decoupled architecture — frontend and backend deployed independently for scalability

## Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (App Router)
- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

**Auth & Backend Integration**
- [Better Auth](https://www.better-auth.com/)
- JWT-based session handling
- Google OAuth

**Deployment**
- [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm
- A running instance of the [TripZen backend](https://github.com/mhshanto-dev/TripZenServer)

### Installation

```bash
git clone https://github.com/mhshanto-dev/TripZen.git
cd TripZen
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_auth_secret
GOOGLE_CLIENTID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
```

> Never commit your `.env` file. Make sure it is listed in `.gitignore`.

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tripzen/
├── src/
│   ├── app/          # Next.js App Router pages & layouts
│   ├── components/   # Reusable UI components
│   └── lib/          # Auth config, API helpers, utilities
├── public/           # Static assets
└── next.config.mjs
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Any push to the `main` branch triggers an automatic production deployment. Environment variables must be configured separately in the Vercel dashboard under **Settings → Environment Variables**.

## Related Repository

The backend REST API that powers this frontend is maintained separately:
👉 [TripZenServer](https://github.com/mhshanto-dev/TripZenServer)

## Author

**MD. Mehedi Hasan Shanto**
Full Stack Developer (MERN Stack)

- Portfolio: https://mhshanto-dev.vercel.app/
- GitHub: https://github.com/mhshanto-dev
- LinkedIn: https://www.linkedin.com/in/mh-shanto/

## License

This project is open source and available for learning purposes.
