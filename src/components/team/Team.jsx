import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';

const teamData = [
  {
    name: 'Adryan Alexander',
    title: 'Desenvolvedor Front-end',
    image: '../src/assets/adryan-foto.jpeg',
  },
  {
    name: 'Edkarllos Fernando',
    title: 'Desenvolvedor Database',
    image: 'path/to/edkarllos-foto.jpg',
  },
  {
    name: 'Lucas Batista',
    title: 'Desenvolvedor Full-stack',
    image: '../src/assets/lucas-foto-black.jpeg',
  },
  {
    name: 'Nicholas Balbino',
    title: 'Desenvolvedor Full-stack',
    image: 'path/to/nicholas-foto.jpg',
  },
  {
    name: 'Pedro Lopes',
    title: 'Designer',
    image: 'path/to/lopes-foto.jpg',
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2 className="team__title">Nossa Equipe</h2>
      <span className="section__subtitle">Nossos membros</span>
      <div className="team__members">
        {teamData.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
