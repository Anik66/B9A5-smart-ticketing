const allTikect = document.getElementsByClassName('tikect');
let count = 0;
let count2 = 40;
let total = 0;

for (const tikect of allTikect) {
  tikect.addEventListener('click', function (e) {
    count = count + 1;
    count2 = count2 - 1;

    // console.log(tikect.innerText);
    const seatName = tikect.innerText;
    const economyClass = 'Economy';
    const tickPrice = '550';

    //const priceNum = document.getElementById('price');

    // const totalPrice = document.getElementById('Total-price');

    // const getPrice = totalPrice.innerText;

    if (count > 4) {
      document.getElementById('alert').classList.remove('hidden');
    } else {
      total = 550 * count;

      setInnerText('Total-price', total);
      e.target.classList.add('common');
      setInnerText('tikect-item', count);
      setInnerText('Total-price', total);

      const selectedContainer = document.getElementById('selected-container');
      const li = document.createElement('li');

      const p = document.createElement('p');
      p.innerText = seatName;

      const p2 = document.createElement('p');
      p2.innerText = economyClass;

      const p3 = document.createElement('p');
      p3.innerText = tickPrice;

      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      selectedContainer.appendChild(li);
    }

    setInnerText('tikect-stock', count2);
    hideElementById('tikect-stock', count2)
    //tikectStock('tikect-stock',count2)

    //document.getElementById('tikect-item').innerText=count
  });
}

// function setInnerText(id, value) {
//   document.getElementById(id).innerText = value;
// }

// function hideElementById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.add('hidden');
// }

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}