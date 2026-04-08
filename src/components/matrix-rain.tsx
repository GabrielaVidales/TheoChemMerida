import { useEffect, useRef } from "react";

const KATAKANA =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const CHARS = KATAKANA + LATIN;
const LAIN_WORDS = [
    "LAIN",
    "WIRED",
    "NAVI",
    "PROTOCOL7",
    "PSYCHE",
    "LAYER",
    "SOUL",
    "NETWORK",
    "GHOST",
];
const FONT_SIZE = 14;

interface Drop {
    y: number;
    speed: number;
    bright: boolean;
    hue: number;
    lainWord: string | null;
    lainPos: number;
}

function randomDrop(canvasHeight: number): Drop {
    return {
        y: Math.random() * -(canvasHeight / FONT_SIZE),
        speed: 0.3 + Math.random() * 0.7,
        bright: Math.random() > 0.97,
        hue: Math.random() > 0.85 ? 190 : 120,
        lainWord:
            Math.random() > 0.95
                ? LAIN_WORDS[Math.floor(Math.random() * LAIN_WORDS.length)]
                : null,
        lainPos: 0,
    };
}

function resetDrop(drop: Drop, canvasHeight: number): void {
    drop.y = Math.random() * -20;
    drop.speed = 0.3 + Math.random() * 0.7;
    drop.bright = Math.random() > 0.97;
    drop.hue = Math.random() > 0.85 ? 190 : 120;
    drop.lainWord =
        Math.random() > 0.95
            ? LAIN_WORDS[Math.floor(Math.random() * LAIN_WORDS.length)]
            : null;
    drop.lainPos = 0;
}

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let drops: Drop[] = [];

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const cols = Math.floor(canvas.width / FONT_SIZE);
            drops = Array.from({ length: cols }, () => randomDrop(canvas.height));
        };

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drops.forEach((drop, i) => {
                const x = i * FONT_SIZE;
                const y = drop.y * FONT_SIZE;

                if (drop.lainWord !== null && drop.lainPos < drop.lainWord.length) {
                    const ch = drop.lainWord[drop.lainPos];
                    ctx.fillStyle = `hsl(${drop.hue},100%,80%)`;
                    ctx.shadowColor = `hsl(${drop.hue},100%,70%)`;
                    ctx.shadowBlur = 8;
                    ctx.font = `bold ${FONT_SIZE}px monospace`;
                    ctx.fillText(ch, x, y);
                    drop.lainPos++;
                } else {
                    const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
                    ctx.shadowBlur = drop.bright ? 6 : 0;
                    ctx.shadowColor = `hsl(${drop.hue},100%,70%)`;
                    ctx.fillStyle = drop.bright
                        ? "#ffffff"
                        : `hsl(${drop.hue},100%,${35 + Math.random() * 25}%)`;
                    ctx.font = `${FONT_SIZE}px monospace`;
                    ctx.fillText(ch, x, y);
                }

                ctx.shadowBlur = 0;
                drop.y += drop.speed;

                if (drop.y * FONT_SIZE > canvas.height + 20 * FONT_SIZE) {
                    resetDrop(drop, canvas.height);
                }
            });

            animId = requestAnimationFrame(draw);
        };

        init();
        draw();
        window.addEventListener("resize", init);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", init);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "absolute", top: 0, left: 0 }}
        />
    );
}