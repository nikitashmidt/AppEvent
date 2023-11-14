import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { removeBasket } from "../../store/slices/basketSlice";
import { priceRu } from "../../utils/priceRu";

import styles from "./Basket.module.scss";

function Basket() {
  const { basket } = useAppSelector((state) => state.basketSlice);
  const { catalog } = useAppSelector((state) => state.catalogSlice);

  const dispatch = useAppDispatch();

  const basketList = catalog.filter((obj) => basket.includes(obj.id));

  const removeItem = (id: number) => {
    dispatch(removeBasket(id));
  };

  const finalPrice = () => {
    let sum = 0;

    for (let i = 0; i < basketList.length; i++) {
      sum = sum + basketList[i].price;
    }

    return sum;
  };

  return (
    <section className={styles.basket}>
      <div className="container">
        <h1 className={styles.basket__title}>
          {basket.length >= 1
            ? `Список товаров в Вашей корзине - ${basket.length}`
            : "Корзина пуста"}
        </h1>

        <ul className={styles.basket__list}>
          {basketList.map(({ name, id, price, image }) => {
            return (
              <li key={id} className={styles.basket__item}>
                <img
                  className={styles.basket__img}
                  src={image}
                  alt={name}
                  width={50}
                  height={50}
                />
                <div className={styles.basket__name}> {name} </div>
                <div className={styles.basket__price}> {priceRu(price)} </div>
                <button
                  className={styles.basket__btn}
                  onClick={() => removeItem(id)}
                >
                  Убрать
                </button>
              </li>
            );
          })}
        </ul>
        {basket.length >= 1 && (
          <div className={styles.basket__finalPrice}>
            Итоговая сумма к оплате - {priceRu(finalPrice())}
          </div>
        )}
      </div>
    </section>
  );
}

export default Basket;
