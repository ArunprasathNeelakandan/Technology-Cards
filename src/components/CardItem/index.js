import './index.css'

const CartItem = props => {
  const {item} = props
  console.log(item)

  return (
    <li className={`card ${item.className}`}>
      <h4 className='title'>{item.title}</h4>
      <p>{item.description}</p>
      <img src={item.imgUrl} className='img'/>
    </li>
  )
}

export default CartItem
