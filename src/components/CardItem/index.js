// Write your code here.
const CartItem = props => {
  const {item} = props

  return (
    <li>
      <h4>{item.title}</h4>
    </li>
  )
}

export default CartItem
