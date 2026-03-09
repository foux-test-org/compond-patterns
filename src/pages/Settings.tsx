import { withAuth } from "../hocs/withAuth.tsx";
import { Card } from "../components/Card/index.ts";
import { Input } from "../components/Input/Input.tsx";
import styles from "./Settings.module.css";

// Lazy-loaded page (React.lazy in App.tsx) + wrapped with HOC
function Settings() {
  return (
    <div className={styles.settings}>
      <h1 className={styles.title}>Settings</h1>
      <Card>
        <Card.Header>Profile Settings</Card.Header>
        <Card.Body>
          <div className={styles.form}>
            <Input label="Display Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Bio" placeholder="Tell us about yourself" />
          </div>
        </Card.Body>
        <Card.Footer>
          <button className={styles.saveBtn}>Save Changes</button>
        </Card.Footer>
      </Card>
    </div>
  );
}

// Default export for React.lazy — also wrapped with withAuth
const SettingsPage = withAuth(Settings);
export default SettingsPage;
