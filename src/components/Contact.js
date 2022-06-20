// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    console.log(data);
    // console.log(contact);
    return (
        <div className='custom-contact'>
            <img src={data.photo} alt="gambar-kucing"></img> 
            <div>
                <h4>{data.name}</h4>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>

        </div>
    )
}

export default Contact;