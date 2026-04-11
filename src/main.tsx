import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter } from "react-router"
import { HelmetProvider } from "react-helmet-async"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { UIProvider } from "./contexts/use-scroll-button.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <HelmetProvider>
      <BrowserRouter>
        <UIProvider>
          <App />
        </UIProvider>
      </BrowserRouter>
    </HelmetProvider>
    {/* </ThemeProvider> */}
  </StrictMode>
)
