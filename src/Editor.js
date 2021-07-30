import  React,{useState, useRef} from "react";
// import Jodit from "jodit";
import "jodit/build/jodit.css";
import "./Editor.css"
import JoditEditor from "jodit-react";

// const html = `
// <p>Hey this <strong>editor</strong> rocks 😀</p>
// `;

const Editor = () => {
  if(localStorage.getItem('loggedin') == null){
    window.location.assign("/login")
 }
  React.useEffect(() => {
    setTimeout(()=>{
        // const editor = Jodit.make("#editor");
        // editor.value = html;
    },1000)  

  });
  const editor = useRef(null)
  const [content, setContent] = useState('')
  console.log(content)
  const config = {
    enableDragAndDropFileToEditor: true,
    readonly: false // all options from https://xdsoft.net/jodit/doc/
}
console.log(localStorage.getItem('loggedin'))
function submit(content){
  console.log('hi',content)
  fetch('https://bingelist-backend-asfxz.run-ap-south1.goorm.io/blog',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "content": content,
      "title": "The N",
      "genre":"hORROR",
      "time_to_read": 15,
      "meta": "m",
      "tags": "Comedy",
      "rating": 5
    })
  })
  .then(res=>console.log("Response",res))
  .then(json=>console.log("JSON",json))

}

  return (
    <div className="editor">
      {/* <a href="/page1">Go to Blogs!</a> */}
      <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
      />
      <button onClick={()=>submit(content)}>Submit</button>
      {/* <textarea id="editor" name="editor" /> */}
    </div>
  );
};

export default Editor;