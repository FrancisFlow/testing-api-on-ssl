"use client"
import { useState } from "react"
const apiKey = process.env.API_KEY



export default function Home() {
  const [transcripted, setTranscript]=useState('Initial')
  async function handleClick(){
    
    try{
      const audioUrl = "https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav";
      const response = await fetch(
        "https://api.deepgram.com/v1/listen?language=en-US&model=general&punctuate=true",{
          method: "POST",
          headers: {
            'content-type': 'application/json',
            Authorization: `Token ${apiKey}`
          },
          body: JSON.stringify({url: audioUrl})
        }
      )
      const data = await handleClick.json()
      console.log(data)
      setTranscript(data.results.channel[0].alternatives[0].transcript)

    }
    catch(error){
      console.log(error)
    }

    
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button  className="bg-emerald-400 overflow-hidden p-2 rounded-full hover:bg-slate-700 hov
        text-white hover:scale-125 duration-300" onClick={handleClick}>Fetch Transcript</button>
     <div className="m-4 bg-slate-600 text-gray-300 text-center p-5" >
     </div>
     <p>
      {transcripted}
     </p>
      </div>
    </main>
  )
}
