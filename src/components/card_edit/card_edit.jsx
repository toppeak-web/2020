import React from "react";
import styles from './card_edit.module.css'

const CardEdit = ({ card }) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL,
      } = card;
  return (
      <form className={styles.form}>
          <input className={styles.input} type="text" name="name" value={name}/>
          <input className={styles.input} type="text" name="company" value={company}/>
          <select className={styles.select} name="theme" value={theme}>
              <option value="light">light</option>
              <option value="dark">dark</option>
              <option value="colorful">colorful</option>
          </select>
          <input className={styles.input} type="text" name="title" value={title}/>
          <input className={styles.input} type="text" name="email" value={email}/>
          <textarea name="message" value={message}/>
          {/* button */}
          <button>image</button>
          <button name="delete" className={styles.del_button}>
              delete
          </button>
      </form>
  )
};

export default CardEdit;
