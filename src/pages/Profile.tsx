import { Card } from "../components/Card/index.ts";
import { DataFetcher } from "../components/DataFetcher.tsx";
import styles from "./Profile.module.css";

// No HOC wrapping — simple page for comparison
export function ProfilePage() {
  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Profile</h1>

      {/* Render prop pattern */}
      <DataFetcher<{ message: string }>
        url="/api/profile"
        render={(data, loading) =>
          loading ? (
            <p>Loading profile...</p>
          ) : (
            <Card>
              <Card.Header>User Info</Card.Header>
              <Card.Body>
                <p>{data?.message}</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>42</span>
                    <span className={styles.statLabel}>Projects</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>128</span>
                    <span className={styles.statLabel}>Commits</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )
        }
      />
    </div>
  );
}
