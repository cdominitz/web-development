import React, { useState } from 'react';

function ContactPage(){
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    
    return(
        <>
        <h2>Contact</h2>
        <article>
        <p>Please fill out this form if you have any questions, comments, or concerns
            about the site. I look forward to hearing from you!
        </p>
            <form action="/results" method="POST">
                <fieldset>
                    <legend>Your Contact information</legend>
            
                    <label for="firstlast" class="required">First and Last Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    
            
                    <label for="email" class="required">Email Address:</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <label for="phone" class="required">Phone Number:</label>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                </fieldset>

                <fieldset>
                    <legend>Your Message</legend>
                    <label for="aboutmsg">Why are you reaching out?</label>
                    <select name="aboutmsg" id="aboutmsg">
                        <option value="select">--Select Below--</option>
                        <option value="to ask a question">I want to ask a Question</option>
                        <option value="to provide feedback">I want to provide Feedback</option>
                        <option value="described in message">Other (described below)</option>
                    </select>

                    <label for="message" class="required">Please type your message below:</label>
                    <textarea value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                </fieldset>
                <button onClick={e => {
                    setName(e.target.value);
                    setEmail(e.target.value);
                    setMsg(e.target.value)
                    alert(`Hello, ${name}.
                        Thank you for reaching out! 
                        You will be contacted at ${email}.  
                        A copy of your message is: ${msg}`); 
                    e.preventDefault();
                    }}>Submit</button>           
            </form>
            </article>

        </>
    );
}

export default ContactPage;