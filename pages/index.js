import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [prevQuestions, setPrevQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentSoort, setCurrentSoort] = useState(null);
  const soorten = [
    "A","C","G","N","W"
  ]
  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function drawQuestion(soort) {
    const filteredQuestions = questions.filter((question) => {
      return question.soort === soort && !prevQuestions.includes(question.id);
    });
    if(filteredQuestions.length === 0) {
      //ze zijn op!
      return;
    }
    const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)].id;
    setPrevQuestions([...prevQuestions, randomQuestion]);
    setCurrentQuestion(randomQuestion);
    setCurrentSoort(soort);
  }

  function flipCard() {
    setCurrentSoort(null);
    setCurrentQuestion(null);
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Head>
          <title>Boardgame - vragen</title>
          <meta name="description" content="boardgame questions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
          { currentQuestion==null ?
                soorten.map((soort) => 
                  <div key={soort} className={styles.card+" "+styles.back+' '+styles.soort+" "+styles["soort"+soort]} onClick={function(){
                    drawQuestion(soort);
                  }}>
                    <div alt={"soort "+soort} className={styles["soort"+soort+"_img"]+" "+styles.soort_img}></div>
                  </div>
                )
        :
            <div className={styles.card+" "+styles.front} onClick={flipCard}>
              <div className={styles["bg"+currentSoort]+" "+styles.bgFront}></div>
              <div className={styles.question}>
                {questions[currentQuestion]?.vraag}
              </div>
              <div className={styles.answer}>
                {questions[currentQuestion]?.antwoord}
              </div>
            </div>
          }
      </div>
    </div>
  );
}