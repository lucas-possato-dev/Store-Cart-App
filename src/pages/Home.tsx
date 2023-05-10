import { Container } from "react-bootstrap";

export function Home() {
  return (
    <Container className="d-flex align-items-center flex-column col-md-6 text-center animation">
      <h1>Home</h1>
      <p>
        Welcome to our store! We offer a wide range of products, from the latest
        technology gadgets and electronics to high-performance vehicles and
        musical instruments. If you're looking for the newest smartphones,
        tablets, or laptops, we have a wide selection of products from top
        brands. Whether you need a new device for work, school, or
        entertainment, we have the perfect item for you.
      </p>
      <p>
        We also specialize in high-performance vehicles for the driving
        enthusiast. From sports cars to luxury sedans, our selection of vehicles
        will get your heart racing. Our expert staff can assist you in finding
        the perfect vehicle to suit your needs. For the music lovers out there,
        we have an extensive selection of musical instruments. Whether you're a
        beginner or an experienced musician, we have a variety of guitars,
        keyboards, drums, and more. We also offer accessories such as amplifiers
        and stands to complete your setup.
      </p>{" "}
      <p>
        Our store is committed to providing exceptional customer service and
        expertise in all of our products. We strive to offer the latest and
        greatest in technology, vehicles, and musical instruments. Come visit us
        and see for yourself what we have to offer!
      </p>
    </Container>
  );
}
