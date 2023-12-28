
import { NavLink } from 'react-router-dom'
import aboutimg from '../Assets/aboutimg.jpg'
import aboutimg2 from '../Assets/aboutimg2.jpg'
import aboutimg3 from '../Assets/aboutimg3.jpg'

const About = () => {
    return (
        <div className='bg-secondary bg-gradient '>
            <div className="container text-bg-secondary">
                <div className="row g-0 mt-0">
                    <div className="col-6 text- ">
                        <div className='row mt-5'>
                            <div className='col-12 '>
                                <h3 className='fw-bold fs-2 mt-1 ms-3 mb-3 text-info'>STUDENT SECTION....!!!!</h3>
                            </div>
                            <div className='col-12'>
                                <h3 className='text-center fs-1 fw-bold'>Online Education</h3>
                            </div>
                            <div className='col-12'>
                                <p className='ms-2 text-light fs-5'>
                                    Learning online allows students to save a
                                    significant amount of time by not having to
                                    travel to the school or premises. It also gives
                                    them the freedom to learn from anywhere and at
                                    any time. As a result, students have enough time
                                    to easily fulfill deadlines by completing projects
                                    and participating in other activities.<a href="https://en.wikipedia.org/wiki/Online_learning_in_higher_education" >Read More</a></p>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-warning ms-3 mb-3' ><NavLink to='/add' className='text-decoration-none text-dark'>APPLY NOW</NavLink></button>
                            </div>
                            <div className="row" >
                                <div className="col-sm-6  mb-sm-0 " >
                                    <div className="card mb-4 bg-info">
                                        <div className="card-body">
                                            <h5 className="card-title">Online Education Blog</h5>
                                            <p className="card-text"></p>
                                            <a href="https://collegevidya.com/blog/what-is-online-education/" class="btn btn-primary">Go Here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <div className="card mb-4 w-80 bg-info" >
                                        <div className="card-body" >
                                            <h5 className="card-title">Online Education News</h5>
                                            <p className="card-text"></p>
                                            <a href="https://economictimes.indiatimes.com/topic/online-education" class="btn btn-primary">Go Here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-6 mt-5 mb-5 text-center">

                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <img src={aboutimg} class="d-block w-70" alt="about1" height={400} />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={aboutimg2} class="d-block w-70" alt="about2" height={400} />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={aboutimg3} class="d-block w-70" alt="about3" height={400} />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default About;