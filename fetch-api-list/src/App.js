import React, { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

const App = () => {
  const [data, setData] = useState([]);        // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p role="alert" style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ListComponent
        items={data}
        keyExtractor="id"
        renderItem={(user) => (
          <div>
            <strong>{user.name}</strong><br />
            <span>{user.email}</span>
          </div>
        )}
      />
    </div>
  );
};

export default App;
