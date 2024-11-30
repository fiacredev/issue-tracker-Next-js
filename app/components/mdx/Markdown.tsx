"use client"
import {EditorContent, useEditor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Toolbar from "./ToolBar"

interface Props{
  onChange:Function
}
  
function Markdown({
  description,
  onChange,
}:{
  description:string
  onChange: (richText: string) => void
}){
  const editor = useEditor({
    extensions:[StarterKit.configure()],
    content:description,
    editorProps:{
      attributes:{
        class:
        "rounded-md border min-h-[170px] border-input bg-back text-red mt-2 mb-2 outline-green w-96 p-4"
      },
    },
    onUpdate({editor}){
      onChange(editor.getHTML())
      console.log(editor.getHTML())
    },
  })
  return (
    <div className="flex flex-col justify-stretch min-h-[250px">
      <div className="w-52">
        <Toolbar editor={editor}/>
      </div>
      <EditorContent editor={editor} className=""/>
    </div>
  )
}

export default Markdown