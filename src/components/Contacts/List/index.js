import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <br></br>
      <input
        placeholder="Filter contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>{contact.fullname}</li>
        ))}
        {contacts.map((contact, index) => (
          <li key={index}>{contact.phone_number}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
