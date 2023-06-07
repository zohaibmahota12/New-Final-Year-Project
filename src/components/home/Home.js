import React from "react";
import "./home.css";
function Home() {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Start your educational journey today.</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Simplify your tutor bookings. Find qualified teachers for
                personalized learning. TutorEase, your gateway to academic
                success.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a
                    href="#about"
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src="./assets/images/hero-img.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            {/* <h3>Team</h3> */}
            <h1 className="mb-4">Our hard working team</h1>
          </header>

          <div class="row gy-4">
            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="https://source.unsplash.com/300x200/?man"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Muhammad Haris</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="https://source.unsplash.com/300x200/?black-man"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Muhammad Mohsin</h4>
                  <span>Product Manager</span>
                  <p>
                    Quo esse repellendus quia id. Est eum et accusantium
                    pariatur fugit nihil minima suscipit corporis. Voluptate sed
                    quas reiciendis animi neque sapiente.{" "}
                    
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="https://source.unsplash.com/300x200/?old-man"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Muhammad Haris</h4>
                  <span>CTO</span>
                  <p>
                    Vero omnis enim consequatur. Voluptas consectetur unde qui
                    molestiae deserunt. Voluptates enim aut architecto porro
                    aspernatur molestiae modi.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="member">
                <div class="member-img">
                  <img
                    src="https://source.unsplash.com/300x200/?muslim-man"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Muhammad Mohsin</h4>
                  <span>Accountant</span>
                  <p>
                    Rerum voluptate non adipisci animi distinctio et deserunt
                    amet voluptas. Quia aut aliquid doloremque ut possimus ipsum
                    officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" class="contact mb-4">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2 className="mt-4 mb-4">Contact Us</h2>
          </header>

          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      Model Town Lahore,
                      <br />
                      Lahore, NY 535022
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +923145596879
                      <br />
                      +923005876914
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Sunday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form action="" method="" class="php-email-form">
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div class="col-md-6 ">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
}

export default Home;
