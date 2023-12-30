import "./BlogPage.css";
import MyBreadsCrumbs from "../../Components/MyBreadsCrumbs/MyBreadsCrumbs";
import MyFooter from "../../Components/MyFooter/MyFooter";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import { useEffect } from "react";
import MyBlog from "../../Components/BlogComponet/MyBlog";
import useSetTimer from "../../hooks/useSetTimer/useSetTimer";
import Loading from "../../Components/Loading/Loading";
function BlogPage() {
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
          <div className="BlogPage-hero">
            <h1 className="mainColor">Blogs</h1>
          </div>
          <MyBreadsCrumbs activePage="Blog" />
          <MyBlog />
          <MyFooter />
        </div>
      )}
    </>
  );
}
export default BlogPage;
