// console.log('Hello CFD');

//scroll
// $(document).ready(function() {
//     window.onscroll = function() {
//         scrollPage();
//         progressBar();
//     };
// })
// let slider = document.querySelector(".slider");
// let heigthSlider = $(slider).height();
// console.log(heigthSlider);
// let header = document.getElementById("header");

// function scrollPage() {
//     if (document.documentElement.scrollTop > (heigthSlider - header.clientHeight)) {
//         header.style.backgroundColor = "black";
//         totop.classList.add("active");
//     } else {
//         //header.style.backgroundColor = "transparent";
//         totop.classList.remove("active");
//     }
// };

function changeHeaderBg() {
    let slider = $('.slider');
    let header = $('header');
    $(window).scroll(function() {
        let pageYOffset = $(this).scrollTop();
        let heightSlider = $(slider).height();
        progressBar();
        if (pageYOffset > heightSlider - header.height()) {
            $(header).css('backgroundColor', 'black');
            $(totop).addClass("active");
        } else {
            $(header).css('backgroundColor', 'unset');
            $(totop).removeClass("active");
        }
    });
}

changeHeaderBg();

//click back to top
// let totop = document.querySelector(".totop");
// let backToTop = document.querySelector(".backtotop");
// totop.addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// });

// backToTop.addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// });
let totop = $(".totop");
let backToTop = $(".backtotop");
totop.click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
backToTop.click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//choose btn menu in mobile
// let btnMenu = document.querySelectorAll(".btn__menu");
// let minMenu = document.querySelector(".nav");
// let a;
// btnMenu.forEach(function(index) {
//     index.addEventListener("click", function() {
//         a = index;
//         index.classList.toggle("clicked");
//         if (!index.classList.contains("clicked")) {
//             minMenu.style.opacity = "0";
//             minMenu.style.left = "100%";
//         } else {
//             minMenu.style.opacity = "1";
//             minMenu.style.left = "0";
//         }
//     });
// });
let btnMenu = $(".important");
let minMenu = $(".nav");
btnMenu.click(function() {
    btnMenu.toggleClass("clicked");
    if ($(".important:contains(clicked)")) {
        minMenu.toggleClass("active");
    }
});

//scroll to section
// let menus = document.querySelectorAll("header .menu a");
// let sections = [];

// function removeActiveMenu() {
//     menus.forEach(function(menu_element) {
//         menu_element.classList.remove("active");
//     });
// }


// menus.forEach(function(element, index) {
//     let className = element.getAttribute("href").replace("#", "");
//     let section = document.querySelector("." + className);
//     if (!sections.includes(section)) {
//         sections.push(section);
//     }
//     element.addEventListener("click", function(e) {
//         e.preventDefault();
//         window.scrollTo({
//             top: section.offsetTop - header.offsetHeight + 1,
//             behavior: "smooth",
//         });
//         btnMenu.forEach(function(index) {
//             index.classList.remove("clicked");
//         });
//         minMenu.style.opacity = "0";
//         minMenu.style.left = "100%";
//         removeActiveMenu();
//         element.classList.add("active");
//     });
// });
// window.addEventListener("scroll", function(e) {
//     let positionScroll = window.pageYOffset;
//     sections.forEach(function(section, index) {
//         if (positionScroll > section.offsetTop - header.offsetHeight && positionScroll < section.offsetTop + section.offsetHeight) {
//             removeActiveMenu();
//             menus[index].classList.add("active");
//         } else {
//             menus[index].classList.remove("active");
//         }
//     });
// });

let menus = $("header .menu a");
let sections = [];
$(menus).each(function(index) {
    let className = $(this).attr("href").replace("#", "");
    let section = $("." + className);
    if (sections[index] != section) {
        sections.push(section);
    }
    $(this).click(function(e) {
        e.preventDefault();
        window.scrollTo({
            top: $(section).offset().top - header.offsetHeight + 1,
            behavior: "smooth",
        });
        btnMenu.removeClass("clicked");
        minMenu.removeClass("active");
        menus.removeClass("active");
        $(this).addClass("active");
    });
});

$(window).scroll(function() {
    let positionScroll = window.pageYOffset;
    $(sections).each(function(indexInArray, valueOfElement) {
        if (indexInArray < 5) {
            if (positionScroll > valueOfElement.offset().top - header.offsetHeight) {
                menus.removeClass("active");
                menus.eq(indexInArray).addClass("active");
            } else {
                menus.eq(indexInArray).removeClass("active");
            }
            // console.log(valueOfElement)
        }
    });
});

//choose language
// let lang = document.querySelector(".lang");
// let langCurrent = document.querySelector(".lang__current");
// let langOption = document.querySelector(".lang__option");
// let langItems = document.querySelectorAll(".lang__option a");
// langCurrent.addEventListener("click", function(e) {
//     e.stopPropagation();
//     lang.classList.toggle("active");
// });

