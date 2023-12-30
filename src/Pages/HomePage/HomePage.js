import { Button, Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import { FaRegCirclePlay } from "react-icons/fa6";

import "./HomePage.css";
import SectionOne from "../../Components/HomeComponents/SectionOne/SectionOne";
import SectionTwo from "../../Components/HomeComponents/SectionTwo/SectionTwo";
import SectionThree from "../../Components/HomeComponents/SectionThree/SectionThree";
import SectionFour from "../../Components/HomeComponents/SectionFour/SectionFour";
import MyFooter from "../../Components/MyFooter/MyFooter";
import { useEffect } from "react";
import useSetTimer from "../../hooks/useSetTimer/useSetTimer";
import Loading from "../../Components/Loading/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';
function HomePage() {
  const isLoading = useSetTimer();
  useEffect(() => {
    AOS.init({
        duration: 1000,
        delay: 200,
    });
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      {isLoading === true && <Loading />}
      {isLoading === false && (
        <div>
          <div className="sectionHero">
            <MyNavbar />
            <Container className="h-100">
              <Row className="row-cols-1 h-100 align-items-center justify-content-center ">
                <Col className="hero-title" xl={4}>
                  <h1>Focus On What Matters</h1>
                  <p className="text-light px-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis cum recusandae eum laboriosam voluptatem
                    repudiandae odio, vel exercitationem officiis provident
                    minima.
                  </p>
                  <div className="hero-Btns d-flex align-items-center">
                    <Button className="fw-bold">Get Started</Button>
                    <Button className="fw-bold">
                      <span className="me-1   fw-bold">
                        <FaRegCirclePlay size="25px" />
                      </span>
                      Watch Video
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div data-aos="fade-up" className="section1 text-center py-5">
            <h3 className="my-5">Why Choose Us</h3>
            <SectionOne />
          </div>

          <div data-aos="fade-up" className="sectionTwo py-5">
            <h3 className="text-center my-5">Our Services</h3>
            <SectionTwo />
          </div>

          <div data-aos="fade-up" className="sectionThree py-5">
            <SectionThree />
          </div>

          <div data-aos="fade-up" className="sectionFour">
            <h3 className="text-center my-5">Recent Blog Posts</h3>
            <SectionFour />
          </div>

          <MyFooter />
        </div>
      )}
    </>
  );
}
export default HomePage;
