// PHONE NAVBAR JS
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
});

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("fixed", this.window.scrollY > 0);
});



const sections = document.querySelectorAll('div[id]'); 
const navLinks = document.querySelectorAll('.nav-list .nav-text');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});




// FOCUS BUTTON JS
document.addEventListener("DOMContentLoaded", () => {
    const svgElements = document.querySelectorAll("svg.mobile");

    svgElements.forEach(svg => {
        svg.addEventListener("click", () => {
            svgElements.forEach(el => el.classList.remove("svg-focused"));
            svg.classList.add("svg-focused");
        });
    });
});


// BACK TO TOP BUTTON JS
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
    backToTopButton.classList.remove("hide"); 
  } else {
    backToTopButton.classList.remove("show");
    backToTopButton.classList.add("hide"); 
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// FLOATING ACTION BUTTON JS
const toggleButton = document.getElementById('floating-toggle');
const overlay = document.getElementById('overlay');

const activeMenu = () => {
    toggleButton.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); 
            
    if (toggleButton.classList.contains('active')) {
        overlay.classList.add('active'); 
    } else {
        overlay.classList.remove('active'); 
    }
}

const menuClose = () => {
    if (toggleButton.classList.contains('active')) {
        activeMenu(); 
    }
}

toggleButton.addEventListener('click', (event) => {
    event.stopPropagation(); 
    activeMenu();
});

document.addEventListener('click', menuClose);
overlay.addEventListener('click', menuClose);

const floatingElement = document.querySelector('.floating');
let isScrolling; // Variabel untuk menyimpan timeout

window.addEventListener('scroll', () => {
    floatingElement.style.left = '-10%';

    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        floatingElement.style.left = '1%';
    }, 700); 
});


// // PLAY VIDEO BUTTON
// document.addEventListener('DOMContentLoaded', () => {
//     const watchVideoBtn = document.getElementById('watchVideoBtn');
//     const closeModalBtn = document.getElementById('closeModalBtn');
//     const videoModal = document.getElementById('videoModal');
//     const videoPlayer = document.getElementById('videoPlayer');

//     watchVideoBtn.addEventListener('click', () => {
//         videoModal.style.display = 'flex';
//         videoPlayer.play();
//         document.body.classList.add('scroll-disabled');
//     });

//     closeModalBtn.addEventListener('click', () => {
//         videoModal.style.display = 'none';
//         videoPlayer.pause();
//         videoPlayer.currentTime = 0;
//         document.body.classList.remove('scroll-disabled');
//     });

//     window.addEventListener('click', (e) => {
//         if (e.target === videoModal) {
//             videoModal.style.display = 'none';
//             videoPlayer.pause();
//             videoPlayer.currentTime = 0;
//             document.body.classList.remove('scroll-disabled');
//         }
//     });
// });



// FULLSCREEN BTN JS
const fullscreenBtn = document.getElementById('fullscreen-btn');
const iconMaximize = document.getElementById('icon-maximize');
const iconMinimize = document.getElementById('icon-minimize');

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enter Full Screen
        document.documentElement.requestFullscreen()
            .then(() => {
                iconMaximize.style.display = 'none';
                iconMinimize.style.display = 'block';
            })
            .catch((err) => {
                alert(`Error entering full screen mode: ${err.message}`);
            });
    } else {
        // Exit Full Screen
        document.exitFullscreen()
            .then(() => {
                iconMaximize.style.display = 'block';
                iconMinimize.style.display = 'none';
            })
            .catch((err) => {
                alert(`Error exiting full screen mode: ${err.message}`);
            });
    }
});




function toggleMode() {
    const lightModeIcon = document.getElementById('light-mode');
    const darkModeIcon = document.getElementById('dark-mode');
    
    // Toggle visibility of icons
    if (lightModeIcon.style.display === "none") {
        lightModeIcon.style.display = "block";
        darkModeIcon.style.display = "none";
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');

        // Update all containers
        const containers = document.querySelectorAll('div, nav, ul, p, svg, a');
        containers.forEach(container => {
            container.classList.remove('dark-mode');
            container.classList.add('light-mode');
        });

        // Simpan mode ke sessionStorage
        sessionStorage.setItem('mode', 'light');
    } else {
        lightModeIcon.style.display = "none";
        darkModeIcon.style.display = "block";
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        // Update all containers
        const containers = document.querySelectorAll('div, nav, ul, p, svg, a');
        containers.forEach(container => {
            container.classList.remove('light-mode');
            container.classList.add('dark-mode');
        });

        // Simpan mode ke sessionStorage
        sessionStorage.setItem('mode', 'dark');
    }
}

// Fungsi untuk memuat mode dari sessionStorage saat halaman dimuat
function loadMode() {
    const mode = sessionStorage.getItem('mode'); // Ambil mode dari sessionStorage
    const lightModeIcon = document.getElementById('light-mode');
    const darkModeIcon = document.getElementById('dark-mode');

    if (mode === 'dark') {
        lightModeIcon.style.display = "none";
        darkModeIcon.style.display = "block";
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        const containers = document.querySelectorAll('div, nav, ul, p, svg, a');
        containers.forEach(container => {
            container.classList.remove('light-mode');
            container.classList.add('dark-mode');
        });
    } else {
        lightModeIcon.style.display = "block";
        darkModeIcon.style.display = "none";
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');

        const containers = document.querySelectorAll('div, nav, ul, p, svg, a');
        containers.forEach(container => {
            container.classList.remove('dark-mode');
            container.classList.add('light-mode');
        });
    }
}

// Set default mode saat halaman dimuat ulang setelah sesi berakhir
function resetModeToDefault() {
    sessionStorage.clear(); // Hapus data sesi saat ini
    const lightModeIcon = document.getElementById('light-mode');
    const darkModeIcon = document.getElementById('dark-mode');
    lightModeIcon.style.display = "block";
    darkModeIcon.style.display = "none";
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');

    const containers = document.querySelectorAll('div, nav, ul, p, svg, a');
    containers.forEach(container => {
        container.classList.remove('dark-mode');
        container.classList.add('light-mode');
    });
}

// Muat mode saat halaman dimuat
window.onload = () => {
    if (sessionStorage.getItem('mode')) {
        loadMode();
    } else {
        resetModeToDefault();
    }
};









