const pwd = document.querySelector('#pwd');
const show = document.querySelector('#show');
const off = document.querySelector('#off');

show.addEventListener('click', function(){
    if(pwd.type === 'password'){
        pwd.type = 'text';
        // show.style.display = 'none';
    } else{
        pwd.type = 'password'
        off.style.display = 'block';
    }

})