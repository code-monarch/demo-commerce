import { BrowserRouter } from "react-router-dom";

import MainRouter from "./router/main-router";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
