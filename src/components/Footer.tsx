interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a2744] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8d48b] flex items-center justify-center mr-3">
                <span className="text-[#1a2744] font-bold text-sm">HB72</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  HB72 Services
                </h3>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Votre profil, notre expertise. Accompagnement des bacheliers et étudiants dans leurs démarches d'études à l'étranger.
            </p>
            <div className="flex space-x-3">
              <a href="https://wa.me/221777742181" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a84c] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:hb72services@gmail.com" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a84c] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'campus-france', label: 'Campus France' },
                { id: 'services', label: 'Nos services' },
                { id: 'tarifs', label: 'Tarifs' },
                { id: 'a-propos', label: 'À propos' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-white/60 hover:text-[#c9a84c] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Accompagnement Campus France</li>
              <li>Création de CV</li>
              <li>Lettre de motivation</li>
              <li>Recherche de stage</li>
              <li>Recherche d'emploi</li>
              <li>Préparation entretiens</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-[#c9a84c] mr-2 mt-0.5">📞</span>
                <div>
                  <a href="tel:+221777742181" className="text-white/60 hover:text-[#c9a84c] transition-colors block">
                    +221 77 774 21 81
                  </a>
                  <a href="tel:+221769405842" className="text-white/60 hover:text-[#c9a84c] transition-colors block">
                    +221 76 940 58 42
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] mr-2 mt-0.5">📧</span>
                <a href="mailto:hb72services@gmail.com" className="text-white/60 hover:text-[#c9a84c] transition-colors">
                  hb72services@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] mr-2 mt-0.5">📍</span>
                <span className="text-white/60">Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} HB72 Services. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm mt-2 sm:mt-0">
            Votre profil, notre expertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
