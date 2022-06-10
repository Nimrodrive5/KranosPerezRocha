import React, { useState } from 'react';

const ItemCount =({initial, max, onAdd}) => {
    const [count, setCount] = useState (initial)

    const sumar= () =>{
        if (count < max){
        setCount (count + 1)
    } else {
        alert ("No tenemos mas stock")
    }
}
    const restar = ()  =>{
       count > initial ?  setCount (count - 1) : alert ("No puedes quitar mas productos")
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={() => onAdd (count)}>Producto Agregado</button>
    </div>
  );
}

export default ItemCount;