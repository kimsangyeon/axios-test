import axios from 'axios'

const elAxiosGetBtn = document.getElementById('axiosGetBtn');
elAxiosGetBtn.addEventListener('click', () => {
  const getCats = async () => {
    try {
      return await axios({
        url: '/get/cats',
        method: 'get',
      });
    } catch(e) {
      console.log(e);
    }
  };

  const showCats = async () => {
    const cats = await getCats();

    if (cats.data) {
      console.log(cats.data);
    }
  };

  showCats();
});

const elAxiosGetMethodBtn = document.getElementById('axiosGetMethodBtn');
elAxiosGetMethodBtn.addEventListener('click', () => {
  const getCats = async () => {
    try {
      return await axios.get('/get/cats', {
        // params 설정시 query로 설정되어 전송 /get/cats?name=sanji
        // params: {
        //   name: 'sanji',
        // }
      });
    } catch(e) {
      console.log(e);
    }
  };

  const showCats = async () => {
    const cats = await getCats();

    if (cats.data) {
      console.log(cats.data);
    }
  };

  showCats();
});

const elAxiosGetQueryBtn = document.getElementById('axiosGetQueryBtn');
elAxiosGetQueryBtn.addEventListener('click', () => {
  const getCatSanji = async () => {
    try {
      return await axios({
        url: '/get/cats?name=sanji',
        method: 'get',
        data: {
          name: 'sanji'
        },
      });
    } catch(e) {
      console.log(e);
    }
  };

  const showCat = async () => {
    const cats = await getCatSanji();

    if (cats.data) {
      console.log(cats.data);
    }
  };

  showCat();
});