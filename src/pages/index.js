import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Launcher } from 'react-chat-window-with-image-view'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
import Background from "../components/background-animation"
import DarkMode from "../components/dark-mode-toggle"






function IndexPage() {
  const [messageList, setMessageList] = useState([]);

  function onMessageWasSent(message) {
    messageList.push(message)
    sendMessage("Hey, I am in development phase. My trainer is training me. Please go in the contact me section");
  }

  function sendMessage(text) {
    let responseMessage= {
      author: 'them',
      type: 'text',
      data: {
        text: text
      }
    }
    setMessageList([...messageList, responseMessage])
  }
  return (
    <Layout >
      
<Background/>
      <SEO title="Home" />
      <DarkMode/>
      <div className="container">
        <div className="img-container">
          <img className="portfolio-img" alt="profile" src={"https://avatars2.githubusercontent.com/u/12448024?s=460&u=637e82a0da78858aef826d8d9dbd7db5e2caabbe&v=4"} />
        </div>
        <h1>Simran Raj</h1>
        <h3>Developer, Designer, Blogger</h3>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        <Link to="/">Home</Link><br />
        <Link to="/blog-page">Blog</Link> <br />
        <Link to="/contact-me">Contact Me</Link> <br />
      </div>
      <Launcher
        agentProfile={{
          teamName: 'lets-talk',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={onMessageWasSent}
        messageList={messageList}
        showEmoji
      />
    </Layout>
  )
}

export default IndexPage
