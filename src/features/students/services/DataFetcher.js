import { useState, useEffect } from 'react';

function DataFetcher(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url);
        setData(await data.json());
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return data;
}

export default DataFetcher;