import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import tpLogo from './1200px-Travis_Perkins.png';
import headerImage from './tplogo.png';
import Message from './Message.js';


export default class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Alan Cooper",
                content: <p></p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            },
            {
                username: "Travis Chat",
                content: <p>Hi, welcome to the Travis Perkins FAQ BOT</p>,
                img: tpLogo,
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

   
      

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    setMessage(response){

        this.setState({
            chats: this.state.chats.concat([{
                username: "Travis Chat",
                content: <p>{response.data.answers[0].answer}</p>,
                img: tpLogo,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    handleMessage(question){
        
        let data = {"question": question}

       let Url = 'https://travisperkinsqnademo.azurewebsites.net/qnamaker/knowledgebases/c6214eef-a393-43f4-83ae-6ecfa78398ff/generateAnswer'

       var self = this;


       fetch(Url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': ' EndpointKey cded8aea-3b4e-42cf-b733-0d2159441400'
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
          .then((responseJson) => {

            self.setMessage(responseJson);

            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });

    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Alan Cooper",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });

        this.handleMessage(ReactDOM.findDOMNode(this.refs.msg).value)
    }

    render() {

        return (
            <View />
         
        );
    }
}


const styles = StyleSheet.create({
    chatroom: {
    
      flex: 1,
      backgroundColor: '#0a4f38',
      justifyContent: 'center',
    },
  });