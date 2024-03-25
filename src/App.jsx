// import { useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsUser from "./listContacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import React from "react";

function App() {
  const [users, setUsers] = useState(() => {
    const mapUsers = localStorage.getItem("users");
    if (!mapUsers) return contactsUser;
    const parsedUsers = JSON.parse(mapUsers);
    return parsedUsers;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAdd = (formData) => {
    const finalUser = { ...formData, id: nanoid() };
    // setUsers([...users, finalUser]);
    // setUsers((prevState) => [...prevState, finalUser]);
    setUsers((prevUsers) => [...prevUsers, finalUser]);
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase) ||
      user.number.includes(filter)
  );

  return (
    <div>
      <p>goit-react-hw-03</p>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox filter={filter} onChangeFilter={handleFilter} />
      <ContactList users={filterUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
