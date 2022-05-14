import React, {useEffect, useRef, useState} from "react";



function Counter(){
  function makeFRandomNumber(){
    let randNo = Math.floor(Math.random() * 50)
    // console.log(randNo)
    return randNo
  }
  const [price, setPrice] = useState(0)
  const [color, setColor] = useState("black");
  const prevPriceRef = useRef(price);
  // console.log(prevPriceRef.current)

  useEffect(() => {
    const prevPrice = prevPriceRef.current;
    if(price > prevPrice){
      setColor("green")
    } else if(price < prevPrice){
      setColor("red")
    } else {
      setColor("black")
    }
    prevPriceRef.current = price;
  }, [price])

  useEffect(() => {
    const id = setInterval(() => setPrice(makeFRandomNumber), 1000);
    return function cleanup(){
      clearInterval(id);
    };
  }, [])

  return (
    <div>
      <h1>TickMaster</h1>
      <h2 style={{ color : color}}>Price: ${price} </h2>
    </div>
  )


}

export default Counter;
// makeFRandomNumber()