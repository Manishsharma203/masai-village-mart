import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'

class SortedVegis extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:this.props.sortV
        }
    }
    componentDidMount=()=>{
        if(this.props.match.params.orderBy==='asc'){
            this.setState({
                arr:this.state.arr.sort((a, b) => a.price - b.price)
            })
        }
        else{
            this.setState({
                arr:this.state.arr.sort((a, b) => b.price - a.price)
            })
        }
    }
    render(){
        console.log(this.props.sortF)
        return(
            <div className='my-4'>
                <div className='text-right m-2'>
                        <Link to='/shop'>
                            <div className='btn btn-primary'>⬅ Back</div>
                        </Link>
                    </div>
                {(this.props.match.params.orderBy==='asc' ?
                    <>
                    <div className='row'>
                        {this.state.arr.map(e=>
                        <div key={e.id} className='col-md-3 col-6'>
                        <div className={`card text-center ${styles.productPics}`}>
                            <img src={e.src} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <h5>₹ {e.price}/Kg</h5>
                                    <Link to={`/vegetables/vegetablesinfo/${e.id}`}>Shop here</Link>
                                </div>
                        </div>
                    </div>
                    )}
                    
                    </div>
                    </>
                    :
                    <>
                    <div className='row'>
                        {this.state.arr.map(e=>
                        <div key={e.id} className='col-md-3 col-6'>
                        <div className={`card text-center ${styles.productPics}`}>
                            <img src={e.src} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <h5>₹ {e.price}/Kg</h5>
                                    <Link to={`/vegetables/vegetablesinfo/${e.id}`}>Shop here</Link>
                                </div>
                        </div>
                    </div>
                    )}
                    
                    </div>
                    </>
                )}
            </div>
        )
    }
}

export default SortedVegis