import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { AboutPreview } from "./components/AboutPreview";
import { BreedsPreview } from "./components/BreedsPreview";
import { ServicesPreview } from "./components/ServicesPreview";
import { ContactSection } from "./components/ContactSection";
import { BreedList } from "./pages/BreedList";
import { BreedDetail } from "./pages/BreedDetail";
import { TeamPage } from "./pages/TeamPage";
import FloatingSocialButtons from "./components/FloatingSocialButtons";
import Reprodutores from "./pages/Reprodutores";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <BreedsPreview />
      <ServicesPreview />
      <ContactSection />
      <FloatingSocialButtons />
    </>
  );
}
export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/racas" element={<BreedList />} />
          <Route path="/racas/:breedId" element={<BreedDetail />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/reprodutores" element={<Reprodutores />} />
        </Routes>
      </Layout>
    </Router>
  );
}
