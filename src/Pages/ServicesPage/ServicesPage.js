import { useEffect } from "react";
import "./ServicesPage.css";
import MyBreadsCrumbs from "../../Components/MyBreadsCrumbs/MyBreadsCrumbs";
import MyFooter from "../../Components/MyFooter/MyFooter";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import MyServices from "../../Components/ServicesComponents/MyServices/MyServices";
import ServicesPlace from "../../Components/ServicesComponents/ServicesPlace/ServicesPlace";
import Loading from "../../Components/Loading/Loading";
import useSetTimer from "../../hooks/useSetTimer/useSetTimer";


function ServicesPage() {
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
          <div  className="Services-hero">
            <h1 className="mainColor">Services</h1>
          </div>
          <MyBreadsCrumbs activePage="Services" />
          <MyServices  />
          <ServicesPlace />
          <MyFooter />
        </div>
      )}
    </>
  );
}
export default ServicesPage;
