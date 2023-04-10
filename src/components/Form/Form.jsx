import Button from "../Button/Button";
import classes from "./Form.module.scss";
import clsx from "clsx";
import { roboto } from "@/lib/fonts";
import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    fullName: "",
    contact: "",
    description: "",
    file: ""
  });

  const method = "POST";
  const action = "/api/form";

  const sendForm = async event => {
    event.preventDefault();

    try {
      const req = await fetch(action, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const { status } = await req.json();
      alert(status);
      if (!req.ok) {
        throw new Error(status);
      }
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const inputHandler = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form
      onSubmit={sendForm}
      className={clsx(roboto.className, classes.root)}
      method={method}
      action={action}
      encType="multipart/form-data"
    >
      <fieldset className={classes["group-input"]}>
        <div className={classes.field}>
          <input
            onInput={event => inputHandler("fullName", event.target.value)}
            placeholder="Как могу к Вам обращаться?"
            type="text"
            className={classes.input}
          />
        </div>
        <div className={classes.field}>
          <input
            onInput={event => inputHandler("contact", event.target.value)}
            placeholder="Ваша почта или любой контакт"
            type="text"
            className={classes.input}
          />
        </div>
        <div className={classes.field}>
          <textarea
            onInput={event => inputHandler("description", event.target.value)}
            placeholder="Опишите подробно, что бы Вы хотели заказать?"
            className={clsx(classes.input, classes.textarea)}
          ></textarea>
        </div>
        <div className={classes.file}>
          <div className={classes["file-content"]}>Прикрепить файл к обращению</div>
          <input
            onChange={event => inputHandler("file", event.target.files)}
            type="file"
            className={classes["file-input"]}
          />
        </div>
      </fieldset>
      <Button type="button">Отправить</Button>
    </form>
  );
}
