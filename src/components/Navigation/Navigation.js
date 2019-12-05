import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.list}>
      <li>
        <NavLink exact activeClassName={s.active} to={routes.HOME}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName={s.active} to={routes.MOVIES}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
