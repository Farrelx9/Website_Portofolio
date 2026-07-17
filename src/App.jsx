import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import LoadingScreen from "./components/LoadingScreen";

// ==========================================
// CONFIGURATION: SET SIMULATED LOADING DURATION
// ==========================================
// Set the loading time in minutes.
// Examples:
// - 0.05 minutes = 3 seconds (Ideal for testing)
// - 0.1 minutes  = 6 seconds
// - 1.0 minutes  = 60 seconds
const LOADING_DURATION_MINUTES = 0.05; 

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Convert minutes to milliseconds
  const loadingDurationMs = LOADING_DURATION_MINUTES * 60 * 1000;

  return (
    <div>
      {/* 
        Loading Screen Component
        - duration: Total duration of simulated loading in milliseconds
        - show: Boolean visibility controller
        - onComplete: Callback run when loading finishes and exit animation completes
        
        Note: If you want to control this programmatically later using standard functions 
        or react-router-dom navigation states, you can set the `show` prop to your loading state.
      */}
      <LoadingScreen
        duration={loadingDurationMs}
        show={isLoading}
        onComplete={() => {
          setIsLoading(false);
          console.log("Loading complete, portfolio mounted!");
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
