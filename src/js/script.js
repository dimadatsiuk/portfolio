document.addEventListener('DOMContentLoaded', () => {

    /* menu */


    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        menuItem = document.querySelectorAll('.menu__link'),
        menuOverlay = document.querySelector('.menu__overlay');



    function letOrStopScroll () {
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        letOrStopScroll();
    });

    function closeModal() {
        menu.classList.remove('active');
        letOrStopScroll();
    }


    closeElem.addEventListener('click', closeModal);

    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menu.classList.contains('active')) {
            closeModal();
        }
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('active');
            letOrStopScroll();
        });
    });

    console.log('ich wollte nur mal hallo dir sagen, wenn du das liest');





    // classes for cards use


    class UseCard {
        constructor(src, title, descr, ...classes) {
            this.src = src;
            this.title = title;
            this.alt = (this.title);
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(".use__wrapper");
        }
 
        
 
        render() {
            const element = document.createElement('div');
 
            if (this.classes.length === 0) {
                this.element = 'use__wrapper-item';
                element.classList.add(this.element);
            }  else {
             this.classes.forEach(className => element.classList.add(className));
            }
 
            element.innerHTML = `
                <div class="item-img"><img src=${this.src} alt=${this.alt + "img"}></div>
                <div class="item-text">
                    <h4>${this.title}</h4>
                    <span>${this.descr}</span>
                </div>
            `;
            this.parent.append(element);
        }
 
    }
 
    new UseCard(
        "icons/skills/html5.svg",
        "HTML5",
        "Ihn braucht man, um das Grundgerüst einer jeden Website oder Anwendung zu erstellen. Mit der fünften Version kann ich eine SEO- optimierte Struktur eines Produkts erstellen."
 
    ).render();

    new UseCard(
        "icons/skills/css3.svg",
        "CSS3",
        "Mit dieser Stilsprache kann ich absolut jedes Erscheinungsbild für eine Website oder Anwendung erstellen. Es ist nur durch die Vorstellungskraft der Kunden begrenzt!"
 
    ).render();

    new UseCard(
        "icons/skills/js.svg",
        "JavaScript",
        "Mit dieser Programmiersprache kann man alles zum Leben erwecken: Schieberegler, Fenster, QuickInfos, Registerkarten, Abrufen von Daten vom Server und vieles mehr."
 
    ).render();

    new UseCard(
        "icons/skills/Bootstrap_logo.svg",
        "Bootstrap",
        "Mit diesem leistungsstarken Front-End-Framework kann ich moderne Websites und Web-Apps erstellen. Es verfügt HTML- und CSS-Vorlagen für UI-Emente."
 
    ).render();

    new UseCard(
        "icons/skills/jquery.png",
        "Jquery",
        "Die JQuery-Bibliothek beschleunigt die Entwicklung. Ich würde sie nicht ohne, dass es notwendig ist, in das Projekt integrieren, aber die Fähigkeit, damit zu arbeiten, ist vorhanden."
 
    ).render();

    new UseCard(
        "icons/skills/react.svg",
        "React",
        "Mit dieser Bibliothek man kann Webanwendungen - das interaktivste Produkt speziell für Ziele der Kunden - entwickeln."
 
    ).render();

    new UseCard(
        "icons/skills/mamp.png",
        "MAMP",
        "Um den Backendteil einer Website zu testen, bevor sie aufs Hosting hochgeladen werden wird, benutze ich eine lokale Serverumgebung MAMP."
 
    ).render();

    new UseCard(
        "icons/menu_icons/Github.svg",
        "GitHub",
        "Es ist ein netzbasierter Dienst zur Versionsverwaltung für Software-Entwicklungsprojekte. Namensgebend war das Versionsverwaltungssystem Git."
 
    ).render();
 
    
 


    /* carousel */


    $('.reviews__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/arrow_right.svg"></button>',
        dots: false,
        adaptiveHeight: true,

    });



    /* wow */


    wow = new WOW({
        mobile: false
    });

    wow.init();


    /* skills waypoint easyPieChart*/



    const waypoint = new Waypoint({
        element: document.getElementById('skills_percent'),
        handler: function () {
            $('.chart').easyPieChart({
                barColor: '#FFA501',
                trackColor: '#f2f2f2',
                scaleColor: false,
                lineCap: 'round',
                lineWidth: 10,
                size: 140,
                animate: 3000,
            });
        },
        offset: '85%'
    });



    /* Smooth scroll and pageup */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(_href).offset().top + "px"
            },
            1000);
    });



    /* mailer */

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input textarea").val("");
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');

        });

        return false;
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #thanks').fadeOut('slow')
    });





    /* timer */

    const deadline = '2021-12-31';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,

        };

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();


        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);



});