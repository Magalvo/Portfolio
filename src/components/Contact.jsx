import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';
import EarthContact from './canvas/EarthContact';

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          'service_elv1wz3',
          'template_0jy2vsv',
          form.current,
          'zeaqTI6ZknE5Bc2e8'
        )
        .then(
          result => {
            setButtonText('Send');
            console.log(result.text);
            showAlert('success', 'Message sent successfully');
            setFormDetails(formInitialDetails);
          },
          error => {
            console.log(error.text);
            showAlert(
              'danger',
              'Something went wrong, please try again later.'
            );
          }
        );

      setButtonText('Sending...');
    } catch (e) {
      console.log(e);
    }
  };

  const showAlert = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                /* <EarthContact
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                /> */
                <img
                  className={isVisible ? 'animate_animated animate_zoomIn' : ''}
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          name='firstName'
                          type='text'
                          value={formDetails.firstName}
                          placeholder='First Name'
                          onChange={e =>
                            onFormUpdate('firstName', e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          name='lastName'
                          type='text'
                          value={formDetails.lastName}
                          placeholder='Last Name'
                          onChange={e =>
                            onFormUpdate('lastName', e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          name='email'
                          type='email'
                          value={formDetails.email}
                          placeholder='Email Address'
                          onChange={e => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          name='phone'
                          type='tel'
                          value={formDetails.phone}
                          placeholder='Phone No.'
                          onChange={e => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className='px-1'>
                        <textarea
                          name='message'
                          rows='6'
                          value={formDetails.message}
                          placeholder='Message'
                          onChange={e =>
                            onFormUpdate('message', e.target.value)
                          }
                          required
                        ></textarea>
                        <button type='submit'>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status && (
                        <Alert
                          style={{ zIndex: '9999' }}
                          variant={status.type}
                          onClose={() => setStatus(null)}
                          dismissible
                        >
                          {status.message}
                        </Alert>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
