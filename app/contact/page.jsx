import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We value your feedback and strive to continually improve our service to meet your needs and exceed your expectations.
        Your feedback is essential to our success, and we welcome your thoughts and suggestions on how we can better serve you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
