import React from "react";
import "./contactDisplay.css";
import { IoLocationSharp } from "react-icons/io5";

function ContactDisplay({ contactList }) {
  //Getting the  total number of contact in the list
  const totalContact = contactList.length;

  //function to open google map link with the assigned longitude and latitude
  const addContactRow = (contact) => {
    const mapLink = (lng, lat) => {
      window.open(
        "https://www.google.com/maps/@" + lat + "," + lng + ",13z",
        "_blank"
      );
    };

    //Return function to return table row with contact data
    return (
      <tr key={contact.id}>
        <td>{contact.id} </td>
        <td>{contact.name} </td>
        <td>{contact.username}</td>
        <td className="emailId">
          <a href="mailto: {contact.email}"> {contact.email}</a>
        </td>
        <td>{contact.phone}</td>
        <td className="website">
          {" "}
          <a href="{contact.website}" target="_blank">
            {contact.website}
          </a>
        </td>
        <td className="address">
          <div>
            <div>
              {contact.address.suite}, {contact.address.street},{" "}
              {contact.address.city}
            </div>

            <div
              className="locate"
              onClick={() =>
                mapLink(contact.address.geo.lng, contact.address.geo.lat)
              }
              target="_blank"
            >
              <IoLocationSharp />
            </div>
          </div>
        </td>
        <td>{contact.address.zipcode}</td>
        <td>
          <div>
            <p className="companyName">{contact.company.name}</p>
            <p className="companyCP">{contact.company.catchPhrase}</p>
            <p className="companyBS">{contact.company.bs}</p>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="contactDisplay">
      <h2>Total Contacts: {totalContact} </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email ID</th>
            <th>Phone No.</th>
            <th>Website</th>
            <th>Address</th>
            <th>ZIP</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {contactList.map((contact) => {
            return addContactRow(contact);
          })}
        </tbody>
      </table>
      {totalContact === 0 && (
        <div className="error">Sorry, No Contact Found! 😕 </div>
      )}
    </div>
  );
}

export default ContactDisplay;
