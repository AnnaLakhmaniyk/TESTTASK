import { useState } from 'react';
import { HeaderNav } from './HeaderNav/HederNav';
import { Hero } from './Hero/Hero';
import { Users } from './Users/Users';
import { SingUp } from './SingUp/SingUp';
import Modal from './Modal/Modal';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <HeaderNav toggleModal={toggleModal} />
      <Hero toggleModal={toggleModal} />
      <Users />
      {showModal && (
        <Modal onClose={toggleModal}>
          <SingUp showModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
