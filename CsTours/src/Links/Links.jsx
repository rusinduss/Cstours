import 'react'
import { Link } from "react-router-dom";

function Links(props) {
  return (
    <div>
        <Link to={props.linkurl}>{props.linkname}</Link>
    </div>
  )
}

export default Links