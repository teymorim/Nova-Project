import "./ContactPage.css";
import MyBreadsCrumbs from "../../Components/MyBreadsCrumbs/MyBreadsCrumbs";
import MyFooter from "../../Components/MyFooter/MyFooter";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import { useEffect } from "react";
import MyContact from "../../Components/ContactComponents/MyContact";
import useSetTimer from "../../hooks/useSetTimer/useSetTimer";
import Loading from "../../Components/Loading/Loading";
function ContactPage() {
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
          <div className="Contact-hero">
            <h1 className="mainColor">Contact</h1>
          </div>
          <MyBreadsCrumbs activePage="Contact" />
          <MyContact />
          <MyFooter />
        </div>
      )}
    </>
  );
}
export default ContactPage;
