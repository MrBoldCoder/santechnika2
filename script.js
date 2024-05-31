/////////////////MOBILE MENU////////////////////////////

function toggleMobileMenu() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelectorAll(".menuli");
  const closeicon = document.querySelector(".close");
  const calltoaction = document.querySelector(".calltoaction");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
      hamburger.style.display = "none";
      closeicon.style.display = "block";
    }
  });
  closeicon.addEventListener("click", function () {
    navbar.classList.toggle("active");
    closeicon.style.display = "none";
    hamburger.style.display = "block";
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      if (window.innerWidth < 1030) {
        navbar.classList.remove("active");
        closeicon.style.display = "none";
        hamburger.style.display = "block";
      }
    });
  });

  calltoaction.addEventListener("click", function () {
    if (window.innerWidth < 1030) {
      navbar.classList.remove("active");
      closeicon.style.display = "none";
      hamburger.style.display = "block";
    }
  });

  const mediaQuery = window.matchMedia("(max-width: 1030px)");

  function handleMediaQueryChange(e) {
    if (e.matches) {
      hamburger.style.display = "block";
      closeicon.style.display = "none";
    } else {
      hamburger.style.display = "none";
      closeicon.style.display = "none";
      navbar.classList.remove("active");
    }
  }

  mediaQuery.addEventListener("change", handleMediaQueryChange);
}

toggleMobileMenu();

/////////////////////////END OF MOBILE MENU////////////////////////////

////////////////////////SMOOTH SCROOL//////////////////////////////////

////////

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle smooth scrolling
  function handleButtonClick(event) {
    event.preventDefault();
    const targetElementId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  }

  // Add event listeners to the .contactBtn elements
  const contactBtns = document.querySelectorAll(".contactBtn");
  contactBtns.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
    btn.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        handleButtonClick.call(this, event);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".navbar .navul .menuli");

  navItems.forEach(function (item) {
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const targetId = item.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop - headerHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });

  const callButton = document.querySelector(".cardbtn, .callbtn, .contactBtn");

  callButton.addEventListener("click", handleButtonClick);

  callButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleButtonClick();
    }
  });

  function handleButtonClick() {
    const targetElementId = callButton.getAttribute("data-target");
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  }
});

/// common selectors

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

//// end of common selectors

const aboutmeId = document.getElementById("aboutmeid");
const aboutmeBtn = document.querySelectorAll(".aboutmeBtn");

aboutmeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const adjustedOffset = aboutmeId.offsetTop - headerHeight;
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  });
});

/////
const qualityId = document.getElementById("qualityId");
const qualityBtn = document.querySelectorAll(".qualityBtn");

qualityBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const adjustedOffset = qualityId.offsetTop - headerHeight;
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  });
});
////
const contactId = document.getElementById("contactId");
const contactBtn = document.querySelectorAll(".contactBtn");

contactBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const adjustedOffset = contactId.offsetTop - headerHeight;
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  });
});
///

const servicesid = document.getElementById("servicesid");
const servicebtn = document.querySelectorAll(".paslaugosbtn");

servicebtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const adjustedOffset = servicesid.offsetTop - headerHeight;
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  });
});

/////

const landingid = document.getElementById("landingid");
const logobtn = document.querySelectorAll(".logobtn");

logobtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const adjustedOffset = landingid.offsetTop - headerHeight;
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  });
});

/////

//  SMOOTH SCROLL FROM BLOG TO INDEX HRML
const urlParams = new URLSearchParams(window.location.search);
const sectionToScroll = urlParams.get("scrollTo");

// Scroll to the section if the parameter is provided
if (sectionToScroll) {
  const headerHeight = document.querySelector("header").offsetHeight; // Get header height
  const adjustedOffset =
    document.getElementById(sectionToScroll).offsetTop - headerHeight;
  window.scrollTo({
    top: adjustedOffset,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Check for URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const sectionToScroll = urlParams.get("scrollToFor");

  // Scroll to the section if the parameter is provided
  if (sectionToScroll) {
    const headerHeight = document.querySelector("header").offsetHeight; // Get header height
    const footerHeight = document.querySelector("footer").offsetHeight; // Get footer height
    const sectionElement = document.getElementById(sectionToScroll);

    // Add a small delay before scrolling
    setTimeout(function () {
      const distanceToTop = sectionElement.getBoundingClientRect().top;
      const totalHeight = distanceToTop + window.scrollY - headerHeight;
      window.scrollTo({
        top: totalHeight,
        behavior: "smooth",
      });
    }, 100); // Adjust the delay as needed (in milliseconds)
  }
});
