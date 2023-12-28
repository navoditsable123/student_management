import image1 from '../Assets/img1.jpg'
import image2 from '../Assets/img2.jpg'
import image3 from '../Assets/img3.jpg'
const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={image1} class="d-block w-100" alt="img1" height='543px' />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={image2} class="d-block w-100" alt="img2" height='543px' />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={image3} class="d-block w-100" alt="img3" height='543px' />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Home;