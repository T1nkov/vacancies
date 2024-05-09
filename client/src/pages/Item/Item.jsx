import { useParams } from "react-router-dom";
import arr from "../../storage/arr.json";
import style from "./style.module.scss";

function Item() {
  const { id } = useParams();

  const [result] = arr.filter((el) => el.id === +id);
  return (
    <div className={style.wrapper}>
      <div className={style.main_info}>
        <h1>{result.name}</h1>

        <div className={style.dop_info}>
          <p>{result.salary}</p>
          <div>•</div>
          <p>{result.workday}</p>
        </div>
        <div className={style.city}>
          <p>{result.city}</p>
        </div>
      </div>

      <div className={style.descript}>
        <h2>Обязанности</h2>
        {result.responsibilities.map((el, index) => (
          <p key={index}>• {el}</p>
        ))}

        <h2>Требования:</h2>
        {result.requirements.map((el, index) => (
          <p key={index}>• {el}</p>
        ))}

        <h2>Условия:</h2>
        {result.conditions.map((el, index) => (
          <p key={index}>• {el}</p>
        ))}
      </div>
    </div>
  );
}

export default Item;
