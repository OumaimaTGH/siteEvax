import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import { Pie } from '@ant-design/charts';
import { FindAll } from '../redux/actions/CitizenActions';



const Dashboard = () => {
   const citizens = useSelector(state => state.citizens)
   const dispatch = useDispatch()
   const [vaccinatedData, setvaccinatedData] = useState(0)
   const [invaccinatedData, setinvaccinatedData] = useState(0)
  useEffect(async() => {
    await dispatch(FindAll())
      citizens.all.map(({vaccinated})=>{
        if(vaccinated == true){
          setvaccinatedData(vaccinatedData + 1)
        }else{
          setinvaccinatedData(invaccinatedData + 1)
        }
      })
  

  }, [citizens])

  const data = [
    {
      type: 'vacciné',
      value: parseInt(vaccinatedData),
    },
    {
      type: 'non vacciné',
      value: parseInt(invaccinatedData),
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};


export default Dashboard;
