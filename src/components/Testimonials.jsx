import Emily from '../images/image-emily.jpg'
import Thomas from '../images/image-thomas.jpg'
import Jennie from '../images/image-jennie.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonials">
            <div className="testimonial">
                <img src={Emily} alt="Emily's Profile Image" />
                <p className="testimonial__text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </p>

                <div>
                    <p className="testimonial__author">Emily R</p>
                    <p className="testimonial__author-role">Marketing Director</p>
                </div>
            </div>

            <div className="testimonial">
                <img src={Thomas} alt="Thomas Profile Image" />
                <p className="testimonial__text">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                </p>

                <div>
                    <p className="testimonial__author">Thomas S.</p>
                    <p className="testimonial__author-role">Chief Operating Officer</p>
                </div>
            </div>

            <div className="testimonial">
                <img className="testimonial__author-image" src={Jennie} alt="Jennie's Profile Image" />
                <p className="testimonial__text">  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>

                <div>
                    <p className="testimonial__author">Jennie F</p>
                    <p className="testimonial__author-role">Business Owner</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
