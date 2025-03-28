import React from 'react'
import RegisterForm from '../components/RegisterForm'

function UpdateUser() {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <RegisterForm isEditMode={true} />
    </div>
  )
}

export default UpdateUser