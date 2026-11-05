import { useState } from "react";

const createNewEducation = () => {
    return {
        id: crypto.randomUUID(),
        school: "",
        qualification: "",
        grade: "",
        startDate: "",
        endDate: "",
    };
};

function EducationForm({ educationData, setData }) {
    const [formData, setFormData] = useState(educationData);

    const handleChange = (e, fieldName) =>
        setFormData((prevData) => ({ ...prevData, [fieldName]: e.target.value }));

    return (
        <form
            action="submit"
            onSubmit={(e) => {
                e.preventDefault();
                setData((prevData) => ({
                    ...prevData,
                    education: prevData.education.map((qualification) =>
                        qualification.id === educationData.id ? formData : qualification,
                    ),
                }));
            }}
        >
            <label htmlFor="school">School</label>
            <input
                type="text"
                name="school"
                id="school"
                value={formData.school}
                onChange={(e) => handleChange(e, "school")}
            />

            <label htmlFor="school">Qualificaton</label>
            <input
                type="text"
                name="qualification"
                id="qualification"
                value={formData.qualification}
                onChange={(e) => handleChange(e, "qualification")}
            />

            <label htmlFor="school">Grade</label>
            <input
                type="text"
                name="grade"
                id="grade"
                value={formData.grade}
                onChange={(e) => handleChange(e, "grade")}
            />

            <label htmlFor="school">Start Date</label>
            <input
                type="month"
                name="start-date"
                id="start-date"
                value={formData.startDate}
                onChange={(e) => handleChange(e, "startDate")}
            />

            <label htmlFor="school">End Date</label>
            <input
                type="month"
                name="end-date"
                id="end-date"
                value={formData.endDate}
                onChange={(e) => handleChange(e, "endDate")}
            />

            <button type="button">Delete</button>
            <button type="button">Cancel</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default function Education({ data, setData }) {
    return (
        <section>
            <h2>Education</h2>
            {data.education.map((qualification) => (
                <EducationForm
                    key={qualification.id}
                    educationData={qualification}
                    setData={setData}
                />
            ))}
            <button
                onClick={() =>
                    setData((prevData) => ({
                        ...prevData,
                        education: [...prevData.education, createNewEducation()],
                    }))
                }
            >
                Add education
            </button>
        </section>
    );
}
