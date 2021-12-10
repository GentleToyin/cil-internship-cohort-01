import React, { useState, useEffect } from 'react';
import { createContext } from 'react/cjs/react.development';
import axios from 'axios';



export const ContactListContext = createContext()


const ContactListContextProvider = (props) => {

    const [contacts, setContacts] = useState([])


    //Fetch Contacts
    useEffect(() => {
        const fetchContacts = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

            setContacts(data)
        }
        fetchContacts()
    }, [])
    const [editContactItem, setEditContactItem] = useState(null)

    //Add Contact
    const addContact = (contact) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newContact = { id, ...contact }


        setContacts([...contacts, newContact])
    }


    //Edit Contact

    const findContact = (id) => {
        const contactItem = contacts.find(contact => contact.id === id)

        setEditContactItem(contactItem)
    }

    const editContact = (name, phone, id) => {
        const newContacts = contacts.map(contact => (contact.id === id ? { name, phone, id } : contact))


        setContacts(newContacts)
        setEditContactItem(null)

    }


    //Delete Contact
    const deleteContact = (id) => {
        setContacts(contacts.filter(task => task.id !== id))
    }












    return (
        <ContactListContext.Provider value={{ contacts, addContact, deleteContact, findContact, editContact, editContactItem }}>
            {props.children}
        </ContactListContext.Provider >
    )

}

export default ContactListContextProvider;