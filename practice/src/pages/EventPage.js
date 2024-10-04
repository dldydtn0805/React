import { Outlet } from "react-router-dom"
function EventPage() {
  return (
    <div>
      EVENT
      <Outlet></Outlet>
    </div>
  )
}

function Service() {
  return (
    <div>
      SERVICE
    </div>
  )
}

function Coupon() {
  return (
    <div>
      COUPON
    </div>
  )
}

export {EventPage, Service, Coupon}