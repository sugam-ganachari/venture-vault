import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Faqs = () => {
  const faqData = [
    {
      id: 1,
      "sidebar-question": "Startup Information",
      question: "What information do startups provide on Venture Vault?",
      answer:
        "Startups on Venture Vault offer a comprehensive profile that includes intricate details about their business. This encompasses their business plans, financial statements, key performance metrics, and regular updates on their progress. This rich repository of information empowers investors to make well-informed decisions based on a thorough understanding of each startup's potential.",
    },
    {
      id: 2,
      "sidebar-question": "Investment Process",
      question: "How can I invest through Venture Vault?",
      answer:
        "Investing through Venture Vault is a straightforward process designed for user convenience. Once you've created an account, you gain access to a curated selection of startups. Engage with potential opportunities, negotiate investment terms directly through our secure platform, and seamlessly proceed with your investments. Our user-friendly interface ensures a smooth investment journey, even for those new to the world of startup investing.",
    },
    {
      id: 3,
      "sidebar-question": "Why Venture Vault ?",
      question: "What are the benefits of investing through Venture Vault?",
      answer:
        "Venture Vault is a one-stop solution for investors looking to diversify their portfolios. Our platform offers a wide range of startups to choose from, allowing you to select the ones that best align with your investment goals. We also provide a secure environment for investors to engage with startups. Our platform is designed to facilitate a smooth investment journey, from initial engagement to final investment.",
    },
    {
      id: 4,
      "sidebar-question": "Startup Performance Metrics",
      question: "How often are startup performance metrics updated?",
      answer:
        "Venture Vault ensures that investors have access to the latest insights into the performance of their investments. Performance metrics are diligently updated on a quarterly basis. This regular update cycle provides investors with timely and relevant information, enabling them to assess the trajectory of their investments and make strategic decisions based on the most recent data.",
    },
    {
      id: 5,
      "sidebar-question": "Post-Investment Interaction",
      question: "What happens after I make an investment?",
      answer:
        "After making an investment through Venture Vault, your personalized dashboard becomes a central hub for monitoring and managing your portfolio. Receive real-time updates on the performance of your investments, track key metrics, and engage with startups through secure channels. This post-investment interaction ensures that you stay actively involved in the progress of your portfolio.",
    },
    {
      id: 6,
      "sidebar-question": "Security Measures",
      question: "Is my information secure on Venture Vault?",
      answer:
        "Absolutely. Venture Vault prioritizes the security of your personal and financial information. We implement state-of-the-art encryption measures and adhere to industry-leading security standards. Your data is treated with utmost confidentiality, providing a secure environment for your investment activities.",
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestion(id);
  };

  return (
    <>
      <NavBar />
      <div className="faq-page">
        <nav className="sidebar-faq">
          <div className="faq-heading">
            <h1>FAQs</h1>
          </div>
          <ul
            className="faq-list1"
            style={{ textAlign: "left", listStyleType: "none", padding: 0 }}
          >
            {faqData.map((item) => (
              <li
                className="faq-questions1"
                key={item.id}
                onClick={() => handleQuestionClick(item.id)}
              >
                {item["sidebar-question"]}
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-content">
          {selectedQuestion !== null ? (
            <div className="faq-list-content-div">
              <h3 className="question-heading">
                {faqData.find((item) => item.id === selectedQuestion).question}
              </h3>
              <p className="faq-para">
                {faqData.find((item) => item.id === selectedQuestion).answer}
              </p>
            </div>
          ) : (
            <>
              <div className="faq-main-content-div">
                <h1 className="headingfaq">Frequently Asked Questions!</h1>
                <h3 className="subheadingfaq">
                  Can't find the answer you're looking for? We've shared some of
                  our most frequently asked questions to help you out!{" "}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
