export default {
    data() {
        return {
            name: '',
            email: '',
            stars: [],
            originalPositions: [] // Для хранения оригинальных позиций звезд
        };
    },
    methods: {
        register() {
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    },
    mounted() {
        this.createSpaceBackground();
        window.addEventListener('mousemove', this.moveStars);
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.moveStars);
    },
    methods: {
        createSpaceBackground() {
            const canvas = document.getElementById('spaceCanvas');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            for (let i = 0; i < 300; i++) {
                const star = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    alpha: Math.random()
                };
                this.stars.push(star);
                this.originalPositions.push({ x: star.x, y: star.y }); // Сохраняем оригинальные позиции
            }

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.stars.forEach(star => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                    ctx.fill();
                });
                requestAnimationFrame(draw);
            };

            draw();
        },
        moveStars(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            this.stars.forEach((star, index) => {
                const dx = star.x - mouseX;
                const dy = star.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    const force = 100 / distance; // Сила отталкивания
                    star.x += (dx / distance) * force; // Отталкивание от курсора
                    star.y += (dy / distance) * force; // Отталкивание от курсора
                } else {
                    // Возвращаем звезды на оригинальные позиции
                    star.x += (this.originalPositions[index].x - star.x) * 0.05; // Плавное возвращение
                    star.y += (this.originalPositions[index].y - star.y) * 0.05; // Плавное возвращение
                }
            });
        }
    }
};