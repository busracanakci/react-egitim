import React, { Component } from 'react';
class User extends Component {
    render(){
        //Destructing
        const {name, task, time} = this.props;
        return (
            <div>
                <ul>
                    <li>İsim: {name}</li>
                    <li>Görev:{task} </li>
                    <li>Süre:{time}</li>
                </ul>
            </div>
        );
    }
    
}
export default User;
