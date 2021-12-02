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
          <title>Boardgame - Dutch Quiz Questions</title>
          <link rel="icon" href="/icon.svg" />
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
          <meta name="description" content="Description"/>
          <meta name="keywords" content="boardgame quiz cards questions answers categories bordspel trivia vragen antwoorden categorieen kaarten kaartjes speelkaarten playing play game spel natuurkunde geschiedenis wetenschap aarderijkskunde culture movies films muziek art schilder kunst geography history nature sience"/>
          <meta name="theme-color" content="#dfbc90"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-title" content="Boardgame - Dutch Quiz Questions"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
          <meta name="msapplication-navbutton-color" content="white"/>
          <meta name="msapplication-TileColor" content="#dfbc90"/>
          <meta name="msapplication-TileImage" content="/icon.svg"/>
          {/* <meta name="msapplication-config" content="browserconfig.xml"/> */}
          <meta name="application-name" content="Boardgame - Dutch Quiz Questions"/>
          <meta name="msapplication-tooltip" content="Draw questions out of 5 categories"/>
          <meta name="msapplication-starturl" content="/"/>
          <meta name="msapplication-tap-highlight" content="no"/>
          <meta name="full-screen" content="yes"/>
          <meta name="browsermode" content="application"/>
          <meta name="nightmode" content="disable"/>
          <meta name="viewport" content="uc-fitscreen=yes"/>
          <meta name="layoutmode" content="fitscreen/standard"/>
          <meta name="imagemode" content="force"/>
          <meta name="screen-orientation" content="portrait"/>
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