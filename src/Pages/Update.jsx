import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Update() {
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

  useEffect(() => {
    let usersData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    let single = usersData.find(item => item.id == params.id)
    setUser(single)
  },[])

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(`updated user`, user)
    //read local storage data
    let usersData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    //find the index
    let userIndex = usersData.findIndex(item => item.id == params.id)
    //updated local array
    usersData.splice(userIndex,1,user)

    //store the data back to localstorage
    localStorage.setItem("users", JSON.stringify(usersData))

    toast.success("User data updated successfully")
    navigate('/')
  }
  const params = useParams()
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Update</h3>
          <p className="text-secondary"> { params.id }</p>
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
              
              <input type='submit' value="Updated User" className='btn btn-warning'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Update