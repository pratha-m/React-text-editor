import { useState } from 'react';
import ReactQuill,{Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./App.css";
import parse from 'html-react-parser';

function App() {

  const [htmlContent,setHtmlContent]=useState("");
  const [textContent,setTextContent]=useState("");

  const handleEditChange=(val,delta,source,editor)=>{
    setTextContent(editor.getText());
    setHtmlContent(val);
  }
  
  return (
    <>
    <div className='editorContainer' style={{  backgroundColor:"black"}}>
     <ReactQuill 
        theme="snow" 
        value={htmlContent} 
        onChange={handleEditChange} 
        className='custom-editor' 
        style={{ width: '100%', height:'100%' }}
        modules={{
          toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image', 'video'],
              ['clean']
          ]
      }}
      />
    </div>
    <h1>HTML Parsed Content is :</h1>
    {parse(htmlContent)}
    <h1>Normal Text is :</h1>
    {textContent}
    </>
  )
}

export default App
