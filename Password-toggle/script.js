
    
   let toggleButton = document.querySelector('#toggle_button');
    toggleButton.addEventListener('click', function(){
     
         let passwordElement = document.querySelector('#password');
       // passwordElement.setAttribute('type', 'text');
        let type = passwordElement.getAttribute('type') === 'password' ? 'text' : 'password';
        console.log(type);
        passwordElement.setAttribute('type', type);
    });


