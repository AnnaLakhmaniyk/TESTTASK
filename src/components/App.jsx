import { HeaderNav } from './HeaderNav/HederNav';
import { Hero } from './Hero/Hero';
import { Users } from './Users/Users';
import { SingUp } from './SingUp/SingUp';

export const App = () => {
  return (
    <div>
      <HeaderNav />
      <Hero />
      <Users />
      <SingUp />
    </div>
  );
};
