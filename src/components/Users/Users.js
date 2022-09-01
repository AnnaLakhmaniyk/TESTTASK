import { useEffect, useState } from 'react';
import { getUsers } from 'services/userApi';
import Button from 'components/UI/Button';
import { UserItem } from './UserItem';
import { BasicSelect } from './BasicSelect';

import s from './Users.module.css';

export const Users = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(1);

  const onLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };
  useEffect(() => {
    getUsers(page)
      .then(data => {
        setUser(data.data.users);
        setTotalUsers(Math.ceil(data.data.total_users / 6));
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div className={s.wrap}>
      <section className="container">
        <BasicSelect />
        <h2 className={s.title}> Working with GET request</h2>
        <ul className={s.list}>
          {users.map(el => (
            <UserItem el={el} key={el.id} />
          ))}
        </ul>
        {page !== totalUsers && (
          <div className={s.btn}>
            <Button onClick={onLoadMoreBtn}> Show more</Button>
          </div>
        )}
      </section>
    </div>
  );
};
