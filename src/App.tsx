import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CampusFrance from './components/CampusFrance';
import Services from './components/Services';
import Tarifs from './components/Tarifs';
import APropos from './components/APropos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <CampusFrance onNavigate={setCurrentPage} />
            <Services onNavigate={setCurrentPage} />
            <Tarifs onNavigate={setCurrentPage} />
          </>
        );
      case 'campus-france':
        return <CampusFrance onNavigate={setCurrentPage} fullPage />;
      case 'services':
        return <Services onNavigate={setCurrentPage} fullPage />;
      case 'tarifs':
        return <Tarifs onNavigate={setCurrentPage} fullPage />;
      case 'a-propos':
        return <APropos />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <CampusFrance onNavigate={setCurrentPage} />
            <Services onNavigate={setCurrentPage} />
            <Tarifs onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
