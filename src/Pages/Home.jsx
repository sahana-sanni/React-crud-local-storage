import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Home() {
  const [val,setVal] = useState([])

  // useEffect(callback,[dependancy])
  useEffect(() => {
    let usersData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    console.log('users =', usersData)
    setVal(usersData)
  },[])

  //delete user
  const delUser = async (id) => {
    if(window.confirm(`Are you sure to delete an user id ${id}?`)){
      //delete user
      //read users data
    let usersData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []

    //find user index
    let userIndex = usersData.findIndex(item => item.id == id)

    //delete
    usersData.splice(userIndex,1)

    //store
    localStorage.setItem("users", JSON.stringify(usersData))

    toast.success("user data deleted successfully")
    window.location.reload()

    }else{
      return
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <NavLink to={`/user/create`} className="btn btn-primary float-end">Add User</NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-primary">Home</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="table table-responsive">
            <table className='table table-bordered table-hovered table-striped'>
              <thead className='text-center'>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Actions</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                    val && val.map((item,index) => {
                      return (
                        <tr key={index}>
                          <td> {item.name} </td>
                          <td> {item.email} </td>
                          <td> {item.mobile} </td>
                          <td> {item.address} </td>
                          <td className='d-flex justify-content-center'>
                            <NavLink to={`/user/edit/${item.id}`}className='btn btn-sm btn-info me-2'>
                              <i className='bi bi-pencil'></i>
                            </NavLink>
                            <button onClick={() => delUser(item.id)} className='btn btn-sm btn-danger'>
                              <i className='bi bi-trash'></i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home