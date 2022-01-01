import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from "../Components/Home/Question";
import Statistique from "../Components/Home/Statistiques";
import Etapes from "../Components/Home/Etapes";

import Banner from "../Components/banner/banner";
import Contact from "../Components/contact/contact";
import "./Home.css";
import { FindAll } from '../redux/actions/CitizenActions';

function Home() {
    const [data, setdata] = useState(0)
  const citizens = useSelector((state) => state.citizens);
  const dispatch = useDispatch();

  useEffect(async () => {
    fetch('/api/citizen/length')
    .then(res=>res.json())
    .then(({count})=>{setdata(count)})
  }, [citizens]);
  return (
    <div className="main">
      <Banner citizen={data}/>
      <Question />
      <Statistique />
      <Etapes />
      <Contact />
    </div>
  );
}

export default Home;
