import { Outlet } from 'react-router-dom';

function AboutPage () {
  return (
    <div>
      ABOUT
      <Outlet></Outlet>
    </div>
  )
}

function Member () {
  return (
    <div>
      MEMBER
    </div>
  )
}

function Location () {
  return (
    <div>
      MEMBER
    </div>
  )
}

export {AboutPage, Member, Location}