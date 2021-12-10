import { FaTimes, FaEdit } from 'react-icons/fa'
import { ContactListContext } from '../context/ContactListContext'
import React, { useContext } from 'react';

const Contact = ({ contact }) => {
    const { deleteContact, findContact } = useContext(ContactListContext)
    return (
        <div className="contact">
            <h3>{contact.name}<div className="btn-group"><FaEdit onClick={() => findContact(contact.id)} style={{ color: 'yellow', cursor: 'pointer' }} /> <FaTimes onClick={() => deleteContact(contact.id)} style={{ color: 'red', cursor: 'pointer' }} /></div></h3>
            <p>{contact.phone}</p>
        </div>
    )
}

export default Contact
