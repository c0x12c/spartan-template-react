import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

import { Demo } from '~shared/organisms';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  );
}

export default App;
