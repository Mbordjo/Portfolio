const hero = document.querySelector("#hero");
const content = document.querySelector("#content");
const wave = document.querySelector(".hero-wave");

if (hero && content && wave) {

    function updateWave() {

        const heroRect = hero.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();

        // Start the wave lower
        const waveTop =
            heroRect.bottom - contentRect.top - 30;

        wave.style.setProperty(
            "--wave-top",
            `${waveTop}px`
        );

        // Calculate scroll progress
        const scrollDistance = Math.max(0, -heroRect.top);

        const progress = Math.min(
            scrollDistance / (hero.offsetHeight * 1.2),
            1
        );

        // Longer, slower upward movement
        const waveMovement = -progress * hero.offsetHeight;

        wave.style.setProperty(
            "--wave-shift",
            `${waveMovement}px`
        );
    }

    let ticking = false;

    function requestWaveUpdate() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateWave();
                ticking = false;
            });

            ticking = true;
        }
    }

    window.addEventListener("scroll", requestWaveUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestWaveUpdate);

    updateWave();
}
