import React from 'react';
import CardEdit from '../card_edit/card_edit';
import styles from "./editor.module.css"

const Editor = ({cards}) => (
           <section className={styles.editor}>
               <h1 className={styles.title}>Cark-Maker</h1>
               {cards.map(i=>(
                   <CardEdit card={i}/>
               ))}
           </section>
    );

export default Editor;