import React, { useEffect, useState } from "react";
import SearchSort from "./search_sort/search_sort";
import ContactDisplay from "./contactDisplay/contactDisplay";
import axios from "axios";

function Content() {
  //Use States
  const [search, setSearch] = useState(undefined);
  const [searchBy, setSearchBy] = useState("name");
  const [sortBy, setSortBy] = useState("firstAdded");
  const [contacts, setContacts] = useState([]);

  // State Handling function
  const handleSearch = (input) => {
    setSearch(input);
  };

  const handleSearchBy = (input) => {
    setSearchBy(input);
  };

  const handleSortBy = (input) => {
    setSortBy(input);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //making an copy of the contact list
  let contactList = [...contacts];

  //Logic for Searching some value in the contact list
  if (search) {
    const value = search.toLowerCase().trim();
    switch (searchBy) {
      case "id":
        contactList = contactList.filter((elem) => {
          console.log(elem);
          return elem.id.toString().includes(value);
        });
        break;
      case "name":
        contactList = contactList.filter((elem) => {
          return elem.name.toLowerCase().includes(value);
        });
        break;
      case "uname":
        contactList = contactList.filter((contact) => {
          return contact.username.toLowerCase().includes(value);
        });
        break;
      case "email":
        contactList = contactList.filter((contact) => {
          return contact.email.toLowerCase().includes(value);
        });
        break;
      case "phone":
        contactList = contactList.filter((contact) => {
          return contact.phone.toString().includes(value);
        });
        break;
      case "website":
        contactList = contactList.filter((contact) => {
          return contact.website.toLowerCase().includes(value);
        });
        break;
      case "address":
        contactList = contactList.filter((contact) => {
          let address =
            contact.address.street +
            contact.address.suite +
            contact.address.city;
          return address.toLowerCase().includes(value);
        });
        break;
      case "zip":
        contactList = contactList.filter((contact) => {
          return contact.address.zipcode.includes(value);
        });
        break;
      case "company":
        contactList = contactList.filter((contact) => {
          let company =
            contact.company.name +
            contact.company.catchPhrase +
            contact.company.bs;
          return company.toLowerCase().includes(value);
        });
        break;
      default:
        contactList = [...contacts];
    }
  }

  //Logic for Sorting the contact list
  if (sortBy === "lastAdded") {
    contactList.sort((a, b) => {
      return b.id - a.id;
    });
  } else if (sortBy === "a-z") {
    contactList.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "z-a") {
    contactList.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div className="content">
      <SearchSort
        search={search}
        handleSearch={handleSearch}
        searchBy={searchBy}
        handleSearchBy={handleSearchBy}
        sortBy={sortBy}
        handleSortBy={handleSortBy}
      />
      <ContactDisplay contactList={contactList} />
    </div>
  );
}

export default Content;
