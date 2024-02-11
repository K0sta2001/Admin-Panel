import MainStack from "./pages/index";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainStack />
    </QueryClientProvider>
  );
}

export default App;
