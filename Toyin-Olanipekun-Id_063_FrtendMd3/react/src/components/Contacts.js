import { useContext } from "react"
import { ContactListContext } from "../context/ContactListContext"

import Contact from "./Contact"

const Contacts = () => {
    const { contacts } = useContext(ContactListContext)
    return (
        <div>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />))}
        </div>
    )
}

export default Contacts
