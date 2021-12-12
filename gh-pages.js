
import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Legoota/tu4ever-website.git',
  user: {
    name: 'Leo Krebs',
    email: 'leo.krebs@tu4ever.fr'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);