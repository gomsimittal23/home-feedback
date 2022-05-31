// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [time, setTime] = useState(10);  //setting initial countdown to 15 seconds

  const router = useRouter(); //useRouter hook helps to navigate to pages
  
  useEffect(() => { //useEffect called every time time gets changed
    if(time == -1) //condition gets called when time = -1
    {
      // console.log(time);
      router.push('/feedback'); //router goes to /feedback page
      setTime(null);
      return;
    }

    if(time === null) //returns when time = null
    {
      return;
    }

    const interval = setInterval(() => { //gets called after every second
      setTime(time - 1); //reduces time by 1 second
    }, 1000);

    return () => clearInterval(interval); //clears the setinterval method to prevent overlap

  }, [time]) 
  

  return (
    <div className={styles.contain}>
      <h1 className={styles.heading}>Home page with count down</h1>
      <h3>{time} seconds remaining</h3> 
    </div>
  )
}
