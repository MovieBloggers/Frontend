import React,{useEffect,useState} from 'react'
import './BlogMiddle.css'
const BlogMiddle = () => {
    function search(tags,option){
        console.log(option)
        fetch(`https://bingelist-backend-asfxz.run-ap-south1.goorm.io/blogs/tags/${tags}/${option}`,{
            method:"GET",
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            console.log(json[0].content)
            document.getElementById('child').innerHTML = ''
            json.forEach(element => {
                document.getElementById('child').innerHTML += element.content
            });
            // document.getElementById('child').innerHTML = json[0].content
        })
    }
    const [option,setOption] = useState('AllBlogs')

        function handleChange(event){
            setOption(event.target.value)
        }

    const [tags, settags] = useState('')
    // const [time, settime] = useState('')
    const [content, setcontent] = useState('')
    return (
    <div class="main">
        <input type="text" value={tags} placeholder="Search" onChange={(e)=>settags(e.target.value)}/>
        {/* <input type="text" value={time} placeholder="Time" onChange={(e)=>settime(e.target.value)}/> */}
        <select name='option' onChange={handleChange} defaultValue="AllBlogs">
            <option value="AllBlogs">AllBlogs</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>
        <button onClick={()=>search(tags,option)}>Search</button>

        <div id="child">

        </div>
    </div>
    )
}

export default BlogMiddle
