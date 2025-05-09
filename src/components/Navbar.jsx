import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { totalItems, totalPrice } = useSelector((state) => state.Product);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl gap-lg-5">
          <Link to={''}>LuxeKart</Link>
        </a>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">{totalItems}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold"> {totalItems} Items</span>
              <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  <Link to={`Card`}>View Cart</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://th.bing.com/th/id/OIP.s9B0Jq068mphuC3UiwxMWwHaFk?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="profile" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <Link to={''}>Home</Link>
            <Link to={'About'}>About</Link>
            <Link to={'Products'}>Products</Link>
            <Link to={'Contact'}>Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
