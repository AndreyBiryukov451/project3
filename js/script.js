$(document).ready(function() {
    $('.button__menu').click(function(event) {
        $('.button__menu,.simulator,.header__wrp_right,.header__title').toggleClass('active')
    });
    $('.filter__btn__hide,.filter__btn__show').click(function(event) {
        $('.filter__btn__hide,.filter__btn__show,.hide-space').toggleClass('active')
    });
});