import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Create() {
  const [user,setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: ""
  })
 // navigating within logic
 const navigate = useNavigate()

  const readInput = (event) => {
    //console.log('input =', event.target.value)
    setUser({ ...user, [event.target.name]:event.target.value})
  }

  //submit handler
  const submitHandler = async (e) => {
     e.preventDefault()
     //reading the local storage data
     let usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem("users")) : []
     //check email and mobile already exists or not
     let extEmail = usersData.find(item => item.email === user.email)
     let extMobile = usersData.find(item =>item.mobile === user.mobile)

     if(extEmail){
       toast.warning(`${user.email} email already registered`)
     }else if(extMobile){
      toast.warning(`${user.mobile}  already registered`)

     }else{
      let newUser = {
        id: Math.floor(Math.random() * 100000),
        ...user
      }
      usersData.push(newUser)
      localStorage.setItem("users", JSON.stringify(usersData))
      toast.success("New User Added successfully")
      navigate('/')
     }
     
  }
  return (
 <div className="container">
  <div className="row">
    <div className="col-md text-center">
      <h3 className="display-3 text-primary">Create User</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-12">
      <div className="card">
        <div className="card-body">
          <form onSubmit={submitHandler} >
            <div className="form-group mt-2">
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' value={user.name} onChange={readInput} id='name'  className='form-control' required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' value={user.email} onChange={readInput} id='email' className='form-control' required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor='mobile'>Mobile</label>
              <input type='number' name='mobile' value={user.mobile} onChange={readInput} id='mobile' className='form-control' required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor='address'>Address</label>
              <textarea name='address' value={user.address} onChange={readInput} id='address' cols="30" rows="6" className='form-control' required></textarea>
            </div>
            <div className="form-group mt-2">
              
              <input type='submit' value="Add New User" className='btn btn-primary'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
 </div>
    
  )
}

export default Create