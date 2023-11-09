import { Link, useRouteError } from "react-router-dom"

export default function CareerError() {
    const err = useRouteError();
  return (
    <div className="career-details">
        <h1>Error</h1>
        <p>{err.message}</p>
        <Link to='/'>Go to Home Page</Link>
    </div>
  )
}
