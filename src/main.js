import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './main.scss';

function validate({lEl,wEl,dEl}) {
    const l = parseFloat(lEl.value);
    const w = parseFloat(wEl.value);
    const d = parseFloat(dEl.value);
    const errors = {
        l: false,
        w: false,
        d: false,
    }
    if (!l) {
        lEl.classList.add('error')
        errors.l = true;
    } else {
        lEl.classList.remove('error')
        errors.l = false;
    }
    if (!w) {
        wEl.classList.add('error')
        errors.w = true;
    } else {
        wEl.classList.remove('error')
        errors.w = false;
    }
    if (!d) {
        dEl.classList.add('error')
        errors.d = true;
    } else {
        dEl.classList.remove('error')
        errors.d = false;
    }
    if (errors.l || errors.w || errors.d) {
        return;
    }
    const result = (l * w * d) / 324;
    const target = document.querySelector('#result-target')
    target.innerHTML = `You need to buy ${Math.ceil(result)} cu ft (${Math.ceil(result / 3)} cu yrd) of mulch.`;
}

export const app = () => {
    const lEl = document.querySelector('#mulch-length-input');
    const wEl = document.querySelector('#mulch-width-input');
    const dEl = document.querySelector('#mulch-depth-input');
    const errors = {
        l: false,
        w: false,
        d: false
    }
    document.querySelector('#mulch-submit-btn').addEventListener('click', () => {
        validate({ lEl, wEl, dEl })
    })
}

app();