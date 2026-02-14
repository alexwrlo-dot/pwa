const contentData = {
    fundamentos: {
        title: "Fundamentos de lo Simple",
        description: "En un mundo que admira la complejidad, la simplicidad es la verdadera ventaja competitiva. Descubre cómo limpiar tu percepción.",
        video: "https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-in-an-office-4340-large.mp4",
        images: [
            "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80"
        ],
        chapters: [
            {
                name: "Por qué tememos a lo simple",
                essence: "La complejidad se confunde con sofisticación. Los directivos temen que una idea simple les haga parecer 'simplones'.",
                quote: "La complejidad no debe admirarse. Debe evitarse."
            },
            {
                name: "El Valor del Sentido Común",
                essence: "Es la sabiduría compartida por todos. No requiere datos complejos, sino ver la realidad tal como es, sin el filtro del ego.",
                quote: "Confíe en su sentido común. Le dirá lo que tiene que hacer."
            },
            {
                name: "El Lenguaje que Nubla",
                essence: "La jerga corporativa oculta la falta de claridad. Si no puedes explicarlo simplemente, no lo entiendes.",
                quote: "Las grandes ideas casi siempre se expresan con palabras simples."
            }
        ]
    },
    management: {
        title: "Management Moderno",
        description: "El arte de filtrar el ruido y enfocarse exclusivamente en lo que genera valor real para el negocio.",
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-with-a-tablet-4545-large.mp4",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80"
        ],
        chapters: [
            {
                name: "Filtro de Información",
                essence: "Somos informativamente obesos. La maestría consiste en saber qué ignorar para ganar claridad mental.",
                quote: "Si logra despejar su mente, podrá pensar de forma más clara."
            },
            {
                name: "Estrategia es Diferenciación",
                essence: "La estrategia no es un documento de cien páginas. Es una idea simple que te separa del resto.",
                quote: "Si no eres diferente, más vale que tengas un precio muy bajo."
            },
            {
                name: "Competencia y Guerra",
                essence: "Identifica los puntos débiles de tu rival y enfoca toda tu fuerza en ese punto. No ataques sus fortalezas.",
                quote: "Conozca a su competidor. Explote sus debilidades."
            },
            {
                name: "Presupuestos Anuales",
                essence: "El dinero debe seguir a la oportunidad, no al departamento que más gastó el año pasado.",
                quote: "Invierta donde están las oportunidades. No donde estaban."
            }
        ]
    },
    liderazgo: {
        title: "Liderazgo de Alto Nivel",
        description: "El líder como el simplificador supremo. Su trabajo es eliminar la niebla para que el equipo vea el camino.",
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-at-her-laptop-in-a-cafe-4560-large.mp4",
        images: [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        ],
        chapters: [
            {
                name: "Misiones que no Confundan",
                essence: "Las misiones pomposas son ignoradas. Una misión debe ser una directriz táctica clara y memorable.",
                quote: "Una misión confusa indica que no sabes a dónde vas."
            },
            {
                name: "Liderar el Ataque",
                essence: "El liderazgo se ejerce desde el frente, conociendo la realidad del cliente, no desde una oficina cerrada.",
                quote: "Los buenos líderes saben a dónde van."
            },
            {
                name: "Organización Eficiente",
                essence: "Las estructuras jerárquicas matan la agilidad. Una organización plana es una organización rápida.",
                quote: "El futuro pertenece a la empresa bien organizada y enfocada."
            },
            {
                name: "Nuevas Ideas Mejoradas",
                essence: "No busques la genialidad aislada. Toma ideas que funcionan y adáptalas con valentía a tu situación.",
                quote: "Muéstreme la idea de otra persona (y cómo la adaptamos)."
            }
        ]
    },
    exito: {
        title: "El Éxito en Perspectiva",
        description: "El éxito no es una meta interna, es el resultado de cómo interactúas con el mercado y las oportunidades.",
        video: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-person-writing-on-a-notebook-4542-large.mp4",
        images: [
            "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
        ],
        chapters: [
            {
                name: "Metas vs Realidad",
                essence: "Las metas rígidas te impiden ver oportunidades inesperadas. El éxito nace de reaccionar ante lo imprevisto.",
                quote: "Las metas son sueños; despierta y enfrenta la realidad."
            },
            {
                name: "Motivación y Acción",
                essence: "La charla motivacional dura minutos. El desafío real de un líder es dar a las tropas una idea por la qué luchar.",
                quote: "Trabajar más no es tan eficaz como trabajar mejor."
            },
            {
                name: "Encontrar tu Tren",
                essence: "El éxito no surge del deseo interno. Surge de encontrar un tren (una gran idea o empresa) y subirse deprisa.",
                quote: "El éxito no está dentro de ti. El éxito está ahí fuera."
            },
            {
                name: "Aceptar la Crítica",
                essence: "Te llamarán simplista. No importa. La historia la escriben los que simplifican y ejecutan.",
                quote: "La mejor revancha ante los críticos es tener la razón."
            }
        ]
    }
};

