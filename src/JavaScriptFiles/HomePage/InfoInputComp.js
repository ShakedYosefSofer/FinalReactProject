import { useState } from "react"
import WishLish from "../WishList/WishList"
//import img1.jpg from "../image"
const changeText = (firstPra,secPra,setFirstPra)=>{
    setFirstPra(secPra)
    console.log(firstPra)
    }



const InfoInputComp = ({client}) => {
    let secPra ="born 5.8.1990 | adress: TLV | number: 123456 | email: 123@gmail.com  | male | married | driver"
    const [firstPra, setFirstPra] = useState("born 5.8.1990 | adress: TLV | number: 123456 ")
    let img1 = '../image/img1.jpg'
    return (  
        
        <div className="info-input-comp">
            <h2 className="userName">Welcome!! <br></br> {client.userName},<br></br>
              your ID is : {client.id} <br></br>
              image: {img1}</h2>
            <button className="change-text" onClick={() => changeText(firstPra,secPra,setFirstPra)}>Click to show full personal data</button>
            <br></br><br></br>
           <h3><b> Personal data: {client.Personaldata} </b> </h3>
            <p className="first-context" >{firstPra}</p>
            <h3><b>last wish list: {client.WishLish}</b></h3>


        </div>
    );
}


export default InfoInputComp;