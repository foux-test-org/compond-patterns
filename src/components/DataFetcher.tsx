import { useState, useEffect, type ReactNode } from "react";

interface DataFetcherProps<T> {
  url: string;
  render: (data: T | null, loading: boolean, error: string | null) => ReactNode;
}

// Render prop pattern — the rendered UI comes from the parent's render function,
// NOT from this component. Fiber walk lands here but the actual UI is defined elsewhere.
export function DataFetcher<T>({ url, render }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetch
    const timer = setTimeout(() => {
      setData({ message: `Data from ${url}` } as T);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [url]);

  return <>{render(data, loading, error)}</>;
}
