interface TarifsProps {
  onNavigate: (page: string) => void;
  fullPage?: boolean;
}

const Tarifs = ({ onNavigate, fullPage }: TarifsProps) => {
  const tarifs = [
    {
      category: 'Accompagnement Campus France',
      icon: '🎓',
      plans: [
        {
          name: 'Pack Essentiel',
          price: '50 000',
          unit: 'FCFA',
          description: 'Accompagnement de base pour la procédure Campus France',
          features: [
            'Consultation initiale',
            'Aide au choix des formations (3 vœux)',
            'Relecture du projet d\'étude',
            'Aide à l\'inscription en ligne',
          ],
          popular: false,
        },
        {
          name: 'Pack Complet',
          price: '100 000',
          unit: 'FCFA',
          description: 'Accompagnement complet et suivi personnalisé',
          features: [
            'Tout le Pack Essentiel',
            'Choix illimité de formations',
            'Rédaction lettre de motivation',
            'Création de CV',
            'Préparation entretien Campus France',
            'Suivi du dossier jusqu\'à la fin',
          ],
          popular: true,
        },
        {
          name: 'Pack Premium',
          price: '150 000',
          unit: 'FCFA',
          description: 'Accompagnement total incluant la demande de visa',
          features: [
            'Tout le Pack Complet',
            'Aide à la demande de visa',
            'Préparation dossier visa complet',
            'Conseils logement & arrivée en France',
            'Suivi post-admission',
            'Support WhatsApp illimité',
          ],
          popular: false,
        },
      ],
    },
    {
      category: 'Services individuels',
      icon: '📋',
      plans: [
        {
          name: 'Création de CV',
          price: '10 000',
          unit: 'FCFA',
          description: 'CV professionnel personnalisé',
          features: [
            'Design professionnel',
            'Adapté à votre secteur',
            'Format Word + PDF',
            '1 révision incluse',
          ],
          popular: false,
        },
        {
          name: 'Lettre de motivation',
          price: '7 500',
          unit: 'FCFA',
          description: 'Lettre personnalisée et percutante',
          features: [
            'Rédaction sur mesure',
            'Adaptée à l\'offre/formation',
            'Ton professionnel',
            '1 révision incluse',
          ],
          popular: false,
        },
        {
          name: 'Pack Recherche Stage',
          price: '25 000',
          unit: 'FCFA',
          description: 'Accompagnement recherche de stage',
          features: [
            'CV + Lettre de motivation',
            'Orientation sectorielle',
            'Préparation entretien',
            'Suivi pendant 1 mois',
          ],
          popular: false,
        },
        {
          name: 'Pack Recherche Emploi',
          price: '35 000',
          unit: 'FCFA',
          description: 'Accompagnement complet recherche d\'emploi',
          features: [
            'CV + Lettre de motivation',
            'Stratégie de candidature',
            'Coaching entretiens',
            'Suivi pendant 2 mois',
          ],
          popular: false,
        },
      ],
    },
  ];

  return (
    <section className={`py-16 md:py-24 ${fullPage ? 'pt-8' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-medium mb-4">
            Tarifs transparents
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nos tarifs
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Des prix clairs et accessibles, sans surprise. Choisissez la formule 
            qui correspond le mieux à vos besoins.
          </p>
        </div>

        {/* Tarifs */}
        {tarifs.map((section, sIndex) => (
          <div key={sIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-3xl mr-3">{section.icon}</span>
              <h3 className="text-2xl font-bold text-[#1a2744]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {section.category}
              </h3>
            </div>
            <div className={`grid gap-6 ${section.plans.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {section.plans.map((plan, pIndex) => (
                <div
                  key={pIndex}
                  className={`rounded-2xl p-6 md:p-8 card-shadow relative ${
                    plan.popular
                      ? 'bg-[#1a2744] text-white border-2 border-[#c9a84c] scale-105'
                      : 'bg-white border border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#c9a84c] text-white text-xs font-bold px-4 py-1 rounded-full">
                        POPULAIRE
                      </span>
                    </div>
                  )}
                  <h4 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#1a2744]'}`}>
                    {plan.name}
                  </h4>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-[#c9a84c]' : 'text-[#1a2744]'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ml-1 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.unit}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className={`flex-shrink-0 mr-2 ${plan.popular ? 'text-[#c9a84c]' : 'text-[#c9a84c]'}`}>✓</span>
                        <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-[#c9a84c] text-white hover:bg-[#b8943f]'
                        : 'bg-[#1a2744] text-white hover:bg-[#2a3f6b]'
                    }`}
                  >
                    Choisir ce pack
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note */}
        <div className="bg-[#faf8f3] border border-[#c9a84c]/20 rounded-xl p-6 text-center">
          <p className="text-gray-600">
            <span className="text-[#c9a84c] font-semibold">💡 Note :</span> Les tarifs sont indicatifs et peuvent être ajustés selon la complexité du dossier. 
            Contactez-nous pour un devis personnalisé gratuit.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Paiement possible en plusieurs fois pour les packs Campus France.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
