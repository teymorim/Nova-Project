import { useEffect } from "react";
import { Container } from "react-bootstrap";
import AboutHero from "../../Components/AboutComponents/AboutHero/AboutHero";
import AboutTeam from "../../Components/AboutComponents/AboutTeam/AboutTeam";
import Loading from "../../Components/Loading/Loading";
import MyBreadsCrumbs from "../../Components/MyBreadsCrumbs/MyBreadsCrumbs";
import MyFooter from "../../Components/MyFooter/MyFooter";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import useSetTimer from "../../hooks/useSetTimer/useSetTimer";
import "./AboutPage.css";
function AboutPage() {
  const isLoading = useSetTimer();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      {isLoading === true && <Loading />}
      {isLoading === false && (
        <div>
          <MyNavbar />
          <div className="about-hero">
            <h1 className="mainColor">About</h1>
          </div>

          <MyBreadsCrumbs activePage="About" />
          <AboutHero />
          <AboutTeam />
          <MyFooter />
        </div>
      )}
    </>
  );
}
export default AboutPage;
