import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "../../../style/carousel.scss";
import { Carousel } from "react-responsive-carousel";

export default function CarouselApp() {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            className={`${styles.carousel} mt-3`}
          >
            <div>
              <img src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/01/fornite-principal.jpg?fit=1920%2C1080&ssl=1" />
            </div>
            <div>
              <img src="https://pbs.twimg.com/media/E8XYReWX0AQm_DA?format=jpg&name=large" />
            </div>
            <div>
              <img src="https://phantom-marca.unidadeditorial.es/b61f30898db444529a443051f3466960/crop/21x0/656x358/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/25/16219346923877.jpg" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}