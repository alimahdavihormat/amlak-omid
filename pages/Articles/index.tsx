import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import Title from "../../microComponents/Title";
import ArticleCards from "../../blocks/articleCards";
import { useState, useEffect, useContext } from "react";
import { context } from "../../context";
import axios from "axios";
import { useRouter,Router } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
export default function Articles() {
  const router = useRouter()

  const { setShowLoading } = useContext(context);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    get();
  }, []);

  function get() {
    setShowLoading(true);
    axios
      .get("/api/article")
      .then((res) => {
        setArticleList(res.data);
        if (res.status === 200) {
          setShowLoading(false);
        }
      })
      .catch((err) => {
        if (err.response?.data) {
          err?.response?.data?.errors?.map((issue) => toast.error(issue));
        } else {
          toast.error("مشکلی پیش آمده است !");
        }
        setShowLoading(false);
      });
  }



  let paginationConfig = {
    totalPages: 22,
    currentPage: 15,
    showMax: 5,
    size: "lg",
    threeDots: true,
    prevNext: true,
    href: "http://localhost/items?page=*",
    pageOneHref: "http://localhost/items",
    borderColor: "red",
    activeBorderColor: "black",
    activeBgColor: "grey",
    disabledBgColor: "red",
    activeColor: "red",
    color: "purple",
    disabledColor: "green",
    circle: true,
    shadow: true,
  };
  const getId = (e) => {
    router.push(`/Articles/${e.target.getAttribute("data-reactid")}`)
};
  return (
    <Container className="pt-5 pb-4 mt-3">
      <Row>
        <Title title="مجله‌های املاک امید" />
        {articleList?.map((card) => (
          <ArticleCards
            key={card.id}
            img={card.articleImage}
            title={card.title}
            content={card.summary}
            id={card.id}
            getId={getId}
          />
        ))}
    



        <Col lg={5} md={6} className="mx-auto">
          {/* <Pagination {...paginationConfig} /> */}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}
