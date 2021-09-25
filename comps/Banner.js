import { Carousel} from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';
const Banner = () => {
    return (  
<div>
<Carousel>
  <Carousel.Item>
    <img
    id={styles.image}
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/cristiano-ronaldo-of-real-madrid-lifts-the-uefa-champions-league-picture-id962792890"
      alt="First slide"
    />
    <Carousel.Caption  id={styles.texts}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    id={styles.image}
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-is-put-under-pressure-by-lionel-of-picture-id1290158744"
      alt="Second slide"
    />

    <Carousel.Caption id={styles.texts}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    id={styles.image}
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/cristiano-ronaldo-of-real-madrid-cf-celebrates-as-he-scores-their-picture-id465793002"
      alt="Third slide"
    />

    <Carousel.Caption  id={styles.texts}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


    )
}
 
export default Banner;