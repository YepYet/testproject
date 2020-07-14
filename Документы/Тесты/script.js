const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

const btn = document.getElementById('button');

const phone = document.getElementById('phone');

var one = false;
var two = false;
var thee = false;

let data = {};

var usernameValue = username.value.trim();
var emailValue = email.value.trim();
var phoneValue = phone.value.trim();


form.addEventListener('submit', e => {
	e.preventDefault();
    checkInputs();
});

btn.addEventListener('click', () => {
    checkInputs();
   if(one == true && two == true && thee == true){
       console.log("Все валидации прошли успешно");

        data = {
           name: usernameValue,
           email: emailValue,
           phone: phoneValue
       };

       console.log(data);
   }else{
    console.log("что-то не верно");
   }
});


function checkInputs() {
	
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var phoneValue = phone.value.trim();

    //Проверка на валитность ФИО
	if(usernameValue === '') {
        setErrorFor(username, 'ФИО введино неправильно');
        one = false;
	} else if(!isFullName(usernameValue)) {
        setErrorFor(username,"ФИО введино неправильно");
        one = false;
	}else{
        setSuccessFor(username);
        one = true;
    }
	//Проверка на валитность email
	if(emailValue === '') {
        setErrorFor(email, 'Неправильный email');
        two = false;
	} else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Неправильный email');
        two = false;
	} else {
        setSuccessFor(email);
        two = true;
    }
    //Проверка на валитность намера телефона
	if(phoneValue === ""){
        setErrorFor(phone, 'Строчка пустая');
        thee = false;
    }else if(!isPhone(phoneValue)){
        setErrorFor(phone,"Телефон введен неверно");
        thee = false;
    }else{
        setSuccessFor(phone);
        thee = true;
    }
	
}

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
};

const setSuccessFor = input => {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
};
    


const isEmail = email => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com$/.test(email);
};
const isPhone = phone => {
    return /^(\s*)?(\+||07)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/.test(phone);
};

const isFullName = username => {
    return /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/.test(username);
};



//
// Асинхронная отправка анных через formData 
//

// const formElem = async (e) => {
//     e.preventDefault();

//     let response = await fetch('/article/formdata/post/user', {
//       method: 'POST',
//       body: new FormData(formElem)
//     });

//     let result = await response.json();

//     alert(result.message);
//   };
