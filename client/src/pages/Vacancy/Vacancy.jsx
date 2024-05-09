import { TextField, Button } from "@mui/material";
import style from "./style.module.scss";
import arr from "../../storage/arr.json";
import {Link} from "react-router-dom";

function Vacancy() {
  return (
    <div className={style.vacancies}>
      <div className={style.search}>
        <TextField
          fullWidth
          className={style.searchLine}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button variant="contained">Contained</Button>
      </div>

      <div className={style.vac}>
        {arr.map((el, index) => {
          return (
            <Link to={`/${el.id}/${el.name}`} key={index}>
              <div className={style.vacancyWrapper}>
                <h2>{el.name}</h2>
                <div className={style.info}>
                  <p>{el.salary}</p>
                  <p>•</p>
                  <p>{el.workday}</p>
                </div>
                <p className={style.location}>{el.city}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Vacancy;
