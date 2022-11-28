import { useContext, useEffect } from 'react'
import axios from 'axios'
import About from './About/About'
import Posts from './Posts/Posts'
import UserContext from '../../context/UserContext'
import './Main.css'
import { useState } from 'react'

export default function Main() {
    const { isLogin } = useContext(UserContext)
    const [posts, setPosts] = useState()

    // useEffect 안에 콜백함수를 두고, 감시하는 변수를 없게 해야 무한반복이 일어나지 않음.
    // 그냥 암기해라!!! 무한반복 -> useEffect, 깜빡인다? -> useLayoutEffect
    useEffect(()=>{
        axios
          .get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json')
          .then(json => {
            // console.log(json)
            // console.log(json.data)
            setPosts(json.data)
          })
      }, [])
      
    
    return (
        <main>
            {posts === undefined? <></>: (
            <div className="max-width">
                <h2 className="a11y-hidden">Post</h2>
                <ul className="posts">
                {/* components array로 생성 */}
                <Posts posts={posts}/>
                </ul>
                {isLogin ? <About /> : <></>}
            </div>
            )}
        </main>
    )
}


