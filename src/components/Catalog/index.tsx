import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { addBasket } from "../../store/slices/basketSlice";
import { priceRu } from "../../utils/priceRu";

import styles from "./Catalog.module.scss";

function Catalog() {
  const { catalog } = useAppSelector((state) => state.catalogSlice);
  const { basket } = useAppSelector((state) => state.basketSlice);

  const dispatch = useAppDispatch();

  const addBasketId = (id: number) => {
    dispatch(addBasket(id));
  };

  return (
    <section className={styles.catalog}>
      <div className="container">
        <h1 className={styles.catalog__title}>
          Список доступных товаров - {catalog.length}
        </h1>
        <ul className={styles.catalog__list}>
          {catalog &&
            catalog.map(({ id, name, image, price }) => {
              return (
                <li key={id} className={styles.catalog__item}>
                  <div className={styles.catalog__imageBlock}>
                    <img
                      className={styles.catalog__image}
                      src={image}
                      alt={name}
                    />
                  </div>
                  <div className={styles.catalog__bottom}>
                    <div className={styles.catalog__name}>{name}</div>
                    <div className={styles.catalog__price}>
                      Цена: {priceRu(price)}
                    </div>
                    {basket.includes(id) ? (
                      <NavLink
                        to="/basket"
                        className={cn(
                          styles.catalog__btn,
                          styles.catalog__btnLink,
                        )}
                      >
                        Оформить заказ
                      </NavLink>
                    ) : (
                      <button
                        className={styles.catalog__btn}
                        onClick={() => addBasketId(id)}
                      >
                        Добавить в корзину
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Catalog;
