// スムーススクロールの例
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//日英切り替え-----------------------------------------------------------------------------------------------------------------------
const tabsElems = document.querySelectorAll("[data-tabs]");

if(tabsElems.length >= 0){
	for (let i = 0; i < tabsElems.length; i++) {
	let tab = tabsElems[i];
	let tabBtnElems = tab.querySelectorAll("[data-tab]");
	let tabContentElems = tab.querySelectorAll("[data-tab-content]");
	for (let i = 0; i < tabBtnElems.length; i++) {
	let tabBtn = tabBtnElems[i];
	let tabContent = tabContentElems[i];
	tabBtn.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 0; i < tabBtnElems.length; i++) {
		tabBtnElems[i].classList.remove('active');
		tabContentElems[i].classList.remove('active');
		}
		tabBtn.classList.add('active');
		tabContent.classList.add('active');
	});
	}
}
}

//モーダル---------------------------------------------------------------------------------------------------------------------------
const modalBtns = document.querySelectorAll(".modal_open");
modalBtns.forEach(function (btn) {
	btn.onclick = function () {
	var modal = btn.getAttribute('data-modal');
	document.getElementById(modal).style.display = "block";
	};
});
const closeBtns = document.querySelectorAll(".modal_close");
closeBtns.forEach(function (btn) {
	btn.onclick = function () {
	var modal = btn.closest('.modal');
	modal.style.display = "none";
	};
});

window.onclick = function (event) {
	if (event.target.className === "modal") {
	event.target.style.display = "none";
	}
};


//スライダー---------------------------------------------------------------------------------------------------------------------------
$('.slider-inner').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 1,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	dots: true,//下部ドットナビゲーションの表示
	responsive: [
		{
		breakpoint: 900,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 1,//スライドを画面に2枚見せる
			slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
		}
	},
	{
		breakpoint: 650,//モニターの横幅が426px以下の見せ方
		settings: {
			slidesToShow: 1,//スライドを画面に1枚見せる
			slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		}
	}
]
});
