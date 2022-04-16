import { QueryClient, QueryClientProvider } from "react-query";
import AlbumBanner from "./component/AlbumBanner/AlbumBanner";
import Navigation from "./component/Navigation/Navigation";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AlbumBanner />
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
