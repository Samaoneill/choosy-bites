import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import { Toaster } from "react-hot-toast";
import { TagProvider } from "./context/TagContext";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
});

function App() {
  return (
    <TagProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px", marginTop: "50px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "15px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#674c35",
            color: "#ffffff",
          },
        }}
      />
    </TagProvider>
  );
}

export default App;
