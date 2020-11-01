import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "test",
      company:"Samsung",
      theme:"light",
      title: "software engineer",
      email: "xkqvor123@gmail.com",
      message:"go for it",
      fileName: "test",
      fileURL: null
    },
    {
        id: "2",
        name: "test",
        company:"Samsung",
        theme:"dark",
        title: "software engineer",
        email: "xkqvor123@gmail.com",
        message:"go for it",
        fileName: "test",
        fileURL: null
      },
      {
        id: "3",
        name: "test",
        company:"Samsung",
        theme:"colorful",
        title: "software engineer",
        email: "xkqvor123@gmail.com",
        message:"go for it",
        fileName: "test",
        fileURL: null
      },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  const addCard = card=>{
    const updated = [...cards, card]
    setCards(updated)
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
