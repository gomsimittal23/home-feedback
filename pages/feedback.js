import { useRef } from "react";
import styles from '../styles/Home.module.css';

const Feedback = () => {
  const nameRef = useRef(); 
  const emailRef = useRef();

  const handleClick =(e) => {
    e.preventDefault(); //prevents refresh when submit gets clicked
    if(!nameRef.current.value) //conditon called when name is null
    {
      alert("enter the name"); //alert box displayed
    }
    if(!emailRef.current.value) //conditon called when email is null
    {
      alert("enter the e-mail"); //alert box displayed
    }
    console.log("Name- " + nameRef.current.value);
    console.log("E-mail- " + emailRef.current.value);
  }

  return (
    <div className={styles.contain}>
      <form className={styles.form}>
        <input type='text' placeholder="Enter name" ref={nameRef}/>  
        <input type='email' placeholder="Enter E-mail" ref={emailRef}/>
        <button onClick={ (e) => handleClick(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Feedback;