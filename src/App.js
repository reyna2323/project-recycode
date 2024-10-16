import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import ImpactPage from './pages/ImpactPage';
import TextileCollectionPage from './pages/TextileCollectionPage';
import TeamPage from './pages/TeamPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mission" element={<MissionPage />} />
                <Route path="/impact" element={<ImpactPage />} />
                <Route path="/textile-collection" element={<TextileCollectionPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
