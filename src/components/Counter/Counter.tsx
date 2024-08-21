import React, { useState } from 'react';
import style from './Counter.module.scss';

type Props = {
  showMessage: (value: boolean) => void;
};

const Counter: React.FC<Props> = ({ showMessage }) => {
  const [count, setCount] = useState<number>(0);

  const onClickMinus = () => {
    showMessage(false);
    setCount(count - 1);
  };

  const onClickPlus = () => {
    showMessage(false);
    setCount(count + 1);
  };

  return (
    <div className={style.counter}>
      <h2 className={style.title}>Counter:</h2>
      <h1 className={style.count}>{count}</h1>
      <div className={style.buttons}>
        <button
          className={`${style.btn}  ${style.btn_minus}`}
          onClick={onClickMinus}
        >
          - Minus
        </button>
        <button
          className={`${style.btn} ${style.btn_plus}`}
          onClick={onClickPlus}
        >
          Plus +
        </button>
      </div>
    </div>
  );
};

export default Counter;
