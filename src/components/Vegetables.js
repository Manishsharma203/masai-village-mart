import React from 'react'
import { Link } from 'react-router-dom'
import {Select, MenuItem, InputLabel, FormControl} from '@material-ui/core/'
import styles from './home.module.css'

class Vegetables extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='my-4'>
                <div className='d-flex justify-content-between'>
                    <FormControl fullWidth className='col-5 col-sm-3 m-2'>
                            <InputLabel>Sort by Price</InputLabel>
                            <Select>
                                <Link to={'/vegetables/asc'}><MenuItem value={'asc'}>Low to High</MenuItem></Link>
                                <Link to={'/vegetables/desc'}><MenuItem value={'dsc'}>High to Low</MenuItem></Link>
                            </Select>
                    </FormControl>
                    <div className='m-2'>
                        <Link to='/shop'>
                            <div className='btn btn-primary'>⬅ Back</div>
                        </Link>
                    </div>
                </div>    
                <div className='row'>
                    {this.props.data2.map(e=>
                        <div key={e.id} className='col-md-3 col-6'>
                        <div className={`card text-center ${styles.productPics}`}>
                            <img src={e.src} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <Link to={`/vegetables/vegetablesinfo/${e.id}`}>Shop here</Link>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>    
                )
            }
        }
        
export default Vegetables