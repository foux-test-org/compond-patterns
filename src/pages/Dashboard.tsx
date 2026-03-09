import { useRef } from "react";
import { withAuth } from "../hocs/withAuth.tsx";
import { withLayout } from "../hocs/withLayout.tsx";
import { Tabs } from "../components/Tabs/index.ts";
import { Card } from "../components/Card/index.ts";
import { Input } from "../components/Input/Input.tsx";
import { DataFetcher } from "../components/DataFetcher.tsx";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>

      {/* memo(forwardRef) input */}
      <div className={styles.searchSection}>
        <Input ref={searchRef} label="Search" placeholder="Search metrics..." />
      </div>

      {/* Compound component: Tabs */}
      <Tabs defaultTab="overview">
        <Tabs.List>
          <Tabs.Tab id="overview">Overview</Tabs.Tab>
          <Tabs.Tab id="analytics">Analytics</Tabs.Tab>
          <Tabs.Tab id="reports">Reports</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="overview">
          <div className={styles.grid}>
            {/* Compound component: Card */}
            <Card>
              <Card.Header>Revenue</Card.Header>
              <Card.Body>
                <span className={styles.metric}>$12,450</span>
              </Card.Body>
              <Card.Footer>+8.2% from last month</Card.Footer>
            </Card>
            <Card>
              <Card.Header>Users</Card.Header>
              <Card.Body>
                <span className={styles.metric}>1,284</span>
              </Card.Body>
              <Card.Footer>+3.1% from last month</Card.Footer>
            </Card>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="analytics">
          {/* Render prop pattern */}
          <DataFetcher<{ message: string }>
            url="/api/analytics"
            render={(data, loading) =>
              loading ? (
                <p>Loading analytics...</p>
              ) : (
                <Card>
                  <Card.Body>{data?.message}</Card.Body>
                </Card>
              )
            }
          />
        </Tabs.Panel>
        <Tabs.Panel id="reports">
          <p>Reports content here</p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

// Double HOC wrapping: withLayout(withAuth(Dashboard))
// Fiber walk must unwrap through both to find Dashboard
export const DashboardPage = withLayout(withAuth(Dashboard));
