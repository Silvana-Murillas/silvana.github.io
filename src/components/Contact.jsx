import { useForm, ValidationError } from '@formspree/react';
import NavB from './NavB';
import './Contact.css';

function Contact() {
    const [state, handleSubmit] = useForm('xeqweqey');
    if (state.succeeded) {
        return (
            <div style={{ marginTop: '100px' }}>
                {' '}
                <NavB />{' '}
                <h2
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        color: '#F28482',
                        fontWeight: 'bold',
                        marginTop: 10,
                    }}
                >
                    {' '}
                    Message sent!
                </h2>
            </div>
        );
    }
    return (
        <div class="div">
            <NavB />
            <div class="main">
                <h1 class="title">Contact me </h1>
                <div class="info">
                    <div class="contact">
                        {' '}
                        <img
                            src="icons8-secured-letter-50.png"
                            style={{ marginTop: 15 }}
                            alt="email"
                        />
                        <h2> My email</h2>
                        <p>silvanamurillas@gmail.com</p>
                    </div>
                    <div class="contact">
                        <img
                            src="icons8-phone-40.png"
                            style={{ marginTop: 15 }}
                            alt="phone"
                        />
                        <h2> My phone</h2>
                        <p>+57-3218615549</p>
                    </div>
                    <div class="contact">
                        <img
                            src="icons8-place-marker-50.png"
                            style={{ marginTop: 15 }}
                            alt="location"
                        />{' '}
                        <h2> Location</h2>
                        <p>Colombia</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} class="form">
                    <div>
                        <label htmlFor="email" id="input">
                            Name
                        </label>
                        <input id="email" type="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>

                        <input id="email" type="email" name="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div id="cont">
                        <label htmlFor="email" id="inputmessage">
                            Message
                        </label>
                        <textarea id="message" name="message" />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div id="submit">
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
