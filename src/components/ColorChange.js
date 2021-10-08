import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { changeCol } from '../features/theme';
function ColorChange() {
    const dispatch = useDispatch();
    const [color, setcolor] = useState("")
    return (
        <div>
            <input type="text" onChange={(e)=>{setcolor(e.target.value)}} /> <br />
        <input type="color" onChange={(e)=>{setcolor(e.target.value)}}/> <br />
       <select name="color" id="color"  onChange={(e)=>{setcolor(e.target.value)}}>
           <option value="red">Red</option>
           <option value="orange">Orange</option>
           <option value="brown">Brown</option>
       </select> <br />
       <div onChange={(e)=>{setcolor(e.target.value)}} >
       <input type="radio" name="color" value="yellow" /> Yellow <br />
       <input type="radio" name="color" value="coral" /> Coral <br />
        <button onClick={()=>{dispatch(changeCol(color))}}>Change Color</button>
       </div>
        </div>
    )
}

export default ColorChange
