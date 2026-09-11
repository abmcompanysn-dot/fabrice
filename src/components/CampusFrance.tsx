interface CampusFranceProps {
  onNavigate: (page: string) => void;
  fullPage?: boolean;
}

const CampusFrance = ({ onNavigate, fullPage }: CampusFranceProps) => {
  const steps = [
    {
      number: '01',
      title: 'Consultation initiale',
      description: 'Évaluation de votre profil, de vos diplômes et de vos objectifs académiques.',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'Choix des formations',
      description: 'Sélection des universités et formations adaptées à votre parcours et vos ambitions.',
      icon: '🎓',
    },
    {
      number: '03',
      title: 'Constitution du dossier',
      description: 'Aide à la rédaction des lettres de motivation et préparation de tous les documents requis.',
      icon: '📋',
    },
    {
      number: '04',
      title: 'Inscription en ligne',
      description: 'Accompagnement dans la procédure "Études en France" sur la plateforme Campus France.',
      icon: '💻',
    },
    {
      number: '05',
      title: 'Préparation entretien',
      description: 'Simulation d\'entretien et conseils pour réussir l\'entretien Campus France.',
      icon: '🎤',
    },
    {
      number: '06',
      title: 'Suivi & Visa',
      description: 'Suivi de votre candidature et aide pour la demande de visa étudiant.',
      icon: '✈️',
    },
  ];

  const profiles = [
    'Bacheliers et élèves de Terminale',
    'Titulaires d\'un BTS ou DUT',
    'Licenciés souhaitant poursuivre en Master',
    'Titulaires d\'un Master souhaitant un Doctorat',
    'Professionnels en reconversion',
  ];

  return (
    <section className={`py-16 md:py-24 ${fullPage ? 'pt-8' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-medium mb-4">
            Notre activité principale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Accompagnement Campus France
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nous vous accompagnons de A à Z dans votre projet d'études en France. 
            De la constitution de votre dossier à l'obtention de votre visa, 
            notre équipe d'experts est à vos côtés à chaque étape.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 card-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{step.icon}</span>
                <span className="text-[#c9a84c] font-bold text-sm">ÉTAPE {step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Who can apply */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Qui peut postuler ?
              </h3>
              <ul className="space-y-4">
                {profiles.map((profile, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#c9a84c] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1a2744] to-[#2a3f6b] rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📅</div>
              <h4 className="text-white text-xl font-bold mb-3">Calendrier Campus France</h4>
              <p className="text-white/80 mb-4">
                La campagne d'inscription débute généralement en octobre et se termine en décembre pour la rentrée de septembre suivante.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-[#c9a84c] font-semibold">📌 Contactez-nous dès maintenant pour ne pas manquer les délais !</p>
              </div>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-[#faf8f3] border border-[#c9a84c]/20 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-[#1a2744] mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            📄 Documents généralement requis
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Relevés de notes (derniers diplômes)',
              'Diplômes obtenus (certifiés)',
              'CV à jour',
              'Lettre de motivation',
              'Pièce d\'identité / Passeport',
              'Photos d\'identité',
              'Attestation de travail (si applicable)',
              'Certificats de langue (DELF/DELF, TCF, IELTS)',
              'Projet d\'étude détaillé',
            ].map((doc, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg px-4 py-3">
                <span className="text-[#c9a84c] mr-3">📎</span>
                <span className="text-gray-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {!fullPage && (
          <div className="text-center">
            <button
              onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-gold text-base"
            >
              Commencer mon accompagnement →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CampusFrance;
