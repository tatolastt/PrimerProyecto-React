// import { useEffect } from "react"
// import { useState } from "react"
// import Post from "./Post"

// function Fetch() {
//   const [posts, setPosts] = useState( [] )

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(datoRecibido => setPosts(datoRecibido))
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <div>
//         <h3>post</h3>
//         {posts.map((post, i) => {
//             return (
//                 <Post post={post} key={i}/>
//             )
//         })}

//     </div>

    
//   )
// }

// export default Fetch