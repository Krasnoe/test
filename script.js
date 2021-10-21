const getForm = () => {

  const addWrapper = () => {
    const wrap = document.createElement('div');
    wrap.classList = 'wrapper';
    wrap.innerHTML =`
      <h2 class="main-title"></h2>
      <div class="content">
        <div class="modul-wrapper modul-wrapper-1">
          <hr class="hr">
          <div class="modul">
            <h3 class="h3-title">1 модуль</h3>
            <div class="list">
              <ul class="ul">
              </ul>
            </div>
          </div>
        </div>
        <div class="modul-wrapper modul-wrapper-2">
          <hr class="hr">
          <div class="modul">
            <h3 class="h3-title">2 модуль</h3>
            <div class="list list-2">
              <ul class="ul-2">
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
    document.querySelector('.container-programms').appendChild(wrap);
  }
  addWrapper();
  addWrapper();
  addWrapper();
  addWrapper();
  addWrapper();

  const title = document.querySelectorAll('.main-title'),
        ul = document.querySelectorAll('.ul'),
        ul2 = document.querySelectorAll('.ul-2');

  const fetchData = () => {
    fetch('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses')
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Network status not 200');
      }
      return response.json();
    })
    .then(response => {
      const data = response.data;
      let newData = data.filter((item) => {
        return item.mbaTypeOfProgram === "industry" && item.mbaFormat === "online"
      })
      const addLi = (i, n) => {
        const li = document.createElement('li');
        li.innerHTML = `${newData[n].specializedSubjects[i]}`;
        ul[n].appendChild(li);
      }
      const addLi2 = (i, n) => {
        const li = document.createElement('li');
        li.innerHTML = `${newData[n].specializedSubjects[i+5]}`;
        ul2[n].appendChild(li);
      }
      
      for (let i = 0; i < 5; i++) {
        title[i].innerHTML = `${newData[i].title}`;

        addLi(i, 0);
        addLi(i, 1);
        addLi(i, 2);
        addLi(i, 3);
        addLi(i, 4);

        addLi2(i, 0);
        addLi2(i, 1);
        addLi2(i, 2);
        addLi2(i, 3);
        addLi2(i, 4);
      }
    })
    .catch(error => console.error(error));
  }
  fetchData();
};
getForm();

const accordeon = () => {
  const accordeon = document.querySelector('.container-programms'),
        element = accordeon.querySelectorAll('.modul');

  const addStyle = () => {
    let style = document.createElement('style');
    style.textContent = `
      @media (max-width: 600px) {
        .container-programms .modul.active .list {
          display: block;
        }
        .container-programms .list {
          display: none;
        }
        .container-programms .modul.active .h3-title {
          background-color: #FF3535;
          color: #fff;
          margin-bottom: 15px;
        }
        .container-programms .modul.active .h3-title:before {
          background: url(../img/minus.png) 77% 47.2% no-repeat transparent;
        }
      }
    `;
    document.head.appendChild(style);
  };
  addStyle();

  for(let item of element) {
    item.addEventListener('click', function() {
      if(this.classList.contains('active')){
        this.classList.remove('active');
      } else {
        for(let elem of element){
          elem.classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }
};
accordeon();