import { useEffect, useState } from 'react';
import { getUsers } from 'services/userApi';
import Button from 'components/UI/Button';

import s from './Users.module.css';

export const Users = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const onLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    getUsers(page)
      .then(data => setUser(data.data.users))
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div className={s.wrap}>
      <section className="container">
        <h2 className={s.title}> Working with GET request</h2>
        <ul className={s.list}>
          {users.map(el => (
            <li key={el.id} className={s.item}>
              <div>
                <img
                  className={s.image}
                  src={el.photo}
                  alt="{el.name}"
                  width="70px"
                  height="70px"
                />
              </div>
              <p className={s.titleName}> {el.name}</p>
              <p className={s.text}>{el.position}</p>
              <a href="{el.email}" className={s.text}>
                {el.email}
              </a>
              <a href="tel:{el.phone}" className={s.text}>
                {el.phone}
              </a>
            </li>
          ))}
        </ul>
        <div className={s.btn}>
          <Button onClick={onLoadMoreBtn}> Show more</Button>
        </div>
      </section>
    </div>
  );
};
