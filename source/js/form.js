(function () {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function () {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
        document.onkeydown = function (e) {
            if (e.keyCode === 27) onClose();
        }
    };

    me.close = function () {
        form.classList.add('is-hidden');
    };

    me.isValid = function () {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-number]').value;
        var numberValue = document.querySelector('[data-email]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('Необходимо заполнить все обязательные поля!');
            return false;
        } else if (!business.validation.isNumber(emailValue)) {
            console.log('Необходимо правильно заполнить телефон!');
            return false;
        } else if (!business.validation.isEmail(numberValue)) {
            console.log('Необходимо правильно заполнить email!');
            return false;
        };
        return true;
    };

    me.isAllCompleted = function (data) {
        var result = true;
        for (var i = 0; i < data.length; i++) {
            if (!business.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }
        return result;
    }

    business.form = me;
}());