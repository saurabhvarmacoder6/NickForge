import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import SquadPage from "./pages/SquadPage";
import NotFoundPage from "./pages/NotFoundPage";
import GuidesPage from "./pages/GuidesPage";
import SymbolsPage from "./pages/SymbolsPage";
import FavoritesPage from "./pages/FavoritesPage";
import PreviewPage from "./pages/PreviewPage";
import HistoryPage from "./pages/HistoryPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/squad-name-generator" element={<SquadPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/symbols" element={<SymbolsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
