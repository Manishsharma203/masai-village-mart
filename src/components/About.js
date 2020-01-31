import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className='text-center my-5'>
                <div className='container col-11'>
                    <div className='display-4 font-weight-bold mb-4'>About Us</div>
                    <div className='h6'>
                        <div>
                        VILLAGE MART’s fruits & vegetables are mostly from the local farms and fields, thus providing the assurance of only high quality and healthy products to our customers. In order to ensure this promise, we work with many small families, farmer communities, growers and all times aggregators to get produce that are harvested on the same day of delivery.
                        </div>
                        <br></br>
                        <div>
                        We recommend “Eat with the Season, Eat local” meaning- eating the local produce that are grown just a few kilometers away from the Bangalore City, which are the best of the season, freshest and also supports the local ecosystems! We believe in regional harmony which encourages local farmers and communities. As everything cannot be grown locally due to climatic requisites we are also encouraged to work with distant farms from other regions as well.
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>

                    </div>
                    <div className='col'>

                    </div>
                </div>
            </div>
        )
    }
}

export default About