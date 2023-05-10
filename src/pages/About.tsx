import { Container } from "react-bootstrap";

export function About() {
  return (
    <Container className="d-flex align-items-center flex-column col-md-6 text-center animation">
      <h1>About</h1>
      <p>
        Our store prides itself on offering the latest and greatest in each of
        these categories. Whether you're looking for a new car, a
        top-of-the-line laptop, or a rare musical instrument, we've got you
        covered. Our team of experts is always on the lookout for the best
        products on the market to ensure that our customers get the most out of
        their shopping experience.
      </p>
      <p>
        We understand that everyone has their own unique needs and preferences
        when it comes to the products they choose, which is why we offer a
        diverse range of options for each category. You'll find everything from
        budget-friendly items to high-end, premium products that are sure to
        meet your specific requirements. Our store is committed to providing
        exceptional customer service, and we are always happy to answer any
        questions you may have about our products or services.
      </p>{" "}
      <p>
        Our knowledgeable staff members are trained to assist you in finding the
        perfect item to meet your needs, so don't hesitate to ask for their
        help. Thank you for choosing our store for your shopping needs. We hope
        you enjoy your experience with us and find the perfect products to meet
        your needs.
      </p>
    </Container>
  );
}
