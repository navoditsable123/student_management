import react from '../Assets/react.png'
import angular from '../Assets/angular.png'
import vue from '../Assets/vue.jpg'
import mongo from '../Assets/mongo.png'
import node from '../Assets/node.png'
import sql from '../Assets/sql.png'
const Gallery = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-5">

                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={react} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">REACT JS</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={angular} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">ANGULAR</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={vue} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">VUE JS</a>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="row">

                    <div className="col-3">
                        <div className="card " style={{ width: "15rem" }}>
                            <img className="card-img-top" src={sql} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">SQL</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src={mongo} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">MONGO DB</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src={mongo} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">MONGO DB</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src={node} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">NODE JS</a>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
export default Gallery;