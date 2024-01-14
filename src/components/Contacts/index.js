import { useState, useEffect } from "react";

import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "medine",
      phone_number: "12345",
    },
    {
      fullname: "şahin",
      phone_number: "12356899",
    },
    {
      fullname: "arin",
      phone_number: "987565",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h2>Contacts</h2>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
