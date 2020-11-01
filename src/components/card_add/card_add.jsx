import React, { useRef } from "react";
import styles from "./card_add.module.css";

const CardAdd = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDeault();
    const card = {
      id: Date.new(),
      name: nameRef.cuurent.value || "",
      company: companyRef.cuurent.value || "",
      theme: themeRef.cuurent.value,
      title: titleRef.cuurent.value || "",
      email: emailRef.cuurent.value || "",
      message: messageRef.cuurent.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onSubmit(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        ref={nameRef}
        name="name"
        placeholder="name"
      />
      <input
        className={styles.input}
        type="text"
        ref={companyRef}
        name="company"
        placeholder="company"
      />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        ref={titleRef}
        name="title"
        placeholder="title"
      />
      <input
        className={styles.input}
        type="text"
        ref={emailRef}
        name="email"
        placeholder="email"
      />
      <textarea ref={messageRef} name="message" placeholder="message" />
      {/* button */}
      <button>image</button>
      <button name="add" className={styles.del_button} onClick={onSubmit}>
        add
      </button>
    </form>
  );
};

export default CardAdd;
