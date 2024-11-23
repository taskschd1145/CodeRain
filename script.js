const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 默认为01，按e切换
let letters = '01';

const fontSize = 16;
let columns = canvas.width / fontSize;

let drops = Array.from({ length: columns }).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px 'Nerd Font'`;

    drops.forEach((y, index) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

setInterval(draw, 33);

// 修改初始值为false
let isCursorVisible = false;
document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        isCursorVisible = !isCursorVisible;
        document.body.style.cursor = isCursorVisible ? 'default' : 'none';
    }
    // 按 'e' 键切换字符类型
    if (event.key === 'e') {
        letters = letters === '01' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : '01';
    }
}); 