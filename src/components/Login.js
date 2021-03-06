import React from 'react'
import {Container,Typography, TextField, Box} from '@material-ui/core/'
import Redirect from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    login=(e)=>{
        if(this.state.username=='masai' && this.state.password==1234){
            e.preventDefault()
            this.props.loginCallback(true)
            // alert('Login Successfull !! You can go to Cart now')
            this.props.history.push('/shoppingcart')
        }
        else{
            alert('Login Unsuccessfull !! Please Try Username:masai, Password:1234')
        }
    }

    render(){
        console.log(this.props)
        return(
            <div className='my-4'>
                <Container maxWidth="sm" className='shadow'>
                        <Typography variant="h4" component='div' style={{height: '400px' }} >
                            Login Menu
                            <Box className='my-5'>
                            <form className='text-center' onSubmit={this.login}>
                                <TextField fullWidth onChange={this.changeHandler} label='Username' name='username' value={this.state.username} variant="outlined" />
                                <div className='my-5'></div>
                                <TextField fullWidth onChange={this.changeHandler} type='number' label='Password' name='password' value={this.state.password} variant="outlined" />
                                <div className='my-3'></div>
                                <input type='submit' />
                            </form>
                            </Box>
                        </Typography>
                </Container>
            </div>
        )
    }
}

export default Login