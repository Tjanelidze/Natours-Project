import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:3000/api/v1/users/updateMe',
      data: {
        name,
        email,
      },
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', 'Data updated successfully!');
    }
  } catch (error) {
    console.log(error);
    showAlert('error', error.response.data.message);
  }
};
