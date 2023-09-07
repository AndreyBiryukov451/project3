$(document).ready(function() {
    $('.button__menu').click(function(event) {
        $('.button__menu,.simulator__wrp,.header__wrp_right,.header__title').toggleClass('active');
        $("body").toggleClass("overflow-hidden")
    });
    $('.filter__btn__hide,.filter__btn__show').click(function(event) {
        $('.filter__btn__hide,.filter__btn__show,.hide-space').toggleClass('active')
    });
});

