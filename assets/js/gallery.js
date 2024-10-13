$(document).ready(function () {
    $("#openGalleryButton").on("click", function () {
        $("#hiddenGallery").lightGallery({
            thumbnail: true,
            animateThumb: false,
            backdropDuration: 0,
            backdrop: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Littlesection/little1.png', thumb: 'assets/images/gallerygraphics/Littlesection/little1.png', subHtml: 'Menu główne strony' },
                { src: 'assets/images/gallerygraphics/Littlesection/little2.png', thumb: 'assets/images/gallerygraphics/Littlesection/little2.png', subHtml: 'Stopka strony' },
                { src: 'assets/images/gallerygraphics/Littlesection/little3.png', thumb: 'assets/images/gallerygraphics/Littlesection/little3.png', subHtml: 'Jedna z sekcji strony' },
                { src: 'assets/images/gallerygraphics/Littlesection/little4.png', thumb: 'assets/images/gallerygraphics/Littlesection/little4.png', subHtml: 'Responsywność menu głównego' },
                { src: 'assets/images/gallerygraphics/Littlesection/little5.png', thumb: 'assets/images/gallerygraphics/Littlesection/little5.png', subHtml: 'Responsywność sekcji "O hodowli"' },
            ]
        });
    });
});

$(document).ready(function () {
    $("#openGalleryButton2").on("click", function () {
        $("#hiddenGallery2").lightGallery({
            thumbnail: true,
            animateThumb: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Grafsection/graf1.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf1.png', subHtml: 'Główna część strony sklepu' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf2.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf2.png', subHtml: 'Sekcja do wybierania rozmiaru ilości itd. danego produktu' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf3.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf3.png', subHtml: 'Panel użytkownika' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf4.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf4.png', subHtml: 'Sekcja zmiany hasła w panelu użytkownika' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf5.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf5.png', subHtml: 'Sekcja koszyka'},
            ]
        });
    });
});

$(document).ready(function () {
    $("#openGalleryButton3").on("click", function () {
        $("#hiddenGallery3").lightGallery({
            thumbnail: true,
            animateThumb: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Konkurssection/graf1.png', thumb: 'assets/images/gallerygraphics/Konkurssection/graf1.png', subHtml: 'Ekran blokady telefonu' },
                { src: 'assets/images/gallerygraphics/Konkurssection/graf2.png', thumb: 'assets/images/gallerygraphics/Konkurssection/graf2.png', subHtml: 'Menu / Pulpit telefonu' },
                { src: 'assets/images/gallerygraphics/Konkurssection/graf3.png', thumb: 'assets/images/gallerygraphics/Konkurssection/graf3.png', subHtml: 'Działający kalkulator'},
                { src: 'assets/images/gallerygraphics/Konkurssection/graf4.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/graf4.gif', subHtml: 'Nagranie pokazujące działanie telefonu'},
                { src: 'assets/images/gallerygraphics/Konkurssection/graf5.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/graf5.gif', subHtml: 'Nagranie pokazujące działanie telefonu'},
            ]
        });
    });
});