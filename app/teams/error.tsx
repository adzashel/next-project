"use client"

import { useEffect } from "react"

const error = ({error } : { error : Error }) => {
    useEffect(() => {
        console.error(error)
        // Send error to monitoring system
        //...
    });

  return (
    <div className="flex justify-center items-center h-screen">
      Error while fetching data : { error.message }
    </div>
  )
}

export default error
