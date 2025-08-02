import React, { useEffect, useState } from 'react';
import { client } from '../../../sanity/config';

interface SanityTestProps {
  query?: string;
}

const SanityTest: React.FC<SanityTestProps> = ({ query = '*[_type == "page"][0...5]' }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Use the Sanity client
        // @ts-ignore - Ignoring TypeScript error for now
        const result = await client.fetch(`${query}`);
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error fetching from Sanity:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', margin: '20px 0' }}>
      <h2>Sanity Connection Test</h2>
      <p>Query: <code>{query}</code></p>
      
      {loading && <p>Loading data from Sanity...</p>}
      
      {error && (
        <div style={{ color: 'red', padding: '10px', background: '#ffeeee', borderRadius: '4px' }}>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && data && (
        <div>
          <h3>Connection Successful!</h3>
          <p>Data received from Sanity:</p>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: '10px', 
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '300px'
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}

      {!loading && !error && !data && (
        <div style={{ color: 'orange' }}>
          <h3>No Data Found</h3>
          <p>The query returned no results. This could be because:</p>
          <ul>
            <li>No content of this type exists yet in your Sanity dataset</li>
            <li>The query is incorrect</li>
            <li>The connection is working but returned empty results</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SanityTest;
