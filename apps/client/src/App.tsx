import { Route } from "wouter";
import { ProtoPage } from "./components/pages/ProtoPage";

const App = () => {
  return (
    <div>
      <Route path="/" component={ProtoPage} />
    </div>
  );
};

export default App;
