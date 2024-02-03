

// Will be used to submit form as said here and there 
// Will be used to submit the next thing 
/*

*/
import './Form.css';
import { useState } from "react";

export default function SubmitForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    );
}