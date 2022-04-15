
import { QueryClient,QueryClientProvider } from 'react-query'
import './App.css';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <h3>Spotify</h3>
    </QueryClientProvider>
  );
}

export default App;