function showDetail(category) {
    const data = contentData[category];
    const detailView = document.getElementById('details-view');
    const contentArea = document.getElementById('detail-dynamic-content');

    // Reset scroll
    detailView.scrollTop = 0;

    contentArea.innerHTML = `
        <div class="detail-header">
            <button class="back-btn" onclick="hideDetail()">✕</button>
        </div>
        <video autoplay muted loop playsinline src="${data.video}"></video>
        <div class="content-body">
            <h2>${data.title}</h2>
            <p class="detail-desc">${data.description}</p>
            
            <div class="symbolic-images">
                ${data.images.map(img => `<img src="${img}" class="symbolic-img" alt="Symbolic Artwork">`).join('')}
            </div>

            <h3 style="margin: 40px 0 20px; font-weight: 800; font-size: 1.4rem;">PUNTOS CLAVE DEL LIBRO</h3>

            <div class="chapters-grid">
                ${data.chapters.map(ch => `
                    <div class="glass chapter-card fade-in">
                        <h4>${ch.name}</h4>
                        <p class="essence">${ch.essence}</p>
                        <span class="quote">"${ch.quote}"</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="glass" style="margin-top: 40px; padding: 30px; text-align: center; border: 1px dashed var(--secondary);">
                <p style="color: var(--secondary); font-weight: 800; font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 10px;">PRO-TIP</p>
                <p style="font-size: 1rem; line-height: 1.6;">Aplica este concepto hoy mismo: Identifica una tarea compleja y divídela en su unidad más simple.</p>
            </div>
        </div>
    `;

    detailView.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideDetail() {
    const detailView = document.getElementById('details-view');
    detailView.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const flashMessages = [

    "La complejidad es el lenguaje de los inseguros.",
    "La simplicidad es la máxima sofisticación.",
    "Si no eres diferente, más vale que tengas un precio muy bajo.",
    "La estrategia no es un documento, es una idea simple.",
    "El futuro pertenece a la empresa enfocada.",
    "La complejidad no debe admirarse, debe evitarse.",
    "Confíe en su sentido común; le dirá qué hacer.",
    "Las misiones pomposas solo decoran paredes.",
    "El éxito no está dentro de ti, sino ahí fuera.",
    "Menos es más: elimina el ruido para ganar claridad."
];

function initFlashcards() {
    const container = document.getElementById('flash-container');
    if (!container) return;

    container.innerHTML = flashMessages.map((msg, i) => `
        <div class="glass flash-card fade-in" style="animation-delay: ${1.2 + (i * 0.1)}s" onclick="revealFlash(this)">
            <div class="flash-cover">
                ${i + 1}
                <span>TOCAR</span>
            </div>
            <p class="flash-msg">${msg}</p>
        </div>
    `).join('');
}

function revealFlash(card) {
    card.classList.add('revealed');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initFlashcards();
});

