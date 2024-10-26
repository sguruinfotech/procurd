import axios from 'axios';
import React, { useEffect, useState } from 'react'


const UserForm = ({ _id }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/${_id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log('Error fetching user data:', error);
      });
  }, [_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/update/${_id}`, user);
      alert('User updated successfully!');
      console.log('Updated user:', response.data);
    } catch (error) {
      console.error('Error while updating user:', error);
    }
  };



  return (
    <>



      <div className="row updfrow1 d-flex justify-content-center">
        <div className="row updfrow2 d-flex justify-content-center">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email id</label>
              <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input type="number" className="form-control" name="mobile" value={user.mobile} onChange={handleChange} />
            </div>


            <button type="submit" className="btn updatebtn">Update</button>
          </form>
        </div>
      </div>



    </>
  )
}

export default UserForm;