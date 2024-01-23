import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container'>
                <h3 className='mx-auto py-5'>Home Landing Page</h3>
            </div>
        )
    }
}