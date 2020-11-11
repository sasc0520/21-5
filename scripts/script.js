document.addEventListener("click", (e) => {
    if (!e.target.matches(".menu") && !e.target.matches(".menu li a") && !e.target.matches(".burger_open")) {
        document.querySelector(".menu").classList.add("hide");
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav .menu");

    document.querySelector(".burger_open").addEventListener("click", function () {
        nav.classList.remove("hide")
    })
    document.querySelector(".burger_close").addEventListener("click", function () {
        nav.classList.add("hide")
    })

    document.querySelector(".language").addEventListener("click", function () {
        this.classList.toggle("open");
    })
});


function customContentListeners() {
    console.log("customContentListeners")

    splashSlide();

    document.querySelectorAll(".popup_btn").forEach(function (elm) {
        elm.addEventListener("click", function () {
            this.querySelector(".popup").classList.toggle("hide");
        })
    })

    let colapse_btn = document.querySelectorAll(".colapse_btn");

    for (let index = 0; index <= colapse_btn.length - 1; index++) {
        colapse_btn[index].addEventListener("click", function () {
            this.classList.toggle("open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    let multi_colapse_btn = document.querySelectorAll(".multi_colapse_btn");
    console.log("test")
    for (let index = 0; index <= multi_colapse_btn.length - 1; index++) {
        multi_colapse_btn[index].addEventListener("click", function (e) {
            console.log("got here")
            this.classList.toggle("open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    let multi_colapse_li = document.querySelectorAll(".multi_colapse_btn .colapse_wrap > li");
    for (let index = 0; index <= multi_colapse_li.length - 1; index++) {
        multi_colapse_li[index].addEventListener("click", function (e) {
            e.stopPropagation();
            var anchor = e.target.querySelector("a")
            if (anchor) {
                window.location = anchor.href;
            }
            this.classList.toggle("open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }


    let faq_colapse_btn = document.querySelectorAll(".faq_colapse_btn");
    for (let index = 0; index <= faq_colapse_btn.length - 1; index++) {
        faq_colapse_btn[index].addEventListener("click", function (e) {
            this.classList.toggle("faq_open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    let faq_colapse_li = document.querySelectorAll(".faq_colapse_btn .colapse_wrap > li");
    for (let index = 0; index <= faq_colapse_li.length - 1; index++) {
        faq_colapse_li[index].addEventListener("click", function (e) {
            e.stopPropagation();
            var anchor = e.target.querySelector("a")
            if (anchor) {
                window.location = anchor.href;
            }
            this.classList.toggle("faq_open");
            let icon = this.querySelector("i");
            if (icon.classList.contains("fa-angle-down")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }
}



function buildCarousel(carousel) {
    var carouselDOM = document.querySelector(".carousel");
    var imgTag = document.createElement("img");

    if (!carouselDOM) {
        console.error("Trying to add carousel, without DOM object present");
        return;
    }
    var preview = imgTag.cloneNode(true);
    preview.src = carousel[0].guid;
    preview.setAttribute("data-index", 0);
    carouselDOM.firstElementChild.appendChild(preview);

    carousel.forEach(function (image, index) {
        var thumbnail = imgTag.cloneNode(true);
        thumbnail.src = image.guid;
        thumbnail.setAttribute("data-index", index);
        thumbnail.addEventListener("click", function () {
            var preview = carouselDOM.querySelector(".preview img");
            var current = parseInt(preview.getAttribute("data-index"));
            var nextIndex = parseInt(this.getAttribute("data-index"));
            var next = imgTag.cloneNode(true);
            next.src = carousel[nextIndex].guid;
            next.setAttribute("data-index", nextIndex);

            carouselDOM.firstElementChild.replaceChild(next, preview)
            carouselDOM.lastElementChild.querySelector(`img.active`).classList.remove("active");
            carouselDOM.lastElementChild.querySelector(`img[data-index="${nextIndex}"]`).classList.add("active");
        })
        carouselDOM.lastElementChild.appendChild(thumbnail);
    });
    carouselDOM.lastElementChild.firstElementChild.classList.add("active");

    carouselDOM.querySelector(".previous").addEventListener("click", function () {
        console.log("previous")
        var preview = carouselDOM.querySelector(".preview img");
        var current = parseInt(preview.getAttribute("data-index"));
        var nextIndex
        if (current == 0) {
            nextIndex = carousel.length - 1
        } else {
            nextIndex = current - 1;
        }
        var next = imgTag.cloneNode(true);
        next.src = carousel[nextIndex].guid;
        next.setAttribute("data-index", nextIndex);

        carouselDOM.firstElementChild.replaceChild(next, preview)
        carouselDOM.lastElementChild.querySelector(`img.active`).classList.remove("active");
        carouselDOM.lastElementChild.querySelector(`img[data-index="${nextIndex}"]`).classList.add("active");


    })
    carouselDOM.querySelector(".next").addEventListener("click", function () {
        console.log("previous")
        var preview = carouselDOM.querySelector(".preview img");
        var current = parseInt(preview.getAttribute("data-index"));
        var nextIndex
        if (current == carousel.length - 1) {
            nextIndex = 0
        } else {
            nextIndex = current + 1;
        }
        var next = imgTag.cloneNode(true);
        next.src = carousel[nextIndex].guid;
        next.setAttribute("data-index", nextIndex);

        carouselDOM.firstElementChild.replaceChild(next, preview);
        carouselDOM.lastElementChild.querySelector(`img.active`).classList.remove("active");
        carouselDOM.lastElementChild.querySelector(`img[data-index="${nextIndex}"]`).classList.add("active");
    })


}


function splashSlide() {
    if (window.location.pathname === "/index.html") {
        let splash = document.querySelector("#splash");
        let classes = ["image1", "image2", "image3", "image4", "image5"];
        let iterator = 0;
        console.log("hot here")
        setInterval(function () {
            splash.classList.remove("image1", "image2", "image3", "image4", "image5");
            splash.classList.add(classes[iterator]);
            if (iterator == classes.length - 1) {
                iterator = 0;
            } else {
                iterator += 1;
            }
        }, 3000);
    } else {
        return;
    }
}
