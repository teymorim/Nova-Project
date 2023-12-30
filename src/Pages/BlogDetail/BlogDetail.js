import { useEffect } from "react";
import "./BlogDetail.css";
import MyBreadsCrumbs from "../../Components/MyBreadsCrumbs/MyBreadsCrumbs";
import MyFooter from "../../Components/MyFooter/MyFooter";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import MyBlogDetail from "../../Components/BlogDetailComponent/MyBlogDetail";
import useSetTimer from "../../hooks/useSetTimer/useSetTimer";
import Loading from "../../Components/Loading/Loading";
function BlogDetail() {
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
          <div className="BlogDetail-hero">
            <h1 className="mainColor">Blog Detail</h1>
          </div>
          <MyBreadsCrumbs activePage="Blog Detail" />
          <MyBlogDetail />
          <MyFooter />
        </div>
      )}
    </>
  );
}
export default BlogDetail;
