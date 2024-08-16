import React from "react";
import './CommunitySupport.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PurpleRibbon from "../../Images/purpleRibbon.jpg";



/** Replace these with your own API keys, username and roomId from Chatkit  */
// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
// const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
const roomId = 9806194
const username = 'perborgen'
const DUMMY_DATA = [
  {
    senderId: "Pariksha",
    text: "How are you?"
  },
  {
    senderId: "Sharvari",
    text: "I'm feeling little overwhelmed today"
  },
  {
    senderId: "Sunayna",
    text: "Would you like to share?"
  }
]
class CommunitySupport extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: DUMMY_DATA
        }
         this.sendMessage = this.sendMessage.bind(this);
         this.getNewMessage = this.getNewMessage.bind(this);
         
    } 
    
    // componentDidMount() {
    //     const chatManager = new Chatkit.ChatManager({
    //         instanceLocator: instanceLocator,
    //         userId: 'janedoe',
    //         tokenProvider: new Chatkit.TokenProvider({
    //             url: testToken
    //         })
    //     })
        
    //     chatManager.connect()
    //     .then(currentUser => {
    //         this.currentUser = currentUser
    //         this.currentUser.subscribeToRoom({
    //         roomId: roomId,
    //         hooks: {
    //             onNewMessage: message => {

    //                 this.setState({
    //                     messages: [...this.state.messages, message]
    //                 })
    //             }
    //         }
    //     })
    //   })
    // }
    
    sendMessage(text) {
        this.setState({
             messages: [...this.state.messages, text]
            })
            
            console.log("here: ", this.state.messages)
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }
    
    getNewMessage(text) {
        console.log("received data: ", text);
        this.setState({
             messages: text
            
        })
    }
    
    render() {
    return (
        <div>
           <Header title="Care Bridge" subtitle="     " />
            <div className="ImageClass">
             <img  style ={{width: '400pxa'}} src={PurpleRibbon} /> 
             <div className="centered" style={{position: 'absolute', color: 'white', backgroundColor: 'purple', width: '350px',heigth:'800px'}}>
            <div id="CommPage" className="app" style={{position: 'relative'}}>
            <MessageList messages={this.state.messages} />
            <SendMessageForm messages={this.state.messages} 
            getNewMessage={this.getNewMessage}/>
            </div>
            </div>
            </div>
            <Footer note="Deutsche Bank" />

        </div>
      
    )
  }
}

class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li  key={message.id} className="message">
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                      </li>
                    )
                })}
            </ul>
        )
    }
}

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.sendMessage1(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    sendMessage1(text) {
        let tempData = [];
        // let tempData = [...this.state.messages];
        {this.props.messages.map((message, index) => {
            
            tempData.push(message);
                    
        })}
        tempData.push(
            {
            senderId: "perborgen",
            text: text
        })
        
            console.log("props messages: ", this.props.messages);
            console.log("final temp: ", tempData);
        
        
        
        console.log("here: ", tempData);
        
        this.props.getNewMessage(tempData);
        // this.setState({
        //     //  messages: [...this.state.messages, text]
        //     messages : tempData
        //     })
            
            // console.log("here: ", tempData);
            
        // this.currentUser.sendMessage({
        //     text,
        //     roomId: roomId
        // })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" 
                    style={{color:'black'}}/>
            </form>
        )
    }
}

export default CommunitySupport;