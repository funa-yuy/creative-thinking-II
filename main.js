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
const swiper = new Swiper('.swiper',{
	loop: true,                         //ループ
	centeredSlides: true,

	autoplay: {                         //自動再生
		delay: 5000,
		disableOnInteraction:false,	 // ユーザーが操作しても自動再生を止めない
	},

	pagination: {                       //ページネーション（ドット）
		el: '.swiper-pagination',
		clickable: true,			// クリックによるスライド切り替えを有効にする
	},

	navigation: {                       //ナビゲーション（矢印）
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})
