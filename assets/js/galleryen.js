$(document).ready(function () {
    $("#openGalleryButton").on("click", function () {
        $("#hiddenGallery").lightGallery({
            thumbnail: true,
            animateThumb: false,
            backdropDuration: 0,
            backdrop: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Littlesection/little1.png', thumb: 'assets/images/gallerygraphics/Littlesection/little1.png', subHtml: 'Webiste Main Menu' },
                { src: 'assets/images/gallerygraphics/Littlesection/little2.png', thumb: 'assets/images/gallerygraphics/Littlesection/little2.png', subHtml: 'Website Footer' },
                { src: 'assets/images/gallerygraphics/Littlesection/little3.png', thumb: 'assets/images/gallerygraphics/Littlesection/little3.png', subHtml: 'One of the sections on the website' },
                { src: 'assets/images/gallerygraphics/Littlesection/little4.png', thumb: 'assets/images/gallerygraphics/Littlesection/little4.png', subHtml: 'Website Main Menu responsiveness' },
                { src: 'assets/images/gallerygraphics/Littlesection/little5.png', thumb: 'assets/images/gallerygraphics/Littlesection/little5.png', subHtml: 'Section "O hodowli" responsiveness' },
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
                    { src: 'assets/images/gallerygraphics/Grafsection/graf1.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf1.png', subHtml: 'Main section of the store page' },
                    { src: 'assets/images/gallerygraphics/Grafsection/graf2.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf2.png', subHtml: 'Section for selecting the size, quantity, etc. of a given product' },
                    { src: 'assets/images/gallerygraphics/Grafsection/graf3.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf3.png', subHtml: 'User panel' },
                    { src: 'assets/images/gallerygraphics/Grafsection/graf4.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf4.png', subHtml: 'Password change section in the user panel' },
                    { src: 'assets/images/gallerygraphics/Grafsection/graf5.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf5.png', subHtml: 'Cart section' },
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
                { src: 'assets/images/gallerygraphics/Konkurssection/graf1.png', thumb: 'assets/images/gallerygraphics/Konkurssection/graf1.png', subHtml: 'Phone lock screen' },
                { src: 'assets/images/gallerygraphics/Konkurssection/graf2.png', thumb: 'assets/images/gallerygraphics/Konkurssection/graf2.png', subHtml: 'Phone menu / home screen' },
                { src: 'assets/images/gallerygraphics/Konkurssection/graf3.png', thumb: 'assets/images/gallerygraphics/Konkurssection/graf3.png', subHtml: 'Working calculator' },
                { src: 'assets/images/gallerygraphics/Konkurssection/graf4.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/graf4.gif', subHtml: 'Recording showing the phone in action' },
                { src: 'assets/images/gallerygraphics/Konkurssection/graf5.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/graf5.gif', subHtml: 'Recording showing the phone in action' },
            ]
        });
    });
});