const APropos = () => {
  return (
    <section className="py-16 md:py-24 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-medium mb-4">
            Qui sommes-nous
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            À propos de HB72 Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Une entreprise dakaroise dédiée à la réussite académique et professionnelle des jeunes sénégalais.
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre histoire
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                HB72 Services est née d'un constat simple : trop de jeunes talents sénégalais renoncent à leurs rêves d'études à l'étranger par manque d'accompagnement et d'information.
              </p>
              <p>
                Fondée à Dakar, notre entreprise s'est donnée pour mission de démocratiser l'accès aux études en France et à l'international. Nous croyons que chaque étudiant mérite un accompagnement de qualité, quel que soit son milieu social.
              </p>
              <p>
                Aujourd'hui, nous accompagnons des centaines d'étudiants dans leurs démarches Campus France, mais aussi dans leur insertion professionnelle grâce à nos services de création de CV, lettres de motivation et recherche d'emploi.
              </p>
            </div>
          </div>
          <div className="gradient-navy rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-6xl mb-6">🏢</div>
              <h4 className="text-white text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                HB72 Services
              </h4>
              <p className="text-[#c9a84c] text-lg italic mb-6">"Votre profil, notre expertise."</p>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-white/80">
                  <span className="text-[#c9a84c] mr-3">📍</span>
                  Dakar, Sénégal
                </div>
                <div className="flex items-center text-white/80">
                  <span className="text-[#c9a84c] mr-3">📧</span>
                  hb72services@gmail.com
                </div>
                <div className="flex items-center text-white/80">
                  <span className="text-[#c9a84c] mr-3">📞</span>
                  +221 77 774 21 81
                </div>
                <div className="flex items-center text-white/80">
                  <span className="text-[#c9a84c] mr-3">📞</span>
                  +221 76 940 58 42
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nos valeurs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'Nous visons l\'excellence dans chaque dossier que nous traitons.',
              },
              {
                icon: '🤝',
                title: 'Proximité',
                description: 'Un accompagnement humain et personnalisé pour chaque client.',
              },
              {
                icon: '💡',
                title: 'Transparence',
                description: 'Des tarifs clairs, un suivi régulier, pas de surprise.',
              },
              {
                icon: '🌍',
                title: 'Accessibilité',
                description: 'Rendre les études à l\'étranger accessibles au plus grand nombre.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h4 className="text-lg font-bold text-[#1a2744] mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Notre équipe
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'L\'équipe HB72',
                role: 'Conseillers en orientation',
                description: 'Des professionnels passionnés, formés aux procédures Campus France et au marché de l\'emploi international.',
                emoji: '👨‍💼',
              },
              {
                name: 'Rédacteurs spécialisés',
                role: 'CV & Lettres de motivation',
                description: 'Des experts en rédaction professionnelle qui valorisent votre parcours et vos compétences.',
                emoji: '✍️',
              },
              {
                name: 'Coaches carrière',
                role: 'Préparation entretiens',
                description: 'Des coachs expérimentés pour vous préparer aux entretiens Campus France et professionnels.',
                emoji: '🎤',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#faf8f3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{member.emoji}</span>
                </div>
                <h4 className="text-lg font-bold text-[#1a2744] mb-1">{member.name}</h4>
                <p className="text-[#c9a84c] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
