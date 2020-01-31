import React from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='d-flex flex-md-row flex-column justify-content-md-between rounded bg-info m-2' style={{backgroundImage:'url("/sale2.png")',objectFit:'cover',border:'1px solid red'}}>
                    <img src='/sale.png' className='col-4 ml-sm-5 ml-auto d-block w-100 p-2' style={{height:'120px'}} />
                    <div className={`col text-md-right ${styles.saleText} mr-5`}>
                        <div>Use Coupon Code</div>
                        <div className='font-weight-bold'>VM202MAX</div>
                    </div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide my-2" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src="/BG1.jpg" className={`${styles.pic} d-block w-100`} alt="image" />
                            <div className={`${styles.carsl} carousel-caption d-none d-block`}>
                                <div>Organic</div>
                                <h1>100% Natural. 0% Pesticides. 0% Chemical Fertilizers.</h1>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="3000">
                            <img src="./BG2.jpg" className={`${styles.pic} d-block w-100`} alt="image" />
                            <div className={`${styles.carsl} carousel-caption d-none d-block`}>
                                <div>Economical</div>
                                <h1>No agents. No brokers. No retailers. No shop margins.</h1>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="3000">
                            <img src="/BG3.jpg" className={`${styles.pic} d-block w-100`} alt="image" />
                            <div className={`${styles.carsl} carousel-caption d-none d-block`}>
                                <div>Farm Fresh</div>
                                <h1>Sourced directly from farmers in and around Bangalore city.</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center container col-12 col-sm-10 my-5'>
                    <div className={styles.capt1}>Fresh Organic Produce & Artisan Farm Products</div>
                    <div className={styles.capt2}>
                    We bring the season's best mix of 100% certified-organic produce and hand-crafted farm products conveniently to your door by growing and partnering with local farms and artisans. Each delivery comes with news from our family farm, delicious recipes, quick tips and the option to customize your box online — we bring our farmers market booth to you!
                    </div>
                </div>

                
                <div className='d-flex flex-md-row flex-column text-center my-4'>
                    <div className='col my-2'>
                        <div><i className={`${styles.icons} material-icons`}> local_grocery_store </i></div>
                        <div>Choose and Order the fruits/vegetables of your choice from us.</div>
                    </div>
                    <div className='col my-2'>
                        <div><i className={`${styles.icons} material-icons`}> event </i></div>
                        <div>Pickup a suitable plan according to your daily requirements.</div>
                    </div>
                    <div className='col my-2'>
                        <div><i className={`${styles.icons} material-icons`}> house </i></div>
                        <div> Fresh fruits/vegetables delivered to your door-step within 6 hours.</div>
                    </div>
                    
                </div>

                <div className='my-4 bg-warning text-center'>
                    <Link to='/shop'>
                    <div className='btn btn-outline-success p-3 m-3 p-sm-5 m-sm-5 rounded-pill'>
                        Start Your Shopping here</div>
                    </Link>
                </div>


            </div>
        )

    }
}

export default Home