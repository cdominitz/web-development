import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage(){

    const [myResults, makeResults] = useState([]);
    const getResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                makeResults(response.results);
            })
            .catch(() => {
                alert("Oh No! There appears to be an issue wit hthe Random User Generator Server. Please Try again later!")
            });
    };

    return (
        <>
        <h2>Staff Page</h2>
        <article>
            <p>
                Click to view a table of 10 random staff members.
            </p>
            <button id="fromServer" onClick={getResults} value="add">View Staff</button>
                <table>
                    <caption> 
                        The staff's picture, name, with a hyperlinked to their email, 
                        phone number, and city they reside in will be shown.</caption>
                    <thead>
                      <tr>
                        <th>Portrait</th>
                        <th>Name &amp; Email</th>
                        <th>Telephone</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                        {myResults.map((person, ind) => <StaffRow person={person} key={ind} />)}
                    </tbody>
                  </table>
        </article>
        </>
    );
}

export default StaffPage;