// langItems.forEach(function(item) {
//     item.addEventListener("click", function() {
//         let langText = item.textContent;
//         let langCurrentSpan = document.querySelector(".lang__current span").textContent;
//         document.querySelector(".lang__current span").innerHTML = langText;
//         item.innerHTML = langCurrentSpan;
//     });
// })

// document.addEventListener("click", function() {
//     lang.classList.remove("active");
// });
let lang = $(".lang");
let langCurrent = $(".lang__current");
let langOption = $(".lang__option");
let langItems = $(".lang__option a");
langCurrent.click(function(e) {
    e.stopPropagation();
    lang.toggleClass("active");
});
langItems.click(function() {
    let langText = $(this).text();
    let langCurrentSpan = $(".lang__current span").text();
    $(".lang__current span").html(langText);
    $(this).html(langCurrentSpan);
})
$(document).click(function() {
    lang.removeClass("active");
})

// -------video-----------------
// let allListItem = document.querySelector(".slider__item-wrap");
// let listItemSlider = document.querySelectorAll(".slider__item");
// let number = document.querySelector(".slider__bottom-paging .number");
// let currentSlide = 0;
// let dot = document.querySelectorAll(".slider__bottom-paging .dotted li");
// let size = listItemSlider[0].clientWidth;

// listItemSlider.forEach(function(itemSlider, index) {
//     if (itemSlider.classList.contains("active")) {
//         currentSlide = index;
//     }
// });

// document.querySelector(".--next").addEventListener("click", function() {
//     if (currentSlide < listItemSlider.length - 1) {
//         goTo(currentSlide + 1);
//     } else {
//         goTo(0);
//     }

// });

// document.querySelector(".--prev").addEventListener("click", function() {
//     if (currentSlide > 0) {
//         goTo(currentSlide - 1);
//     } else {
//         goTo(listItemSlider.length - 1);
//     }
// });

// function goTo(index) {
//     allListItem.style.transition = "transform 0.8s ease-in-out";
//     allListItem.style.transform = "translateX(" + (-size * index) + "px)";
//     listItemSlider[currentSlide].classList.remove("active");
//     listItemSlider[index].classList.add("active");
//     dot[currentSlide].classList.remove("is-selected");
//     currentSlide = index;
//     number.innerHTML = (currentSlide + 1).toString().padStart(2, "0");
//     dot[index].classList.add("is-selected");
// }

// --------------dot click--------------
// dot.forEach(function(li, index) {
//     li.addEventListener("click", function() {
//         goTo(index);
//     })
// });

// --------------popup video-----------------------------
// let buttonVideo = document.querySelectorAll(".video__item-img");
// let btnInfo = document.querySelector(".btn-video");
// let popupVideo = document.querySelector(".popup-video");
// let closeVideo = document.querySelector(".close");
// let iframe = document.querySelector(".popup-video iframe");

// btnInfo.addEventListener("click", function() {
//     let getIdVideo = btnInfo.getAttribute("data-video-id");
//     iframe.setAttribute("src", "https://www.youtube.com/embed/" + getIdVideo.trim() + "?autoplay=1");
//     popupVideo.style.display = "flex";
// });

// buttonVideo.forEach(function(button) {
//     button.addEventListener("click", function() {
//         let getIdVideo = button.getAttribute("data-video-id");
//         iframe.setAttribute("src", "https://www.youtube.com/embed/" + getIdVideo.trim() + "?autoplay=1");
//         popupVideo.style.display = "flex";
//     });
// });
// closeVideo.addEventListener("click", function() {
//     popupVideo.style.display = "none";
//     iframe.setAttribute("src", "");
// });

// document.querySelector(".popup-video").addEventListener("click", function() {
//     popupVideo.style.display = "none";
//     iframe.setAttribute("src", "");
// });

//tags
// let tagText = document.querySelectorAll(".news__tags .tag");
// let tagList = document.querySelectorAll(".news__list");
// tagText.forEach(function(item, index) {
//     item.addEventListener("click", function() {
//         let tagID = index + 1;
//         tagText.forEach(function(tag) {
//             tag.classList.remove("active");
//         });
//         tagList.forEach(function(tags) {
//             tags.classList.remove("active");
//         });
//         tagText[index].classList.add("active");
//         document.querySelector(".news__list-" + tagID).classList.add("active");
//     });
// });


// ---popup video jquery---
let buttonVideo = $(".video__item-img");
let btnInfo = $(".btn-video");
let popupVideo = $(".popup-video");
let closeVideo = $(".close");
let iframe = $(".popup-video iframe");
btnInfo.on("click", function() {
    let getIdVideo = btnInfo.attr("data-video-id");
    iframe.attr("src", "https://www.youtube.com/embed/" + getIdVideo.trim() + "?autoplay=1");
    popupVideo.css({ "display": "flex" });
    console.log(iframe.attr("src"));
});

