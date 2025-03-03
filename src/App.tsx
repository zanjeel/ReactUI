import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';
import ShowcasePage from './pages/ShowcasePage';
import TextAnimationPage from './pages/TextAnimationPage';
import CardsPage from './pages/CardsPage';
import BackgroundsPage from './pages/BackgroundsPage';
import TypewriterComponent from './components/text-animations/TypewriterComponent';
import FadeInComponent from './components/text-animations/FadeInComponent';
import GlitchComponent from './components/text-animations/GlitchComponent';
import WaveComponent from './components/text-animations/WaveComponent';
import GradientComponent from './components/text-animations/GradientComponent';
import BasicCardComponent from './components/cards/BasicCardComponent';
import HoverCardComponent from './components/cards/HoverCardComponent';
import GlassCardComponent from './components/cards/GlassCardComponent';
import ParticlesBackgroundComponent from './components/backgrounds/ParticlesBackgroundComponent';
import GradientBackgroundComponent from './components/backgrounds/GradientBackgroundComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/text-animations" element={<TextAnimationPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/backgrounds" element={<BackgroundsPage />} />
        <Route path="/text-animations/typewriter" element={<TypewriterComponent />} />
        <Route path="/text-animations/fade-in" element={<FadeInComponent />} />
        <Route path="/text-animations/glitch" element={<GlitchComponent />} />
        <Route path="/text-animations/wave" element={<WaveComponent />} />
        <Route path="/text-animations/gradient" element={<GradientComponent />} />
        <Route path="/cards/basic" element={<BasicCardComponent />} />
        <Route path="/cards/hover" element={<HoverCardComponent />} />
        <Route path="/cards/glass" element={<GlassCardComponent />} />
        <Route path="/backgrounds/particles" element={<ParticlesBackgroundComponent />} />
        <Route path="/backgrounds/gradient" element={<GradientBackgroundComponent />} />
      </Routes>
    </Router>
  );
}

export default App;