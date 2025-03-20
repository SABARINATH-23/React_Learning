const Card = (props)=>{

    let {productName,price,brand,img} = props
    return(
        <div className="products">
           <div className="productsData">
            <img src={img} alt=""></img>
                <h2>{productName}</h2>
                <h3>{price}</h3>
                <h4>{brand}</h4>
           </div>
        </div>
    )
}

export default Card;