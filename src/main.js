import React, {useState} from "react";

function Main(){
 let [i, setI] = useState(0)
  function Increase(){
  i = i + 1
    setI(i)
 }
 function Decrease(){
   i = i-1
   setI(i)
   console.log(i)
 }
 function Reset(){
   i = 0
   setI(i)
 }
  return(
   <section className='main'>
     <p>{i}</p>
     <div   className='btn'>
      <button className='btn1' onClick={Increase} >Count</button>
      <button className='btn2' onClick={Decrease} >De-count</button>
      <button className='btn3' onClick={Reset}>Reset</button>
     </div>
     

   </section>
 )
}

export default Main


