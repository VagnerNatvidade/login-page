import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/auth";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
};

export default App;
