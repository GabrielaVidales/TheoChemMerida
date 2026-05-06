import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter } from "react-router"
import { HelmetProvider } from "react-helmet-async"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { UIProvider } from "./contexts/use-scroll-button.tsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}

    <HelmetProvider>
      <BrowserRouter>
        <UIProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </UIProvider>
      </BrowserRouter>
    </HelmetProvider>
    {/* </ThemeProvider> */}
  </StrictMode>
)
