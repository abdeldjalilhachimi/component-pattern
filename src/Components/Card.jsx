import CardContent from "./CardContent/CardContent"
import CardFooter from "./CardFooter/CardFooter"
import CardHeader from "./CardHeader/CardHeader"

/* eslint-disable react/prop-types */
const Card = ({children}) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  ">{children}</div>
  )
}

export default Card


Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter