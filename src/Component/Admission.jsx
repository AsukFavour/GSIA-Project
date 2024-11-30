import React from 'react';
import { Accordion, Card, Button, Image } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Styles/Admission.css';

const Admission = () => {
    return (
        <>
        <Navbar/>
        <div className="admissions-page">
            <section className="welcome-message text-center my-5">
                <h1>Welcome to Our School</h1>
                <p>
                    We are delighted to welcome you to our school&apos;s admissions page. Our mission is to provide a nurturing and challenging educational environment that prepares students for future success. Learn more about our unique approach to education and what makes our school special.
                </p>
                <Image src="path-to-your-image.jpg" alt="School Image" fluid />
            </section>

            <section className="application-process my-5">
                <h2>Application Process</h2>
                <Image src="path-to-your-image.jpg" alt="Application Process Image" fluid />
                <ol className="mt-3">
                    <li>Fill out the online application form.</li>
                    <li>Submit required documents (transcripts, letters of recommendation, etc.).</li>
                    <li>Schedule and attend an interview.</li>
                    <li>Complete any required entrance exams.</li>
                    <li>Wait for admission decision and notification.</li>
                </ol>
                <p>For more details, please download our <a href="path-to-your-application-form.pdf" download>application forms</a>.</p>
            </section>

            <section className="admission-requirements my-5">
                <h2>Admission Requirements</h2>
                <Image src="path-to-your-image.jpg" alt="Admission Requirements Image" fluid />
                <ul className="mt-3">
                    <li>Age Criteria: Specific age requirements for each grade level.</li>
                    <li>Academic Records: Transcripts or report cards from previous schools.</li>
                    <li>Entrance Exams: Information on required entrance exams or assessments.</li>
                    <li>Letters of Recommendation: Guidelines for submitting letters from teachers or other references.</li>
                    <li>Interviews: Details about the interview process, if applicable.</li>
                </ul>
            </section>

            <section className="important-dates my-5">
                <h2>Important Dates</h2>
                <ul>
                    <li>Application Deadline: January 15</li>
                    <li>Open House Events: February 20, March 15</li>
                    <li>Interview Dates: April 10-20</li>
                </ul>
            </section>

            <section className="tuition-and-fees my-5">
                <h2>Tuition and Fees</h2>
                <p>Our tuition fees are structured to provide the best value for the high-quality education we offer. Additional costs may include uniforms, textbooks, and activity fees.</p>
                <p>We also offer financial aid and scholarships. <a href="#financial-aid">Learn more about financial aid</a>.</p>
                <Button href="path-to-your-tuition-info.pdf" download>Download Tuition Information</Button>
            </section>

            <section className="school-tours-and-open-houses my-5">
                <h2>School Tours and Open Houses</h2>
                <p>We invite you to visit our campus to see our facilities and meet our staff. Schedule a tour or attend one of our open house events.</p>
                <p>Virtual tours are also available. <a href="#virtual-tours">Take a virtual tour</a>.</p>
            </section>

            <section className="faqs my-5">
                <h2>Frequently Asked Questions</h2>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            What is the application deadline?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>The application deadline is January 15.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Are there any entrance exams?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Yes, we require entrance exams for certain grade levels.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            How can I apply for financial aid?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Please visit our financial aid page for more information.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>

            <section className="testimonials-and-success-stories my-5">
                <h2>Testimonials and Success Stories</h2>
                <blockquote>
                    &qout;This school has been a wonderful experience for my child. The teachers are amazing and the community is very supportive.&qout; - Parent
                </blockquote>
                <blockquote>
                &qout; I have learned so much and made lifelong friends. I feel well-prepared for college and beyond.&qout; - Alumna
                </blockquote>
                <p>Learn more about our <a href="#alumni-success">successful alumni</a>.</p>
            </section>

            <section className="contact-information my-5">
                <h2>Contact Information</h2>
                <p>For any inquiries regarding admissions, please contact our admissions office:</p>
                <p>Email: <a href="mailto:admissions@school.edu">admissions@school.edu</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>Office Hours: Monday to Friday, 9 AM to 5 PM</p>
            </section>

            <section className="additional-resources my-5">
                <h2>Additional Resources</h2>
                <p>Download our <a href="path-to-your-brochure.pdf" download>brochures and catalogs</a> for more detailed information about our school.</p>
                <p>Visit other relevant pages on our website to learn more about our <a href="#academics">academic programs</a>, <a href="#extracurricular">extracurricular activities</a>, and <a href="#school-life">school life</a>.</p>
            </section>
        </div>
        <Footer/>
        </>
    );
};


export default Admission;
