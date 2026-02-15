
import './index.css'
import { useState } from "react";
import Topbar from "./components/layout/Topbar";
import ChatPanel from "./components/layout/ChatPanel";
import CodePanel from "./components/layout/CodePanel";
import PreviewPanel from "./components/layout/PreviewPanel"; 




function App() {
   const [result, setResult] = useState(null);
  const [messages, setMessages] = useState([]);


  return (
 
   <main className=" bg-gradient-bg text-slate-200 font-poppins">
    <Topbar/>
      <div className="flex flex-1 gap-4 p-4 min-h-0">
        <ChatPanel result={result} setResult={setResult} messages={messages} setMessages={setMessages} />
        <CodePanel code={result?.code || ""}/>
        <PreviewPanel result={result} />
      </div>
    </main>

  );
}

export default App



 


