import { QueryClient, QueryClientProvider } from "react-query";
import AlbumBanner from "./component/AlbumBanner/AlbumBanner";

import "./App.css";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AlbumBanner />
    </QueryClientProvider>
  );
}

export default App;
