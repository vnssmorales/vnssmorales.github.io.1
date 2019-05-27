$(document).ready(function () {

    const banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        position: 1
    }

    const info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        position: 1
    }

    //console.log(banner.numeroSlides);

    banner.padre.children('.slide').first().css({
        'left': 0
    });

    info.padre.children('.slide').first().css({
        'left': 0
    });

    const alturaBanner = function () {
        const altura = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': altura + 'px'
        });

    }

    const alturaInfo = function () {
        const altura = info.padre.children('.slide').outerHeight();

        info.padre.css({
            'height': altura + 'px'
        });

    }

    alturaBanner();
    alturaInfo();

    $(window).resize(function () {
        alturaBanner();
    });

    //banner boton siguiente//

    $('#baner-next').on('click', function (e) {
        e.preventDefault();

        if (banner.position < banner.numeroSlides) {
            //para que las demas slides empiecen desde la derecha//
            banner.padre.children().not('active').css({
                'left': '100%'
            });

            //quito la clase active y la pongo al siguiente elemento, y lo animo//
            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            //animo el slide anterior para que se desplace a la izquierda//
            $('#banner .active').prev().animate({
                'left': '-100%'
            });

            banner.position = banner.position + 1;
        } else {
            //hago que el slide activo se anime hacia la derecha//
            $('#banner .active').animate({
                'left': '-100%'
            });

            //seleciono todos los slide que no tengan clase .active//
            //y los posiciono a la derecha//
            banner.padre.children().not('active').css({
                'left': '100%'
            });

            //elimino la clase active y se la pongo al primer elemento//
            //despues la animo//
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            //reseteo la posicion a 1//
            banner.position = 1;
        }


    });

    //banner boton anterior//

    $('#baner-prev').on('click', function (e) {
        e.preventDefault();

        if (banner.position > 1) {

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.position - 1;

        }else {
            banner.padre.children().not('active').css({
                'left': '100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.numeroSlides;
        }


    });

});

