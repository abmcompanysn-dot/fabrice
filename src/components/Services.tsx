interface ServicesProps {
  onNavigate: (page: string) => void;
  fullPage?: boolean;
}

const Services = ({ onNavigate, fullPage }: ServicesProps) => {
  const services = [
    {
      title: 'Création de CV',
      description: 'Conception d\'un CV professionnel adapté au marché français et international. Mise en page soignée, contenu percutant et adapté à votre secteur d\'activité.',
      icon: '📄',
      features: ['Design professionnel', 'Adapté au marché visé', 'Format Word & PDF', 'Optimisé ATS'],
    },
    {
      title: 'Lettre de motivation',
      description: 'Rédaction de lettres de motivation personnalisées pour vos candidatures universitaires ou professionnelles. Un texte qui reflète votre parcours et vos ambitions.',
      icon: '✍️',
      features: ['Personnalisée', 'Ton professionnel', 'Adaptée à l\'offre', 'Relecture incluse'],
    },
    {
      title: 'Demande de stage',
      description: 'Accompagnement dans votre recherche de stage : orientation, préparation du dossier de candidature, et conseils pour décrocher un stage en entreprise.',
      icon: '💼',
      features: ['Recherche ciblée', 'Dossier complet', 'Préparation entretien', 'Suivi personnalisé'],
    },
    {
      title: 'Demande d\'emploi',
      description: 'Aide à la recherche d\'emploi et à la constitution de dossiers de candidature solides. Préparation aux entretiens et négociation salariale.',
      icon: '🎯',
      features: ['Stratégie de recherche', 'Candidatures ciblées', 'Coaching entretien', 'Suivi des réponses'],
    },
  ];

  return (
    <section className={`py-16 md:py-24 ${fullPage ? 'pt-8' : ''} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-medium mb-4">
            Nos services complémentaires
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Autres services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            En complément de notre accompagnement Campus France, nous proposons des services 
            pour booster votre carrière professionnelle et vos candidatures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#faf8f3] rounded-2xl p-8 card-shadow border border-gray-100 hover:border-[#c9a84c]/30 transition-colors"
            >
              <div className="flex items-start mb-6">
                <span className="text-4xl mr-4">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2744] mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center">
                    <span className="text-[#c9a84c] mr-2 text-sm">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="gradient-navy rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pourquoi choisir HB72 Services ?
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Notre engagement : un accompagnement personnalisé, professionnel et humain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Accompagnement personnalisé', desc: 'Chaque dossier est unique, nous adaptons notre approche à votre profil.' },
              { icon: '⚡', title: 'Réactivité', desc: 'Nous traitons vos demandes rapidement pour respecter les délais.' },
              { icon: '🎓', title: 'Expertise', desc: 'Connaissance approfondie des procédures Campus France et du marché.' },
              { icon: '💰', title: 'Tarifs accessibles', desc: 'Des prix justes et transparents, adaptés aux étudiants sénégalais.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {!fullPage && (
          <div className="text-center mt-12">
            <button
              onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn-navy text-base"
            >
              Demander un devis gratuit →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
