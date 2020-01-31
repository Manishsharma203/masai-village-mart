import React from 'react'
import {Link} from 'react-router-dom'
import styles from './home.module.css'

export default class Shop extends React.Component{
    render(){
        return(
            <div className='m-4'>
                <div className='container-fluid d-flex flex-column flex-md-row text-center'>
                    <div className={`col jumbotron rounded ${styles.shopPic}`} style={{backgroundImage:'url("/ShopFruits.jpg")'}}>
                        <Link to='/fruits' className='text-danger border border-danger bg-warning badge badge-pill'>FRUITS</Link>
                    </div>
                    <div className={`col jumbotron ${styles.shopPic}`} style={{backgroundImage:'url("/ShopVegis.jpg")'}}>
                        <Link to='/vegetables' className='text-primary border border-primary bg-warning badge badge-pill'>VEGETABLES</Link>
                    </div>
                </div>
            </div>
        )
    }
}