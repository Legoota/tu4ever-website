
import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Legoota/tu4ever-website.git',
  user: {
   name: 'Leo Krebs', // update to use your name
   email: 'leo.krebs@tu4ever.fr' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);