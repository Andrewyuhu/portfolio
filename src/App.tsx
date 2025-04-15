import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
      </Route>
    </Routes>
  );
}
export default App;
