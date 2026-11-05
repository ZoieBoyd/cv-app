import { useState } from "react";

const createNewExperience = () => {
    return {
        id: crypto.randomUUID(),
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
    };
};

function ExperienceForm({ jobData, setData }) {
    const [formData, setFormData] = useState(jobData);

    const handleChange = (e, fieldName) =>
        setFormData((prevData) => ({ ...prevData, [fieldName]: e.target.value }));

    return (
        <form
            action="submit"
            onSubmit={(e) => {
                e.preventDefault();
                setData((prevData) => ({
                    ...prevData,
                    experience: prevData.experience.map((job) =>
                        job.id === jobData.id ? formData : job,
                    ),
                }));
            }}
        >
            <label htmlFor="job-title">Job Title</label>
            <input
                type="text"
                name="job-title"
                id="job-title"
                value={formData.jobTitle}
                onChange={(e) => handleChange(e, "jobTitle")}
            />

            <label htmlFor="employer">Employer</label>
            <input
                type="text"
                name="employer"
                id="employer"
                value={formData.employer}
                onChange={(e) => handleChange(e, "employer")}
            />

            <label htmlFor="start-date">Start Date</label>
            <input
                type="month"
                name="start-date"
                id="start-date"
                value={formData.startDate}
                onChange={(e) => handleChange(e, "startDate")}
            />

            <label htmlFor="end-date">End Date</label>
            <input
                type="month"
                name="end-date"
                id="end-date"
                value={formData.endDate}
                onChange={(e) => handleChange(e, "endDate")}
            />

            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={(e) => handleChange(e, "description")}
            />

            <button
                type="button"
                onClick={() =>
                    setData((prevData) => ({
                        ...prevData,
                        experience: prevData.experience.filter((job) => job.id !== jobData.id),
                    }))
                }
            >
                Delete
            </button>
            <button type="button" onClick={() => setFormData(jobData)}>
                Cancel
            </button>
            <button type="submit">Save</button>
        </form>
    );
}

export default function Experience({ data, setData }) {
    return (
        <section>
            <h2>Experience</h2>
            {data.experience.map((job) => (
                <ExperienceForm key={job.id} jobData={job} setData={setData} />
            ))}
            <button
                onClick={() => {
                    setData((prevData) => ({
                        ...prevData,
                        experience: [...prevData.experience, createNewExperience()],
                    }));
                }}
            >
                Add experience
            </button>
        </section>
    );
}
