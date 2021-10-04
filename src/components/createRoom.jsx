import React, { Component } from 'react';

class createRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.click = this.click.bind(this)
    }

    onChangeHandler = (e) => {
        this.setState({ textInput: e.target.value })
    }
    click = (e) => {
        e.preventDefault()
        const url = this.state.textInput.replace('http://localhost:3000/', '/')
        this.props.history.push(url)
    }

    render() {
        return (

            <div className="than">
                <div className="t-left">
                    <br /><br /><br />
                    <p className="p1">Cuộc họp video chất lượng.<br /> Giờ đây miễn phí cho tất cả <br />mọi người.</p>
                    <p className="p2">Chúng tôi đã thiết kế lại Google Meet - dịch vụ tổ chức<br /> cuộc họp kinh doanh với
                        độ bảo mật cao - để cung cấp<br /> miễn phí cho mọi người.
                    </p>
                    <br /><br />
                    <div className="button">
                        <button id="newRoom">Cuộc họp mới</button>
                        <input type="text" name="name" placeholder="Nhập mã hoặc đường link" onChange={this.onChangeHandler} />
                        <button class="aui-button" id="tham-gia" onClick={this.click}>Tham gia</button>
                    </div>
                </div>
                <div className="t-right">
                    <img src="./Capturee.PNG" alt="anh" />
                    <p className="p21">Nhận đường liên kết bạn có <br /> thể chia sẻ</p>
                    <p className="p22">Nhấn vào <b>cuộc họp mới</b> để nhận đường liên kết mà<br /> bạn có
                        thể gửi cho những người mình muốn<br /> họp cùng
                    </p>
                </div>
            </div>

        );
    }
}

export default createRoom;