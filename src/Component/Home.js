import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container' style={{paddingTop: '318px', paddingBottom: '318px'}}>
                <div className="card">
                    <div className="card-body">
                        <h3 className='mx-auto py-5'>Home Landing Page</h3>
                    </div>
                </div>
            </div>
        )
    }
}