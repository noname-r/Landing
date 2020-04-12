(function () {
    var openFormButton = document.querySelector('.arrow-down');
    var Form = document.querySelector('.form');

    if (openFormButton) {
        openFormButton.addEventListener('click', function (e) {
            e.preventDefault();
            business.form.open();
        })
    }

    if (Form) {
        Form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (business.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }
            //form.open();
        })
    }
}());