 document.addEventListener('DOMContentLoaded', function() {
            // --- Carousel Logic with lowered controls ---
            const slides = document.querySelectorAll('.hero-carousel__slide');
            const dots = document.querySelectorAll('.hero-carousel__dot');
            const btnPrev = document.querySelector('.hero-carousel__arrow--prev');
            const btnNext = document.querySelector('.hero-carousel__arrow--next');
            let currentIndex = 0;
            let carouselInterval;

            function goToSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.add('hero-carousel__slide--active');
                    } else {
                        slide.classList.remove('hero-carousel__slide--active');
                    }
                });

                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('hero-carousel__dot--active');
                        dot.setAttribute('aria-selected', 'true');
                    } else {
                        dot.classList.remove('hero-carousel__dot--active');
                        dot.setAttribute('aria-selected', 'false');
                    }
                });

                currentIndex = index;
            }

            function nextSlide() {
                const nextIndex = (currentIndex + 1) % slides.length;
                goToSlide(nextIndex);
            }

            function prevSlide() {
                const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                goToSlide(prevIndex);
            }

            function startAutoplay() {
                carouselInterval = setInterval(nextSlide, 6000);
            }

            function stopAutoplay() {
                clearInterval(carouselInterval);
            }

            if (btnNext && btnPrev) {
                btnNext.addEventListener('click', function() {
                    stopAutoplay();
                    nextSlide();
                    startAutoplay();
                });

                btnPrev.addEventListener('click', function() {
                    stopAutoplay();
                    prevSlide();
                    startAutoplay();
                });
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    stopAutoplay();
                    goToSlide(index);
                    startAutoplay();
                });
            });

            startAutoplay();

            // --- Filter Pills Interactivity ---
            const filterPills = document.querySelectorAll('.filter-pills__button');
            filterPills.forEach(pill => {
                pill.addEventListener('click', function() {
                    filterPills.forEach(p => {
                        p.classList.remove('filter-pills__button--active');
                        p.setAttribute('aria-selected', 'false');
                    });
                    this.classList.add('filter-pills__button--active');
                    this.setAttribute('aria-selected', 'true');
                });
            });
        });