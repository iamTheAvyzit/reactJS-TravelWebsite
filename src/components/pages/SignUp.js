import React from 'react';
import '../../App.css';

export default function SignUp() {
  return (
    <div>
      <form>
          <div className='form_sign_up'>
            <h2>Sign Up</h2>
            <h5>Create an account for free</h5><br/>
          </div>
          <div className='form_gmt'>
            <h5 className='form_border'><img src="https://img.icons8.com/fluency/30/000000/google-logo.png"/> Sign up with Google</h5>
            <h5 className='form_border'><img src="https://img.icons8.com/fluency/30/000000/facebook.png"/> Sign up with Facebook</h5>
            <h5 className='form_border'><img src="https://img.icons8.com/fluency/30/000000/twitter.png"/>Sign up with Twitter</h5>
          </div>
          <div className='form_acceptbox'><input className='form_checkbox' type='checkbox'/>
          &nbsp;I'm not interested in updates about new products and services.
          </div>
          <input className='form_submit' value='Sign In' type='submit'/>
      </form>
    </div>
  )
}
