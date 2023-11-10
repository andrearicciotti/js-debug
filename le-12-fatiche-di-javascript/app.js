const input = document.querySelector('.input'); /* manca il punto del selettore CSS*/
const array = []; /* null e' un valore in se e non e' un array*/

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.push(input.value); /* forse era push e non add(che non conosco)*/

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = input.value; /* textContent e non text*/
    document.querySelector('ul').append(li); /* penso sia append, penso */

    let counter = '';
    let item    = array[0];
    const max   = 1;
    const elems = [];

    for (let i = 0; i < array.length; i++) { /* array.length e non array e basta */
        let val = array[i];

        if (!elems[val]) { /* per forza false elems non ha elementi*/
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte');
});