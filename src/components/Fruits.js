import React from 'react'
import { Link } from 'react-router-dom'
import {Select, MenuItem, InputLabel, FormControl} from '@material-ui/core/'
import styles from './home.module.css'

class Fruits extends React.Component {
    constructor(props) {
        super(props)
    }
    changeHandler=()=>{
        
    }

    render() {
        console.log('Fruits match',this.props)
        
        return (
            <div className='my-4'>
                <div className='d-flex justify-content-between'>
                    <FormControl fullWidth className='col-5 col-sm-3 m-2'>
                        <InputLabel>Sort by Price</InputLabel>
                        <Select>
                            <Link to={'/fruits/asc'}><MenuItem value={'asc'}>Low to High</MenuItem></Link>
                            <Link to={'/fruits/desc'}><MenuItem value={'dsc'}>High to Low</MenuItem></Link>
                        </Select>
                    </FormControl>
                    <div className='m-2'>
                        <Link to='/shop'>
                            <div className='btn btn-primary'>⬅ Back</div>
                        </Link>
                    </div>
                </div>

                <div className='row'>
                {this.props.data1.map(e=>
                    <div key={e.id} className='col-md-3 col-6'>
                    <div className={`card text-center ${styles.productPics}`}>
                        <img src={e.src} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <Link to={`/fruits/fruitsinfo/${e.id}`}>Shop here</Link>
                            </div>
                        </div>
                    </div>
                    )}
                    
                </div>
                
            </div>
                )
            }
        }
        
export default Fruits