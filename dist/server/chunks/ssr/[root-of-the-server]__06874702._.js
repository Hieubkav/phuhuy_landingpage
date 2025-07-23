module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/hooks/useParticles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useParticles": ()=>useParticles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useParticles = (config = {})=>{
    const { colors = [
        '#ff4444',
        '#ff6666',
        '#ff8888',
        '#ffaaaa',
        '#ffffff',
        '#f0f0f0',
        '#e0e0e0',
        '#d0d0d0'
    ], speed = 0.5, size = {
        min: 1,
        max: 4
    }, opacity = {
        min: 0.2,
        max: 1
    }, connectionDistance = 120, connectionOpacity = 0.15 } = config;
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const createParticle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((width, height)=>{
        const maxLife = 300 + Math.random() * 200;
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            size: Math.random() * (size.max - size.min) + size.min,
            opacity: Math.random() * (opacity.max - opacity.min) + opacity.min,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 0,
            maxLife
        };
    }, [
        colors,
        speed,
        size,
        opacity
    ]);
    const initializeParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((width, height, count)=>{
        const particleCount = count || Math.floor(width * height / 15000);
        particlesRef.current = [];
        for(let i = 0; i < particleCount; i++){
            particlesRef.current.push(createParticle(width, height));
        }
    }, [
        createParticle
    ]);
    const drawConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx)=>{
        particlesRef.current.forEach((particle, i)=>{
            particlesRef.current.slice(i + 1).forEach((otherParticle)=>{
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * connectionOpacity;
                    ctx.save();
                    ctx.globalAlpha = opacity;
                    ctx.strokeStyle = particle.color.includes('ff') ? '#ff4444' : '#ffffff';
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        });
    }, [
        connectionDistance,
        connectionOpacity
    ]);
    const updateAndDrawParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, width, height)=>{
        particlesRef.current.forEach((particle, index)=>{
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life++;
            // Wrap around edges
            if (particle.x < 0) particle.x = width;
            if (particle.x > width) particle.x = 0;
            if (particle.y < 0) particle.y = height;
            if (particle.y > height) particle.y = 0;
            // Calculate opacity
            const lifeRatio = particle.life / particle.maxLife;
            let currentOpacity = particle.opacity;
            if (lifeRatio > 0.8) {
                currentOpacity = particle.opacity * (1 - (lifeRatio - 0.8) / 0.2);
            }
            // Draw particle
            ctx.save();
            ctx.globalAlpha = currentOpacity;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            // Add glow for red particles
            if (particle.color.includes('ff')) {
                ctx.save();
                ctx.globalAlpha = currentOpacity * 0.3;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            // Replace dead particles
            if (particle.life >= particle.maxLife) {
                particlesRef.current[index] = createParticle(width, height);
            }
        });
    }, [
        createParticle
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, width, height)=>{
        ctx.clearRect(0, 0, width, height);
        drawConnections(ctx);
        updateAndDrawParticles(ctx, width, height);
    }, [
        drawConnections,
        updateAndDrawParticles
    ]);
    const startAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, width, height)=>{
        const animateFrame = ()=>{
            animate(ctx, width, height);
            animationRef.current = requestAnimationFrame(animateFrame);
        };
        animateFrame();
    }, [
        animate
    ]);
    const stopAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    }, []);
    return {
        initializeParticles,
        startAnimation,
        stopAnimation,
        particlesRef
    };
};
}),
"[project]/src/components/ParticleBackground.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useParticles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useParticles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const ParticleBackground = ({ intensity = 'medium', theme = 'red-white', customColors, showConnections = true, className = '' })=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Define color schemes
    const colorSchemes = {
        'red-white': [
            '#ff4444',
            '#ff6666',
            '#ff8888',
            '#ffaaaa',
            '#ffffff',
            '#f0f0f0',
            '#e0e0e0',
            '#d0d0d0'
        ],
        'blue-white': [
            '#4444ff',
            '#6666ff',
            '#8888ff',
            '#aaaaff',
            '#ffffff',
            '#f0f0f0',
            '#e0e0e0',
            '#d0d0d0'
        ],
        'custom': customColors || [
            '#ff4444',
            '#ff6666',
            '#ff8888',
            '#ffaaaa',
            '#ffffff',
            '#f0f0f0',
            '#e0e0e0',
            '#d0d0d0'
        ]
    };
    // Define intensity settings
    const intensitySettings = {
        low: {
            speed: 0.3,
            size: {
                min: 0.5,
                max: 2
            },
            opacity: {
                min: 0.1,
                max: 0.6
            },
            connectionDistance: 80,
            connectionOpacity: 0.08
        },
        medium: {
            speed: 0.5,
            size: {
                min: 1,
                max: 4
            },
            opacity: {
                min: 0.2,
                max: 1
            },
            connectionDistance: 120,
            connectionOpacity: 0.15
        },
        high: {
            speed: 0.8,
            size: {
                min: 1.5,
                max: 5
            },
            opacity: {
                min: 0.3,
                max: 1
            },
            connectionDistance: 150,
            connectionOpacity: 0.2
        }
    };
    const settings = intensitySettings[intensity];
    const colors = colorSchemes[theme];
    const { initializeParticles, startAnimation, stopAnimation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useParticles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParticles"])({
        colors,
        speed: settings.speed,
        size: settings.size,
        opacity: settings.opacity,
        connectionDistance: showConnections ? settings.connectionDistance : 0,
        connectionOpacity: settings.connectionOpacity
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // Resize canvas to full screen
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeParticles(canvas.width, canvas.height);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Start animation
        startAnimation(ctx, canvas.width, canvas.height);
        // Cleanup
        return ()=>{
            window.removeEventListener('resize', resizeCanvas);
            stopAnimation();
        };
    }, [
        initializeParticles,
        startAnimation,
        stopAnimation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: `fixed inset-0 pointer-events-none z-0 ${className}`,
        style: {
            background: 'transparent'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ParticleBackground.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ParticleBackground;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__06874702._.js.map