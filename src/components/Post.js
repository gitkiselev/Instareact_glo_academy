import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User alt="man"
                 name="Scott"
                 min
                 src="andrei-kiselev.ru/img/irman1.jpg" />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">some account</div>
                <div className="post__description">Lorem Ipsum is simply dummy text of
                 the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took
                   a galley of type and scrambled it to make a type specimen book.</div>
            </div>
        )
    }
}