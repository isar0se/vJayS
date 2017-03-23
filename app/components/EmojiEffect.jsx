import React, { Component } from 'react'


// from state: liveEffect
var socket = io(window.location.origin)

export default class EffectScreen extends Component {

 componentDidMount(){
   socket.on('connect', () => {
     console.log("~~sketch~MainScreen Emoji Socket~~~~~")

     socket.on('drawEmoji', (emoji)=>{
       console.log("draw emoji", emoji);
       this.drawEmoji(emoji);
     })
   })
 }

 getUrl(emoji){
   switch (emoji){
     case "alien":
       return "/logos/alienemoji.png"
     case "fire":
       return "/logos/fireemoji.png"
     default: return null
   }
 }

 drawEmoji(emoji){
   let url=this.getUrl(emoji);

   console.log("url", url)

   var img=new Image(100,100);
   img.src=url;

   document.getElementById('emojiEffect').appendChild(img)

 }

 render(){
   return (
     <div className="emojiEffect" id="emojiEffect"></div>
   )
 }
}