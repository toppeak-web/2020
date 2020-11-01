import React from 'react';
import CardAdd from '../card_add/card_add';
import CardEdit from '../card_edit/card_edit';
import styles from "./editor.module.css"

const Editor = ({cards, addCard}) => (
           <section className={styles.editor}>
               <h1 className={styles.title}>Cark-Maker</h1>
               {cards.map(i=>(
                   <CardEdit key={i.id} card={i}/>
               ))}
               <CardAdd onAdd={addCard}/>
           </section>
    );

export default Editor;