$(document).ready(function() {
    $('.mob-menu').click(function() {
        $(this).toggleClass('active');
        $('.navigation').slideToggle();
    });
});

// $(function() {
//     $("#datepicker").datepicker();
// });