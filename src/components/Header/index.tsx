import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import { useEffect } from "react";

import { getCatalog } from "../../store/slices/catalogSlice";
import { updateBasket } from "../../store/slices/basketSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

import LogoIcon from "/public/icons/logo.svg?react";
import BasketIcon from "/public/icons/basket.svg?react";

import styles from "./Header.module.scss";

function Header() {
  const { pathname } = useLocation();

  const { basket } = useAppSelector((state) => state.basketSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCatalog());
    dispatch(updateBasket());
  }, []);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.header__container)}>
        <NavLink
          to="/"
          className={cn(styles.header__link, {
            [styles.header__link_active]: pathname === "/",
          })}
        >
          <LogoIcon className={styles.header__logo} />
          <div className={styles.header__name}>Shmidt Store</div>
          <span className={styles.header__nameBottom}>
            Лучшие девайсы только тут
          </span>
        </NavLink>
        <NavLink
          to="/catalog"
          className={cn(styles.header__catalog, {
            [styles.header__catalog_active]: pathname === "/catalog",
          })}
        >
          Каталог товаров
        </NavLink>
        <NavLink
          to="/basket"
          className={cn(styles.header__basket, {
            [styles.header__basket_active]: pathname === "/basket",
          })}
        >
          <BasketIcon className={styles.header__basketIcon} />
          <span className={styles.header__basketCount}> {basket.length} </span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
