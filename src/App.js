import { QueryClient, QueryClientProvider } from "react-query";
import AlbumBanner from "./component/AlbumBanner/AlbumBanner";
import Navigation from "./component/Navigation/Navigation";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex">
        <Navigation />
        <AlbumBanner />
      </section>
    </QueryClientProvider>
  );
}

export default App;
