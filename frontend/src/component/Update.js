import axios from 'axios';
import React, { useEffect, useState } from 'react'
  

  const UserForm = ({ _id }) => {
    const [user, setUser] = useState({
      name: '',
      email: '',
      mobile: ''
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
    <div>
       
       <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="number" name="mobile" value={user.mobile} onChange={handleChange} />
        </div>
        <input type='submit'/>
      </form>    
    </div>
  )
};
export default UserForm;