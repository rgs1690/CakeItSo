import React from 'react'
import { signInUser } from '../auth/auth'



export default function Login({user}) {
  

  return (
    <div>
      {user === null ? (
        <><div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div><div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div></>
        ) : (
<>
        <button type='button' className='btn' onClick={signInUser}>Sign In</button>
  </>
        )}

    </div>
  )
}
