import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InquiryForm from "../../components/InquiryForm";
export const metadata = {
  title: "Complimentary Consultation — Unwritten Events",
};
export default function ConsultationPage() {
  return (
    <div className="page-container">
      <Header />
      <main id="main-content">
        <div className="consult-hero">
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h1>Let’s create your moment.</h1>
          <p>
            A complimentary conversation to explore your ideas and how we can
            bring them to life.
          </p>
        </div>
        <div className="consult-form-wrap">
          <InquiryForm consultation />
        </div>
      </main>
      <Footer />
    </div>
  );
}
