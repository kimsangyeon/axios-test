import axios from 'axios';

const elAxiosPostBtn = document.getElementById('axiosPostBtn');
elAxiosPostBtn.addEventListener('click', () => {
  const postCats = async () => {
    try {
      return await axios({
        url: '/post/cats',
        method: 'post',
        data: {
          cats: [{
            name: 'sanji',
            age: 1,
          },{
            name: 'koo',
            age: 2,
          }],
        },
      });
    } catch(e) {
      console.log(e);
    }
  };
  
  const sendCats = async () => {
    try {
      const cats = await postCats();
      
      if (cats.data.error) {
        throw new Error(cats.data.error);
      }

      if (cats.data.success) {
        console.log('success!');
      }
    } catch(e) {
      console.log(e);
    }
  };

  sendCats();
});

const elAxiosPostMethodBtn = document.getElementById('axiosPostMethodBtn');
elAxiosPostMethodBtn.addEventListener('click', () => {
  const postMethodCats = async () => {
    try {
      return await axios.post('/post/cats', {
        cats: [{
          name: 'sanji',
          age: 1,
        },{
          name: 'koo',
          age: 2,
        }],
      });
    } catch(e) {
      console.log(e);
    }
  };

  const sendCats = async () => {
    try {
      const cats = await postMethodCats();

      if (cats.data.error) {
        throw new Error(cats.data.error);
      }

      if (cats.data.success) {
        console.log('success!');
      }
    } catch(e) {
      console.log(e);
    }
  };

  sendCats();
});