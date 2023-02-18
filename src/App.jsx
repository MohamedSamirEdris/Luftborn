import './App.scss';
import React,{useState, useEffect} from 'react';
import Author from './components/Author';
import avatarImg from './assets/image-jeremy.png';
import CardsList from './components/CardsList';
import exerciseIcon from './assets/icon-exercise.svg';
import playIcon from './assets/icon-play.svg';
import selfCareIcon from './assets/icon-self-care.svg';
import socialIcon from './assets/icon-social.svg';
import studyIcon from './assets/icon-study.svg';
import workIcon from './assets/icon-work.svg';

function App () {
  const [timeframes, setTimeframes] = useState ('weekly');
  const [products, setProducts] = useState ([]);
  const banners = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
  ];

  const hanleButton = ({target}) => {
    const time = target.innerText.toLowerCase ();
    setTimeframes (time);
  };

  useEffect (() => {
    fetch ('https://fakestoreapi.com/products?limit=10')
      .then (response => response.json ())
      .then (data => {
        return setProducts (data)
      })
      .catch (error => console.error (error));
  }, []);

  return (
    <div className="App">
      <main>
        <Author avatar={avatarImg} onClick={hanleButton} time={timeframes} />
        <CardsList time={timeframes} banners={banners} products={products}/>
      </main>
    </div>
  );
}

export default App;
