document.addEventListener('DOMContentLoaded', () => {
    // Подсветка активного пункта меню при прокрутке
    const sections = document.querySelectorAll(".policy-section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 400;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Кнопка согласия
const consentBtn = document.getElementById("consent-btn");
const consentMessage = document.getElementById("consent-message");

if (consentBtn && consentMessage) {
    // Проверяем, дал ли пользователь уже согласие (из localStorage)
    if (localStorage.getItem('privacyConsent') === 'given') {
        consentBtn.classList.add('hidden');
        consentMessage.style.display = 'flex';
    }

    consentBtn.addEventListener("click", () => {
        // Скрываем кнопку и показываем сообщение
        consentBtn.classList.add('hidden');
        consentMessage.style.display = 'flex';

        // Сохраняем в localStorage, что пользователь дал согласие
        localStorage.setItem('privacyConsent', 'given');

        // Можно добавить дополнительную логику, например отправку на сервер
    });
}

    // Обработчик темы
    const toggleBtn = document.getElementById('theme-toggle');
    const isDark = localStorage.getItem('theme') === 'dark';

    if (isDark) {
        document.body.classList.add('dark-theme');
        toggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDarkNow = document.body.classList.contains('dark-theme');
        toggleBtn.querySelector('i').classList.toggle('fa-moon', !isDarkNow);
        toggleBtn.querySelector('i').classList.toggle('fa-sun', isDarkNow);
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    });
});

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});