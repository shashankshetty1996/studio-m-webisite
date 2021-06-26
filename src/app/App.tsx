import { FC } from "react";
import ErrorBoundary from "./ErrorBoundary";

const App: FC<{}> = () => {
  return (
    <ErrorBoundary>
      <div className="flex items-center justify-center h-screen">
        <h1>Studio M website launching soon!</h1>
      </div>
    </ErrorBoundary>
  );
};

export default App;
