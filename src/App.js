import { QueryClient, QueryClientProvider } from "react-query";
import AlbumBanner from "./component/AlbumBanner/AlbumBanner";
import Navigation from "./component/Navigation/Navigation";
<<<<<<< HEAD
import Sidebar from "./component/Sidebar/Sidebar";
import Player from "./component/Player/Player";
=======
import { NavigationProvider } from "./context/NavigationContext/NavigationContext";
import AlbumList from "./component/AlbumList/AlbumList";
>>>>>>> 9cd5bb8e6b221d8562c688cd90ea8b25642b8654
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
      <section className="flex">
        <Navigation />
        <div className="flex-1">
          <AlbumBanner />
          <Player />
        </div>
        <Sidebar />
      </section>
=======
     <NavigationProvider>
          <section className="flex overflow-x-hidden">
              <Navigation />
               <main className="w-full">
               <AlbumBanner />
               <AlbumList />
               </main>
               <div className="w-14 bg-black py-6">
               {/* go pro menu goes here */}    
               </div>
           </section>
     </NavigationProvider>
>>>>>>> 9cd5bb8e6b221d8562c688cd90ea8b25642b8654
    </QueryClientProvider>
  );
}

export default App;