buttonVideo.on("click", function() {
    let getIdVideo = $(this).attr("data-video-id");
    iframe.attr("src", "https://www.youtube.com/embed/" + getIdVideo.trim() + "?autoplay=1");
    popupVideo.css({ "display": "flex" });
})
closeVideo.on("click", function() {
    popupVideo.css({ "display": "none" });
    iframe.attr("src", "");
});

$(".popup-video").on("click", function() {
    popupVideo.css({ "display": "none" });
    iframe.attr("src", "");
});

// ----jquery tags--------
$('.news__tags .tag').click(function() {
    let i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".news__list").eq(i).addClass("active").siblings().removeClass("active");
})

// -----progressbar-----
function progressBar() {
    let pageHeight = $(document).height() - $(window).height();
    let pageScrollTop = $(window).scrollTop();
    let progress = pageScrollTop / pageHeight * 100;
    $(".progressbar").css({
        "width": progress + "%",
    });
}

//--------slider jquery-----
// let allListItem = $(".slider__item-wrap");
// let listItemSlider = $(".slider__item");
// let number = $(".slider__bottom-paging .number");
// let currentSlide = 0;
// let dot = $(".slider__bottom-paging .dotted li");
// let size = listItemSlider.width();
// $(".--next").on("click", function() {
//     if (currentSlide < listItemSlider.length - 1) {
//         goTo(currentSlide + 1);
//     } else {
//         goTo(0);
//     }

// });

// $(".--prev").on("click", function() {
//     if (currentSlide > 0) {
//         goTo(currentSlide - 1);
//     } else {
//         goTo(listItemSlider.length - 1);
//     }
// });

// function goTo(index) {
//     allListItem.css({
//         "transition": "0.8s ease-in-out",
//         "transform": "translateX(" + (-size * index) + "px)"
//     });
//     dot.removeClass("is-selected");
//     currentSlide = index;
//     number.html((currentSlide + 1).toString().padStart(2, "0"));
//     $(dot[index]).addClass("is-selected");
// }

// dot.on("click", function() {
//     let index = $(this).index();
//     goTo(index);
// })

// -----menu-test------
let btnMenuTest = $(".test");
btnMenuTest.click(function() {
    btnMenuTest.toggleClass("clicked");
    if ($(".test:contains(clicked)")) {
        $(".nav__test").toggleClass("active");
        $(".overlay").toggleClass("active");
        $(".homepage").toggleClass("active");
        $(".body").toggleClass("active");
    }
});

$(".overlay").click(function() {
    btnMenuTest.removeClass("clicked");
    $(".nav__test").removeClass("active");
    $(".overlay").removeClass("active");
    $(".homepage").removeClass("active");
    $(".body").removeClass("active");
});
let menutest = $(".nav__test .menu li a");
let sectionsTest = [];
$(menutest).each(function(index) {
    let className = $(this).attr("href").replace("#", "");
    let section = $("." + className);
    if (sectionsTest[index] != section) {
        sectionsTest.push(section);
    }
    $(this).click(function(e) {
        e.preventDefault();
        window.scrollTo({
            top: $(section).offset().top - header.offsetHeight + 1,
            behavior: "smooth",
        });
        btnMenuTest.removeClass("clicked");
        $(".nav__test").removeClass("active");
        $(".overlay").removeClass("active");
        $(".homepage").removeClass("active");
        $(".body").removeClass("active");
    });
});


//flickity
let $carousel = $(".slider__item-wrap");
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        ready: function() {
            let dotted = $('.flickity-page-dots');
            paging = $('.slider__bottom-paging .dotted ');
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.slider__bottom-paging .number');
            let indexPage = index + 1;
            let a = indexPage.toString();
            number.text(a.padStart(2, 0));
        }

    }
});

// previous
$(".slider__bottom-control .--prev").on("click", function() {
    $carousel.flickity('previous');
});
// next
$(".slider__bottom-control .--next").on("click", function() {
    $carousel.flickity('next');
});


let $carousel1 = $(".photos__list");
$carousel1.flickity({
    cellAlign: 'left',
    freeScroll: true,
    pageDots: false,
    lazyLoad: 4,
    prevNextButtons: false,
    contain: true,
    fullscreen: true,
});

// --progressBar photo---------
$carousel1.on('scroll.flickity', function(event, progress) {
    // console.log('Flickity scrolled ' + progress * 100 + '%')
    $(".time__line").css("width", (progress * 100 + '%'));
});


// -------Photo Swipe-----------
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// $(window).load(function() {
initPhotoSwipeFromDOM('.carousel-img');
// });


//---------AOS-------
AOS.init();