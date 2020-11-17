import React from 'react';
import Footer from './Footer';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
function Connect() {
    return (
        <div className="page">
        <section id="main-contact" className="section-5">
        <Container>
                    <Row xs={6} md={10}>
                    <Col sm={6}>
        <div class="quote">
          <h2><b>
          Want to connect?<br />
        My inbox is always open! <br />
        Let's Collaborate and Build!
        </b>
            <br />
          </h2>
          <br />
          <br />
        </div>
        </Col>
        <Col sm={6}>
        <div class="contact">
          <div class="form-container">
            <h2>Contact Me</h2>
            <form
              method="POST"
              action="https://formspree.io/f/mvovqwla">
              <div class="input-field">
                <input type="text" name="name" required="" />
                <label>Name*</label>
              </div>
              <div class="input-field">
                <input type="email" name="email" required="" />
                <label>Email*</label>
              </div>
              <div class="input-field">
                <textarea name="message" rows="4" required=""></textarea>
                <label>Message*</label>
              </div>
              <input type="submit" name="" value="Send Message" class="btn" />
            </form>
          </div>
        </div>
        </Col>
        </Row>
        </Container>
      </section>
      <Footer />
      </div>
    )
}
export default Connect