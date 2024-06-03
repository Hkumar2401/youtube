import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const err = useRouteError();
    const {status, error} = err;


    
  return (
    <div className="w-full p-5">
        <h1 className="text-4xl my-10">Oops!</h1>
        <h1 className="font-bold text-6xl">{status}</h1>
        <h2>{error.message}</h2>
    </div>
  )
}

export default ErrorPage