interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="relative gradient-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a84c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-[#c9a84c]/20 rounded-full mb-6">
              <span className="text-[#c9a84c] text-sm font-medium">
                🎓 Accompagnement Campus France
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Votre avenir à l'étranger commence{' '}
              <span className="text-[#c9a84c]">ici</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              HB72 Services vous accompagne dans toutes vos démarches d'inscription pour étudier en France et à l'étranger. De la candidature à l'obtention du visa, nous sommes à vos côtés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => { onNavigate('campus-france'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-gold text-base"
              >
                Découvrir nos offres
              </button>
              <button
                onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-3 border-2 border-[#c9a84c] text-[#c9a84c] rounded-md font-semibold hover:bg-[#c9a84c] hover:text-white transition-all text-base"
              >
                Nous contacter
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              <div className="text-center md:text-left">
                <p className="text-[#c9a84c] text-2xl md:text-3xl font-bold">100+</p>
                <p className="text-white/60 text-sm">Étudiants accompagnés</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[#c9a84c] text-2xl md:text-3xl font-bold">95%</p>
                <p className="text-white/60 text-sm">Taux de réussite</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[#c9a84c] text-2xl md:text-3xl font-bold">5+</p>
                <p className="text-white/60 text-sm">Années d'expérience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#1a2744] border border-[#c9a84c]/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🇫🇷</div>
                  <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Campus France
                  </h3>
                  <p className="text-white/70 text-sm">
                    Procédure Études en France
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="text-[#c9a84c] mr-2">✓</span>
                      Inscription en ligne
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="text-[#c9a84c] mr-2">✓</span>
                      Choix des formations
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="text-[#c9a84c] mr-2">✓</span>
                      Dossier complet
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="text-[#c9a84c] mr-2">✓</span>
                      Préparation entretien
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#c9a84c] rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">📚</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
