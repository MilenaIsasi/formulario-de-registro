import React from 'react'
import '../layouts/style/notfound.css'
import { Link } from 'react-router-dom'

const NoutFoud = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-purple-100 to-blue-200 " id='bglila'>
    <div className="border-t border-gray-00 text-center pt-8">
      <h1 className="text-9xl font-bold text-purple-500">404</h1>
      <h1 className="text-6xl font-medium py-8"> Page not found</h1>
    <Link className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" to={'/'}>
			HOME
		</Link>
    </div>
    </div>
    </div>
  )
}

export default NoutFoud