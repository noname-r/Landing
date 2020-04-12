(function () {
    var openFormButton = document.querySelector('.arrow-down');
    var Form = document.querySelector('.form');
    var nav = document.querySelector('.nav');

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

    if (nav) {
        nav.addEventListener('click', function (e) {
            var target = e.target;
            if (target.tagName.toLowerCase() !== 'a'){
                return;
            }

            e.preventDefault();
            business.navigation.toggleToAktiveLink(target);
        })
    }

}());