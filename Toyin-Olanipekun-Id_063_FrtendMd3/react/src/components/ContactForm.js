import React, { useState, useEffect, useContext } from 'react';
import { ContactListContext } from '../context/ContactListContext'

const ContactForm = () => {
    const { addContact, editContactItem, editContact } = useContext(ContactListContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlephone = (e) => {
        setPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editContactItem === null) {
            addContact({ name, phone })
            setName('')
            setPhone('')
        } else {
            editContact(name, phone, editContactItem.id)
        }

    }

    useEffect(() => {

        if (editContactItem !== null) {
            setName(editContactItem.name)
            setPhone(editContactItem.phone)
            console.log(editContactItem.name)
        } else {
            setName('')
            setPhone('')
        }

    }, [editContactItem])

    return (
        <form onSubmit={handleSubmit} className="form-control">
            <input onChange={handleName} value={name} type="text" placeholder="Type Fullname..." required />
            <input onChange={handlephone} value={phone} type="text" placeholder="Type Phone Number..." required />
            <div>
                <button type="submit" className="btn btn-block">{editContactItem ? 'Update Contact' : 'Add Contact'}</button>
            </div>
        </form>
    )
}

export default ContactForm
