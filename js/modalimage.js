

$('a').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,
    tLoading: '', // remove text from preloader

    /* don't add this part, it's just to disable cache on image and test loading indicator */
    callbacks: {
        beforeChange: function() {
            this.items[0].src = this.items[0].src + '?=' + Math.random(); 
        }
    }
});