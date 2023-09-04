import { BrowserRouter } from "react-router-dom";

import MainRouter from "./router/MainRouter";
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
