import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import EventPage from "./components/views/EventPage";
import InterestPage from "./components/views/InterestPage";
import ClubPage from "./components/views/ClubPage";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/EventPage" element={<EventPage />} />
      <Route path="/InterestPage" element={<InterestPage />} />
      <Route path="/home" element={<ClubPage />} />
    </Routes>
  );
}
