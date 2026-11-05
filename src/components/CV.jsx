export function CV({ data }) {
    return (
        <section>
            <div className="cv-document">
                <h1>
                    {data.firstName} {data.surname}
                </h1>
                <p>
                    {data.mobile} | {data.email} | {data.linkedinUrl}
                </p>
                <hr />
                <section>
                    <h2>Experience</h2>
                    {data.experience.map((job) => (
                        <div key={job.id}>
                            <p>
                                {job.jobTitle} | {job.employer}
                            </p>
                        </div>
                    ))}
                </section>
                <section>
                    <h2>Education</h2>
                    {data.education.map((qualification) => (
                        <div key={qualification.id}>
                            <p>
                                {qualification.school} | {qualification.qualification}
                            </p>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}
