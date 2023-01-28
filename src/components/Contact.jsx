import { useForm, ValidationError } from '@formspree/react';
import NavB from './NavB';
import './Contact.css';

function Contact() {
    const [state, handleSubmit] = useForm('xeqweqey');
    if (state.succeeded) {
        return <div>Thanks for Sending a message!!</div>;
    }
    return (
        <div class="div">
            <NavB />
            <div class="main">
                <h1
                    style={{
                        color: '#F28482',
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        marginBottom: '50px',
                    }}
                >
                    Contact me{' '}
                </h1>
                <div class="info">
                    <div class="contact">
                        {' '}
                        <img
                            src="icons8-secured-letter-50.png"
                            style={{ marginTop: 15 }}
                        />
                        <h2
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}
                        >
                            {' '}
                            My email
                        </h2>
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'normal',
                                marginTop: 10,
                            }}
                        >
                            silvanamurillas@gmail.com
                        </p>
                    </div>
                    <div class="contact">
                        <img
                            src="icons8-phone-40.png"
                            style={{ marginTop: 15 }}
                        />
                        <h2
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}
                        >
                            {' '}
                            My phone
                        </h2>
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'normal',
                                marginTop: 10,
                            }}
                        >
                            +57-3218615549
                        </p>
                    </div>
                    <div class="contact">
                        <img
                            src="icons8-place-marker-50.png"
                            style={{ marginTop: 15 }}
                        />{' '}
                        <h2
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}
                        >
                            {' '}
                            Location
                        </h2>
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'normal',
                                marginTop: 10,
                            }}
                        >
                            Colombia
                        </p>
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
