/**
 * Nav Menu toggler
 */
(function () {
  function classToggle() {
    console.log("nav-menu-toggler");

    let navMenu = document.querySelector("#nav-menu");

    navMenu.classList.toggle("nav-menu-show");
  }

  document
    .querySelector("#nav-menu-toggler")
    .addEventListener("click", classToggle);
})();

/**
 * Animate on viewport entry (Intersection observer)
 */
(function () {
  let targetsSecHeaders;
  let targetsCards;
  let observer;

  // Set things up
  window.addEventListener(
    "load",
    (event) => {
      // Testimonials

      let options = {
        //   // root: document.querySelector("#scrollArea"),
        //   // root: null,
        //   // rootMargin: "0px",
        threshold: 0.7
      };

      function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting

          if (entry.isIntersecting) {
            // console.log("entry target:", entry.target.classList);

            if (entry.target.classList.contains("section-header")) {
              // Add slide-up anim to .section-header elems
              entry.target.classList.add("slide-up");
            } else if (entry.target.classList.contains("card")) {
              // Add slide-right anim to .card elems
              entry.target.classList.add("slide-right");
            }

            entry.target.classList.remove("hidden");
          }

          //   entry.rootBounds
          //   entry.target
          //   entry.time
          // });
        });
      }

      observer = new IntersectionObserver(handleIntersect, options);

      // Select al section headers
      targetsSecHeaders = document.querySelectorAll(".section-header");

      // Add each one to the observer
      targetsSecHeaders.forEach((target) => {
        if (target) {
          // the callback we setup for the observer will be executed now for the first time
          // it waits until we assign a target to our observer (even if the target is currently not visible)
          observer.observe(target);
        }
      });

      // Select all cards on Testimonials
      targetsCards = document.querySelectorAll(".card");

      // Add each one to the observer
      targetsCards.forEach((target) => {
        if (target) {
          // the callback we setup for the observer will be executed now for the first time
          // it waits until we assign a target to our observer (even if the target is currently not visible)
          observer.observe(target);
        }
      });
    },
    false
  );
})();

/**
 * Animated Counter JavaScript
 */
// TODO

// (function ($) {
//   "use strict";

//   $(window).stellar({
//     responsive: true,
//     parallaxBackgrounds: true,
//     parallaxElements: true,
//     horizontalScrolling: false,
//     hideDistantElements: false,
//     scrollProperty: "scroll"
//   });

//   var fullHeight = function () {
//     $(".js-fullheight").css("height", $(window).height());
//     $(window).resize(function () {
//       $(".js-fullheight").css("height", $(window).height());
//     });
//   };
//   fullHeight();

//   // loader
//   var loader = function () {
//     setTimeout(function () {
//       if ($("#ftco-loader").length > 0) {
//         $("#ftco-loader").removeClass("show");
//       }
//     }, 1);
//   };
//   loader();

//   var carousel = function () {
//     $(".carousel-testimony").owlCarousel({
//       center: false,
//       loop: true,
//       items: 1,
//       margin: 30,
//       stagePadding: 0,
//       nav: false,
//       navText: [
//         '<span class="ion-ios-arrow-back">',
//         '<span class="ion-ios-arrow-forward">'
//       ],
//       responsive: {
//         0: {
//           items: 1
//         },
//         600: {
//           items: 2
//         },
//         1000: {
//           items: 3
//         }
//       }
//     });
//   };
//   carousel();

//   $("nav .dropdown").hover(
//     function () {
//       var $this = $(this);
//       // 	 timer;
//       // clearTimeout(timer);
//       $this.addClass("show");
//       $this.find("> a").attr("aria-expanded", true);
//       // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
//       $this.find(".dropdown-menu").addClass("show");
//     },
//     function () {
//       var $this = $(this);
//       // timer;
//       // timer = setTimeout(function(){
//       $this.removeClass("show");
//       $this.find("> a").attr("aria-expanded", false);
//       // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
//       $this.find(".dropdown-menu").removeClass("show");
//       // }, 100);
//     }
//   );

//   $("#dropdown04").on("show.bs.dropdown", function () {
//     console.log("show");
//   });

//   // magnific popup
//   $(".image-popup").magnificPopup({
//     type: "image",
//     closeOnContentClick: true,
//     closeBtnInside: false,
//     fixedContentPos: true,
//     mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
//     gallery: {
//       enabled: true,
//       navigateByImgClick: true,
//       preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
//     },
//     image: {
//       verticalFit: true
//     },
//     zoom: {
//       enabled: true,
//       duration: 300 // don't foget to change the duration also in CSS
//     }
//   });

//   $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
//     disableOn: 700,
//     type: "iframe",
//     mainClass: "mfp-fade",
//     removalDelay: 160,
//     preloader: false,

//     fixedContentPos: false
//   });

//   var counter = function () {
//     $("#section-counter").waypoint(
//       function (direction) {
//         if (
//           direction === "down" &&
//           !$(this.element).hasClass("ftco-animated")
//         ) {
//           var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
//             ","
//           );
//           $(".number").each(function () {
//             var $this = $(this),
//               num = $this.data("number");
//             console.log(num);
//             $this.animateNumber(
//               {
//                 number: num,
//                 numberStep: comma_separator_number_step
//               },
//               7000
//             );
//           });
//         }
//       },
//       { offset: "95%" }
//     );
//   };
//   counter();

//   var contentWayPoint = function () {
//     var i = 0;
//     $(".ftco-animate").waypoint(
//       function (direction) {
//         if (
//           direction === "down" &&
//           !$(this.element).hasClass("ftco-animated")
//         ) {
//           i++;

//           $(this.element).addClass("item-animate");
//           setTimeout(function () {
//             $("body .ftco-animate.item-animate").each(function (k) {
//               var el = $(this);
//               setTimeout(
//                 function () {
//                   var effect = el.data("animate-effect");
//                   if (effect === "fadeIn") {
//                     el.addClass("fadeIn ftco-animated");
//                   } else if (effect === "fadeInLeft") {
//                     el.addClass("fadeInLeft ftco-animated");
//                   } else if (effect === "fadeInRight") {
//                     el.addClass("fadeInRight ftco-animated");
//                   } else {
//                     el.addClass("fadeInUp ftco-animated");
//                   }
//                   el.removeClass("item-animate");
//                 },
//                 k * 50,
//                 "easeInOutExpo"
//               );
//             });
//           }, 100);
//         }
//       },
//       { offset: "95%" }
//     );
//   };
//   contentWayPoint();
// })(jQuery);
