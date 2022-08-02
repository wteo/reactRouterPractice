import React, { useState } from "react";
import { Prompt, useHistory } from 'react-router-dom';

import styles from './Contact.module.css';

import Overlay from "../ui/Overlay";

function Contact() {

    const history = useHistory();

    const [isTouched, setIsTouched] = useState(false);
    const [enteredSubject, setEnteredSubject] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const formFocusHandler = () => {
        setIsTouched(true);
    }

    const clickHandler = () => {
        console.log({
            subject: enteredSubject,
            message: enteredMessage  
        })

        setIsTouched(false);
        setEnteredSubject('');
        setEnteredMessage('');
    }

    const submitHandler = () => {
        history.push('/welcome');
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
            <Prompt 
                when={isTouched} 
                message={(location) => 'Are you sure you want to leave? All your entered data will be lost!'}
            />  
            <form onFocus={formFocusHandler} onSubmit={submitHandler}>
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