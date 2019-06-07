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
        const altura = info.padre.children('.active').outerHeight();

        info.padre.animate({
            'height': altura + 'px'
        });

    }

    alturaBanner();
    alturaInfo();

    $(window).resize(function () {
        alturaBanner();
        alturaInfo();
    });

    ////-----------info------------////

    //banner boton siguiente//

    $('#info-next').on('click', function (e) {
        e.preventDefault();

        if (info.position < info.numeroSlides) {
            //para que las demas slides empiecen desde la derecha//
            info.padre.children().not('active').css({
                'left': '100%'
            });

            //quito la clase active y la pongo al siguiente elemento, y lo animo//
            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            //animo el slide anterior para que se desplace a la izquierda//
            $('#info .active').prev().animate({
                'left': '-100%'
            });

            info.position = info.position + 1;
        } else {
            //hago que el slide activo se anime hacia la derecha//
            $('#info .active').animate({
                'left': '-100%'
            });

            //seleciono todos los slide que no tengan clase .active//
            //y los posiciono a la derecha//
            info.padre.children().not('active').css({
                'left': '100%'
            });

            //elimino la clase active y se la pongo al primer elemento//
            //despues la animo//
            $('#info .active').removeClass('active');
            info.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            //reseteo la posicion a 1//
            info.position = 1;
        }

        alturaInfo();

    });

    //banner boton anterior//

    $('#info-prev').on('click', function (e) {
        e.preventDefault(); //para evitar que se agregue # //

        if (info.position > 1) {

            info.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            info.position = info.position - 1;

        }else {
            info.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.padre.children().last().addClass('active').animate({
                'left': 0
            });

            info.position = info.numeroSlides;
        }

        alturaInfo();

    });

});

