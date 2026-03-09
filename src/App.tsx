import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard.tsx";
import { ProfilePage } from "./pages/Profile.tsx";
import styles from "./App.module.css";

const SettingsPage = lazy(() => import("./pages/Settings.tsx"));

export default function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SettingsPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
