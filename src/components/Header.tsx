import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'campus-france', label: 'Campus France' },
    { id: 'services', label: 'Services' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'a-propos', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNav('accueil')}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8d48b] flex items-center justify-center mr-3">
                <span className="text-[#1a2744] font-bold text-sm md:text-base">HB72</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg md:text-xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  HB72 Services
                </h1>
                <p className="text-[#c9a84c] text-xs hidden sm:block">Votre profil, notre expertise</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#c9a84c] bg-white/10'
                    : 'text-white/80 hover:text-[#c9a84c] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a
              href="tel:+221777742181"
              className="btn-gold text-sm inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appelez-nous
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a2744] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#c9a84c] bg-white/10'
                    : 'text-white/80 hover:text-[#c9a84c] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+221777742181"
              className="block w-full text-center btn-gold mt-4"
            >
              📞 Appelez-nous
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
