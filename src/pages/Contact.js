import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styles from './Contact.module.css';

import Overlay from "../ui/Overlay";

function Contact() {

    const navigation = useNavigate();

    const [enteredSubject, setEnteredSubject] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");


    const clickHandler = () => {
        console.log({
            subject: enteredSubject,
            message: enteredMessage  
        })
        setEnteredSubject('');
        setEnteredMessage('');
    }

    const submitHandler = () => {
        navigation('/');
    }

    const subjectHandler = (event) => {
        setEnteredSubject(event.target.value);
    }

    const messageHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    return (
        <Overlay>
            <h1 className={styles.contact}>Contact</h1>
            <form onSubmit={submitHandler}>
                    <label>Subject</label>
                    <input className={styles.title} type='text' value={enteredSubject} onChange={subjectHandler}/>
                    <br />
                    <br />
                    <label className={styles.messageTitle}>Message</label>
                    <br />
                    <input className={styles.messageInput} type='text' value={enteredMessage} onChange={messageHandler}/>
                    <br />
                    <button onClick={clickHandler}>Submit</button>
                </form>
        </Overlay>
    );
}

export default Contact;
