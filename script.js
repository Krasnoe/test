'use strict';

async function getData(url) {
  const nameOwner = document.getElementById('nameOwner-edit'),
        email = document.getElementById('email-edit'),
        owner = document.getElementById('owner-edit'),
        discription = document.getElementById('discription'),
        fuelType = document.getElementById('fuelType'),
        gearBox = document.getElementById('gearBox'),
        trimLevel = document.getElementById('trimLevel'),
        title = document.getElementById('title'),
        code = document.getElementById('code'),
        make = document.getElementById('make'),
        model = document.getElementById('model'),
        itemTitle = document.getElementById('item-title'),
        booling = document.getElementById('booling');

  const request = await fetch(url);
  const response = await request.text();
  const content = JSON.parse(response);

  console.log(content);
  const {Garage, Item, success} = content;
  const {Email, Name, Owner} = Garage;
  const {Description, KeyValues, Original, Title} = Item;
  const {FuelType, GearBox, TrimLevel} = KeyValues;
  const {Make, CarOptions, Model} = Original;

  nameOwner.innerHTML = `${Name}`;
  email.innerHTML = `${Email}`;
  owner.innerHTML = `${Owner}`;
  discription.innerHTML = `Discription: ${Description}`;
  fuelType.innerHTML = `FuelType: ${FuelType}`;
  gearBox.innerHTML = `GearBox: ${GearBox}`;
  trimLevel.innerHTML = `TrimLevel: ${TrimLevel}`;
  title.innerHTML = `Title: ${CarOptions.Title}`;
  code.innerHTML =  `Code: ${CarOptions.Code}`;
  make.innerHTML =  `Make: ${Make}`;
  model.innerHTML = `Model: ${Model}`;
  itemTitle.innerHTML = `Title: ${Title}`;
  booling.innerHTML = `${success}`;
}

getData('http://109.236.74.74:9900/getdata');

const editSave = function() {
	const note = document.querySelectorAll('.editable'),
        editButton = document.getElementById('edit'),
        newInput = document.querySelector('.newInput'),
        input = document.querySelectorAll('#input'),
        save = document.querySelector('.save');

  const change = () => {
    newInput.classList.toggle('visiable');
    save.classList.toggle('visiableButton');
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if(target.textContent === 'Edit'){
      editButton.textContent = 'Cancel';
      change();
      addDiv();
    } else if(target.textContent === 'Save'){
      if(input[0].value !== ''){
        note[0].textContent = input[0].value;
        input[0].value = '';
      }
      if(input[1].value !== ''){
        note[1].textContent = input[1].value;
        input[1].value = '';
      }
      if(input[2].value !== ''){
        note[2].textContent = input[2].value;
        input[2].value = '';
      }
      change();
      editButton.textContent = 'Edit';
    } else if(target.textContent === 'Cancel'){
      change();
      editButton.textContent = 'Edit';
      input.forEach(item => item.value = '');
    }
  })
}
editSave();