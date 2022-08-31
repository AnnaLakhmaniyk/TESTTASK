import Button from 'components/UI/Button';
import logo from '../../img/logo.svg';
import s from './HeaderNav.module.css';
export const HeaderNav = () => {
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <div className={s.logoWrap}>
          <div className={s.logo}>
            <img src={logo} alt="" />
          </div>
          <p> TESTTASK</p>
        </div>

        <div>
          <Button style={{ marginRight: 10 }}>Users </Button>
          <Button> SingUp</Button>
        </div>
      </div>
    </header>
  );
};
