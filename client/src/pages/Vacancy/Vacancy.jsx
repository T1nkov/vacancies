import { TextField, Button } from "@mui/material";
import style from "./style.module.scss";

function Vacancy() {
  const arr = [
    {
      name: "Менеджер-дизайнер",
      salary: "з/п от 70000 rub",
      workday: "Полный рабочий день",
      city: "Новый Уренгой",
    },
    {
      name: "Ведущий графический дизайнер НЕ УДАЛЕННО",
      salary: "з/п от 80000 rub",
      workday: "Полный рабочий день",
      city: "Москва",
    },
    {
      name: "Работник декорации, дизайнер (ТЦ Амбар)",
      salary: "з/п 29000 rub",
      workday: "Сменный график работы",
      city: "Самара",
    },
    {
      name: "Менеджер-дизайнер",
      salary: "з/п 55000 - 95000 rub",
      workday: "Полный рабочий день",
      city: "Тюмень",
    },
  ];

  return (
    <div className={style.vacancies}>
      <div className={style.search}>
        <TextField fullWidth className={style.searchLine} id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Contained</Button>
      </div>

      <div className={style.vac}>
        {arr.map((el) => {
          return (
            <>
              <div className={style.vacancyWrapper}>
                <h2>{el.name}</h2>
                <div className={style.info}>
                  <p>{el.salary}</p>
                  <p>•</p>
                  <p>{el.workday}</p>
                </div>
                <p className={style.location}>{el.city}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Vacancy;
