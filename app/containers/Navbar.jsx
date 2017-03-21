import React from 'react'
import {Menu, Button} from 'semantic-ui-react'
import YouTubeSearch from 'APP/app/components/YouTubeSearch'
import store from 'APP/app/store'
import LoginLogout from 'APP/app/components/LoginLogout'
import {addToQueue, fetchQueue, clearQueue} from 'APP/app/utils/queue'

export const Navbar = () => {
  
  
  
  return (
    <Menu widths={3}>
      <Menu.Item>
        <Button basic onClick={evt => {
          evt.preventDefault()
          store.dispatch(clearQueue('queueLeft'))
          store.dispatch(clearQueue('queueRight'))
        }}>clear queues</Button>
        <Button basic onClick={evt => {
          evt.preventDefault()
        }}>save set</Button>
      </Menu.Item>
      <Menu.Item>
        <YouTubeSearch 
          apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4' // how to use .env on the front-end
          maxResults='5'
          placeHolder='<- search'
          callback={results => {
            store.dispatch(addToQueue(results[0], 'queueLeft'))
          }}
        />
        <YouTubeSearch
          apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4' // how to use .env on the front-end
          maxResults='5'
          placeHolder='search ->'
          callback={results => {
            store.dispatch(addToQueue(results[0], 'queueRight'))
          }}
        />
      </Menu.Item>
      <LoginLogout />
    </Menu>
  )
}