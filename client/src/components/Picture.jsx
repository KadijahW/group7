import React from 'react';
import Interactions from './Interactions';
import axios from 'axios';
// import './CSS/PictureDisplay.css';

class Picture extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: props.username,
            poster_name: props.poster_name,
            caption: props.caption,
            hashtag: props.hashtag,
            id: props.id,
            url: props.url,
            alt: props.alt,
            height: props.height,
            width: props.width
         
        }
    }
    

    render() {

        const { username, poster_name, caption, hashtag, id, url, alt, height } = this.state
        console.log("picture", hashtag)
        console.log(this.props.tags)

        return (
            <div id='pictures' >
                {/* <img onClick={this.getSinglePicture} */} 
                <img
                    src={url}
                    alt={alt}
                    width={`360px`}
                    height={`${height}px`}//'300px'
                />

                <Interactions username={username} poster_name={poster_name} caption={caption} id={id} tags={this.props.tags} comments={this.props.comments} />
            </div>
        )
    }
}
export default Picture;