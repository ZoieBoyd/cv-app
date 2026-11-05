import { useState } from "react";

function GeneralForm({ data, setData }) {
    const [formData, setFormData] = useState({
        firstName: data.firstName,
        surname: data.surname,
        mobile: data.mobile,
        email: data.email,
        linkedinUrl: data.linkedinUrl,
    });

    const handleChange = (e, fieldName) =>
        setFormData((prevData) => ({ ...prevData, [fieldName]: e.target.value }));

    return (
        <form
            action="submit"
            onSubmit={(e) => {
                e.preventDefault();
                setData((prevData) => ({ ...prevData, ...formData }));
                console.log(data);
            }}
        >
            <label htmlFor="first-name">First Name</label>
            <input
                type="text"
                name="first-name"
                id="first-name"
                value={formData.firstName}
                onChange={(e) => handleChange(e, "firstName")}
            />

            <label htmlFor="surname">Surname</label>
            <input
                type="text"
                name="surname"
                id="surname"
                value={formData.surname}
                onChange={(e) => handleChange(e, "surname")}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
            />

            <label htmlFor="mobile-number">Mobile Number</label>
            <input
                type="tel"
                name="mobile-number"
                id="mobile-number"
                value={formData.mobile}
                onChange={(e) => handleChange(e, "mobile")}
            />

            <label htmlFor="linkedin-url">LinkedIn URL</label>
            <input
                type="url"
                name="linkedin-url"
                id="linkedin-url"
                value={formData.linkedinUrl}
                onChange={(e) => handleChange(e, "linkedinUrl")}
            />

            <label htmlFor="personal-summary">Personal Summary</label>
            <textarea name="personal-summary" id="personal-summary" />
            <button type="button">Cancel</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default function General({ data, setData }) {
    return (
        <section>
            <h2>Personal Details</h2>
            <GeneralForm data={data} setData={setData} />
        </section>
    );
}
