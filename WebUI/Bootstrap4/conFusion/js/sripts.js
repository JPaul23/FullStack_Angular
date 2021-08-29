$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    //for login
    $('#loginLink').click(function () {
        $('#loginModal').modal('toggle');
    });

    //for reserving
    $('#reserveLink').click(function () {
        $('#reserveModal').modal('toggle');
    });

    //for closing icon
    $('#xLogin').click(function () {
        $('#loginModal').modal('hide');
    });
    $('#xReserve').click(function () {
        $('#reserveModal').modal('hide');
    });
});