import React from 'react'

class Error extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='py-5' style={{background:'teal'}}>
                <div className='text-center py-4'><i className="material-icons" style={{fontSize:'40px'}}>-- error --</i></div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <div className='display-1 text-danger font-weight-bold'>4</div>
                        <div className='display-1 text-warning font-weight-bold'>{`</>`}</div>
                        <div className='display-1 text-danger font-weight-bold'>4</div>
                    </div>
                    <div className='my-5'></div>
                    <div className='font-weight-bold text-center text-warning'>
                        <div className='offset-4 text-left'>
                        <div className='text-danger'>Error(){`{`}</div>
                        <div className='ml-2'>message = "page not found";</div>
                        <div className='text-danger'>{`};`}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Error
