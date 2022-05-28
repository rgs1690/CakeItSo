import React from 'react'
import { signInUser } from '../auth/auth'

export default function Login() {
  return (
    <div>

    <button type='button' className='btn' onClick={signInUser}>Sign In</button>

    </div>
  )
}
