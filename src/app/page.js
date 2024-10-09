import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav id={styles.navbar}>
        <h1>ChemBioKh</h1>
        <div id={styles.navbtn}>
          <a href=""><h1>Курсы</h1></a>
          <a href=""><h1>Для</h1></a>
          <a href=""><h1>Абитуриентов</h1></a>
        </div>
        <div id={styles.navbardiv}>
          <button href="https://t.me/chembioKh"><h1>Записаться</h1></button>
        </div>
      </nav>
      <div>
        <h1 id={styles.maintext}>Вам нужно что бы через год родственники говорили "ЭЭЭЭЭ ЖИЯН МАЛАДЕС, ТАБРИКЛЕЙШИН" ???🤘 А для этого надо учиться в качественном месте с четкими преподавателями...😎</h1>
      </div>
      <div>
        <h1>🌿 Что вас ждет:</h1>
        <ul id={styles.futurefacts}>
          <li><h2>Авторские материалы с Qr code решениями на Ютубе (никто не даёт такой опшн если чо😏)</h2></li>
          <li><h2>Разбор сложных тем простым словами, ИЗИ КОРОЧЕ ВСЁ БУДЕТ!</h2></li>
        </ul>
      </div>
      <div id={styles.whychooseusdiv}>
        <h1>🧪 Почему выбирают нас:</h1>
        <ul id={styles.whychooseus}>
          <li><h2>Малые группы для максимального внимания к каждому (4-5 учеников в группе ИИИИУУУУ🖐🏾)</h2></li>
          <li><h2>Возможность задать любые вопросы и получить подробные ответы (УЧИТЕЛЬ 24/7 ОНЛАЙН 🙂‍↔️👥) </h2></li>
        </ul>
      </div>
      <div id={styles.forwhodiv}>
        <h1>🔬 Кому подойдет:</h1>
        <ul id={styles.forwho}>
          <li><h2>Ученикам 9-11 классов, стремящимся к высоким результатам.</h2></li>
          <li><h2>Или просто ЛЮББОМУ🤝</h2></li>
        </ul>
      </div>
      <div id={styles.coursesdiv}>
        <h1>📚 Курсы: </h1>
        <div id={styles.courses}>
          <div>
            <h1>🧬</h1>
            <h1>Биология</h1>
          </div>
          <div>
            <h1>🧪</h1>
            <h1>Химия</h1>
          </div>
          <div>
            <h1>🧬🧪</h1>
            <h1>Биология + Химия</h1>
          </div>
        </div>
      </div>
      <div id={styles.footerdiv}>
        <h1 id={styles.footerdivtext}>Успейте записаться, уроки ведутся так же как это объявление😂😎</h1>
        <div id={styles.footerbtn}>
          <a href="https://t.me/chembioKh"><h2>Телеграм: @chembioKh</h2></a>
          <a href="tel:+998(94)646-08-45"><h2>Запись и подробности по телефону: [ +998(94)646-08-45 ]</h2></a>
        </div>
      </div>
    </div>
  );
}
