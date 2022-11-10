import React from "react";

function Plan(props){

    
    return(
        <>
        <li>{props.value} <button className="bg-danger p-2" onClick={()=>{props.sendData(props.id)}}>X</button></li>


        {/* {
            arr.map((value, i)=>{
                return(
                <React.Fragment key={i}>
                <li>{value} <button className="bg-danger p-2" onClick={()=>{props.sendData(i)}}>X</button></li>
                </React.Fragment>
                )
                
            })
           
        } */}
        </>
    )
}


export default Plan;