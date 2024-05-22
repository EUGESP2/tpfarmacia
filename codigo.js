document.addEventListener('DOMContentLoaded', () => {
    const formRegister = document.querySelector("#loginForm");

    const clearValidations = () => {
        document.querySelector("#error-email").textContent = '';
        document.querySelector("#error-password").textContent = '';
        document.querySelector("#userEmail").classList.remove('error');
        document.querySelector("#contraseña").classList.remove('error');
    }

    const validarFormulario = (event) => {
        event.preventDefault();
        clearValidations();

        const email = document.querySelector("#userEmail");
        const password = document.querySelector("#contraseña");

        let validation = true;

        if (!email.value.trim()) {
            document.querySelector("#error-email").textContent = 'Debe completar el campo Email';
            email.classList.add('error');
            validation = false;
        }

        if (!password.value.trim()) {
            document.querySelector("#error-password").textContent = 'Debe completar el campo contraseña';
            password.classList.add('error');
            validation = false;
        } else if (password.value.length < 6 || password.value.length > 12) {
            document.querySelector("#error-password").textContent = 'La contraseña debe contener entre 6 y 12 caracteres';
            password.classList.add('error');
            validation = false;
        }

        if (validation) {
            formRegister.submit();
        } else {
            return false;
        }
    }

    formRegister.addEventListener('submit', validarFormulario);
});



