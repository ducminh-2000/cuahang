import React, { Component } from 'react';

class room extends Component {
    constructor(props){
        super(props)
        this.state = {
            config : {
                video: {
                    width: 720,
                    height: 400
                },
                audio: false
            },
            stream: Object 
        }
        this.videoMute = this.videoMute.bind(this)
        this.microMute = this.microMute.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        navigator.mediaDevices.getUserMedia(this.state.config).then((stream) => {
            this.setState({stream: stream})
            var video = document.getElementById('stream')
            video.srcObject = stream
            video.play();
        })
        
    }
    microMute = (e) => {
        e.preventDefault()
        this.setState({config: {
            video: true,
            audio: false
        }})
        // navigator.mediaDevices.getUserMedia(this.state.config).then((stream) => {
        //     var video = document.getElementById('stream')
        //     video.srcObject = stream
        //     video.play()
        // })
    }
    videoMute = (e) => {
        e.preventDefault()
        this.state.stream.pause()
        // navigator.mediaDevices.getUserMedia(this.state.config).then((stream) => {
        //     var video = document.getElementById('stream')
        //     video.srcObject = stream
        //     video.play()
        // })
    }
    render() {
        return (
            <div className="morong">
            <div className="m-left">
                <div className="stream"> 
                    <video id="stream"></video>
                    <button id="video-btn" onClick={this.videoMute}>video</button>
                    <button id="micro" onClick={this.microMute}>micro</button>
                </div>
            </div>
            <div className="m-right">
                <p className="pm1">Sẵn sàng tham gia?</p>
                <p className="pm2">Vui lòng đợi người chủ trì cho phép bạn vào phòng</p>
                <div className="button">
                    <button id="attend">Tham gia ngay</button>
                    <p>   </p>
                    <button id="display">Trình bày ngay</button>
                </div>
            </div>
        </div> 
        );
    }
}

export default room;