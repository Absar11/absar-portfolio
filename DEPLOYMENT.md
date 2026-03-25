# Portfolio Deployment Guide

Follow these steps to deploy your full-stack portfolio for free.

## Phase 0: Push to GitHub
1. Create a **New Repository** on [GitHub](https://github.com/new).
2. Name it (e.g., `portfolio-absar`).
3. Run these commands in your project root:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-absar.git
   git branch -M main
   git push -u origin main
   ```

## Phase 1: Database (Neon.tech)
1. Sign up at [Neon.tech](https://neon.tech/).
2. Create a new project named `portfolio`.
3. Copy the **Connection String** (Direct Connection). It will look like:
   `postgres://alex:password@ep-cool-darkness-123.us-east-2.aws.neon.tech/neondb`
4. **Save this as `DATABASE_URL`.**

---

## Phase 2: Backend (Render.com)
1. Sign up at [Render.com](https://render.com/).
2. Click **New +** > **Web Service**.
3. Connect your GitHub repository.
4. Set the following:
   - **Name**: `portfolio-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
5. Add **Environment Variables**:
   - `DATABASE_URL`: (Paste from Neon)
   - `FRONTEND_URL`: (You will get this from Vercel later, initially set to `*`)
   - `NODE_ENV`: `production`
   - `MAIL_USER`: (Your Gmail)
   - `MAIL_PASS`: (Your App Password)

---

## Phase 3: Frontend (Vercel)
1. Sign up/Login to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project**.
3. Import your GitHub repository.
4. Set the following:
   - **Project Name**: `portfolio-frontend`
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Next.js`
5. Add **Environment Variables**:
   - `NEXT_PUBLIC_API_URL`: `https://your-backend-url.onrender.com/api`
6. Click **Deploy**.

---

## Phase 4: Final Link
1. Once the frontend is deployed, copy its URL (e.g., `https://absar-portfolio.vercel.app`).
2. Go back to **Render** > **Environment Variables**.
3. Change `FRONTEND_URL` from `*` to your Vercel URL.
4. Save and let Render redeploy.

---

## Environment Variables Summary

### Backend (Render)
| Key | Value |
| --- | --- |
| `DATABASE_URL` | `postgres://...` |
| `FRONTEND_URL` | `https://your-app.vercel.app` |
| `NODE_ENV` | `production` |
| `MAIL_USER` | `example@gmail.com` |
| `MAIL_PASS` | `xxxx xxxx xxxx xxxx` |

### Frontend (Vercel)
| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | `https://your-api.onrender.com/api` |

---

## Phase 5: Seed Production Database
Since your Neon database is initially empty, you need to push your project data:
1. Open your terminal in the `backend` folder.
2. Temporarily change the `.env` values to point to your **Neon Connection String**.
3. Run: `npx ts-node src/seed.ts`
4. **Important**: Revert your `.env` changes after seeding to avoid local conflicts.

Alternatively, you can add a "Seed" button to your admin panel or run it as a one-time build step on Render.
