import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet.js";
import blogData from "../assets/data/blogData.js"; // Import blogData
import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [Full_Name, setFull_Name] = useState("");
  const [E_mail, setE_mail] = useState("");
  const [Comment, setComment] = useState("");
  const [message, setMessage] = useState(""); // Combined success and error message
  const [blog, setBlog] = useState(null); // Define blog state

  useEffect(() => {
    // Find the blog post based on slug
    const foundBlog = blogData.find((blog) => blog.title === slug);
    setBlog(foundBlog);
  }, [slug]); // Trigger effect when slug changes

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting comment...");
    try {
      const response = await fetch("http://localhost:3000/api/comments", { // Replace YOUR_BACKEND_PORT_NUMBER with your actual backend port number
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Full_Name, E_mail, Comment }),
      });
      if (response.ok) {
        console.log("Comment submitted successfully!");
        setFull_Name("");
        setE_mail("");
        setComment("");
        setMessage("Comment submitted successfully!"); // Set success message
      } else {
        const errorMessage = await response.text();
        console.error("Failed to submit comment:", errorMessage);
        setMessage("Failed to submit comment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setMessage("Failed to submit comment. Please try again.");
    }
  };

  return (
    <Helmet title={blog ? blog.title : "Blog Details"}>
      <section>
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
              <div className="blog__details text-center">
                {/* Render blog details content if blog is defined */}
                {blog && (
                  <>
                    <img src={blog.imgUrl} alt="" className="w-100 mb-4" />
                    <h2 className="section__title mt-4">{blog.title}</h2>
                    <p className="section__description">{blog.description}</p>
                    <h6 className="ps-5 fw-normal">
                      <blockquote className="fs-4">{blog.quote}</blockquote>
                    </h6>
                    <p className="section__description">{blog.additionalInfo}</p>
                  </>
                )}
              </div>
              <div className="leave__comment-form mt-5">
                <h4>Leave a Comment</h4>
                {message && (
                  <p className={message.includes("Failed") ? "text-danger" : "text-success"}>
                    {message}
                  </p>
                )}
                <Form onSubmit={handleCommentSubmit}>
                  <FormGroup className=" d-flex gap-3">
                    <Input
                      type="text"
                      placeholder="Full name"
                      value={Full_Name}
                      onChange={(e) => setFull_Name(e.target.value)}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={E_mail}
                      onChange={(e) => setE_mail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      rows="5"
                      className="w-100 py-2 px-3"
                      placeholder="Comment..."
                      value={Comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </FormGroup>
                  <button type="submit" className="btn comment__btn mt-3">
                    Post a Comment
                  </button>
                </Form>
              </div>
            </Col>
            {/* Recent posts */}
            <Col lg="4" md="4">
              {/* Recent posts content */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
