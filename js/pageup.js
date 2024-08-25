window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("btn_top").style.display = "block";
    } else {
		document.getElementById("btn_top").style.display = "none";
    }
}

function topFunction() {
    var t, s;
	s = document.body.scrollTop || window.pageYOffset;
	t = setInterval(function () { if (s > 0) window.scroll(0, s -= 100); else clearInterval(t) }, 5);
}