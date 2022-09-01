import { useEffect, useState } from 'react';

import s from './Users.module.css';
export const UserItem = ({ el }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const element = el.email;
    if (element.length < 23) {
      return setEmail(element);
    }
    return setEmail(element.slice(0, 23) + '...');
  }, [el.email]);

  useEffect(() => {
    const element = el.name;
    if (element.length < 20) {
      return setName(element);
    }
    return setName(element.slice(0, 21) + '...');
  }, [el.name]);

  return (
    <li className={s.item}>
      <div>
        <img
          className={s.image}
          src={el.photo}
          alt={name}
          width="70px"
          height="70px"
        />
      </div>
      <p className={s.titleName}> {name}</p>
      <p className={s.text}>{el.position}</p>
      <a href="{el.email}" className={s.text}>
        {email}
      </a>
      <a href="tel:{el.phone}" className={s.text}>
        {el.phone}
      </a>
    </li>
  );
};
