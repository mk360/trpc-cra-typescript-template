import './App.css';
import { useEffect, useState } from 'react';
import { httpBatchLink } from '@trpc/client';
import { createTRPCProxyClient } from '@trpc/react';
import type { AppRouter } from '../../backend/src/app-router';
import env from 'react-dotenv';

const proxyClient = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({
    url: `http://${env.API_HOST}:${env.API_PORT}`
  })]
});

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    (async function getHelloWorld() {
      const response = await proxyClient.helloWorld.query();
      setQuote(response.quote);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {quote}
      </header>
    </div>
  );
}

export default App;
