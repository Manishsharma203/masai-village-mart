import React from 'react'

class LoginTrue extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{height:'400px'}}>
                <div className='my-5'></div>
                <div className='text-center my-5'>
                    <div className='display-4 font-weight-bold'>You are already Logged in</div>
                </div>
            </div>
        )
    }
}

export default LoginTrue