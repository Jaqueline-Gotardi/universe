import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./MissionTutorial.module.css"

const TimelineItem = ({ year, location, title, description, tags, side, color, images = [] }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [imgError, setImgError] = useState(false);

    const colorMap = {
        purple: { accent: "#A855F7", glow: "rgba(168, 85, 247, 0.5)", border: "rgba(168, 85, 247, 0.5)", bg: "rgba(168,85,247,0.15)" },
        pink: { accent: "#EC4899", glow: "rgba(236,72,153,0.5)", border: "rgba(236,72,153,0.5)", bg: "rgba(236,72,153,0.15)" },
        cyan: { accent: "#06B6D4", glow: "rgba(6,182,212,0.5)", border: "rgba(6,182,212,0.5)", bg: "rgba(6,182,212,0.15)" },
    }
    const c = colorMap[color] || colorMap.purple;

    const hasImages = images.length > 0;

    const prev = () => {
        setImgError(false); // Reseta o estado de erro
        setActiveIndex(i => (i - 1 + images.length) % images.length);
    };

    const next = () => {
        setImgError(false); // Reseta o estado de erro
        setActiveIndex(i => (i + 1) % images.length);
    };

    return (
        <>
            {/* CARD */}
            <div
                className={`${styles.timelineCard} ${side === "right" ? styles.cardRight : styles.cardLeft}`}
                style={{ "--accent": c.accent, "--glow": c.glow, "--border": c.border, "--bg": c.bg }}
            >
                {/* Conteúdo textual */}
                <div className={styles.cardTextWrap}>
                    <div className={styles.cardText}>
                        <div className={styles.timelineHeader}>
                            <span className={styles.timelineYear} style={{ color: c.accent }}>{year}</span>
                            <span className={styles.timelineLocation}>{location}</span>
                        </div>

                        <h3 className={styles.timelineItemTitle} style={{ color: c.accent }}>{title}</h3>

                        <p className={styles.timelineItemDescription}>{description}</p>

                        <ul className={styles.timelineList}>
                            {tags.map(tag => (
                                <li key={tag} style={{ borderColor: c.border, color: c.accent }}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Container de imagens */}
                {hasImages && (
                    <div className={styles.imageWrap}>
                        <div className={styles.timelineImageContainer} onClick={() => setModalOpen(true)}>
                            <div className={styles.timelineImage}>
                                {images.slice(0, 3).map((img, i) => (
                                    <div key={i} className={styles.thumb}>
                                        {img.src
                                            ? <img src={img.src} alt={img.caption || `foto ${i + 1}`} />
                                            : <div className={styles.thumbPlaceholder}>
                                                <span></span>
                                            </div>
                                        }
                                    </div>
                                ))}
                            </div>
                            <button className={styles.timelineButton} style={{ color: c.accent, borderColor: c.border }}>
                                🔍 Ver galeria · {images.length} fotos
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* MODAL */}
            {hasImages && modalOpen && createPortal(
                <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
                    <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
                        {/* Header */}
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitle}>
                                <span className={styles.modalEmoji}>{title.split(" ")[0]}</span>
                                <div>
                                    <h2 className={styles.modalTitleText} style={{ color: c.accent }}>{year} — {title.replace(/^\S+\s/, "")}</h2>
                                    <span className={styles.modalLocation}>{location}</span>
                                </div>
                            </div>
                            <button 
                                className={styles.modalClose} 
                                aria-label="Fechar galeria"
                                onClick={() => setModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Imagem principal */}
                        <div className={styles.modalMain}>
                            {images[activeIndex]?.src && !imgError ? (
                                <img
                                    src={images[activeIndex].src}
                                    alt={images[activeIndex].caption}
                                    className={styles.modalImg}
                                    onError={(e) => setImgError(true)}
                                />
                            ) : (
                                <div className={styles.modalPlaceholder}>
                                    <span className={styles.placeholderEmoji}>📡</span>
                                    <p>Sinal perdido: Arquivo de imagem não encontrado.</p>
                                </div>
                            )}
                        </div>

                        {/* Caption */}
                        <p className={styles.modalCaption} style={{ color: c.accent }}>
                            {images[activeIndex]?.caption || "Tela inicial do protótipo"}
                        </p>

                        {/* Navegação */}
                        <div className={styles.modalNav}>
                            <button onClick={prev} className={styles.navBtn}>◀</button>
                            <div className={styles.dots}>
                                {images.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                                        style={i === activeIndex ? { background: c.accent } : {}}
                                        onClick={() => {
                                            setImgError(false);
                                            setActiveIndex(i);
                                        }}
                                    />
                                ))}
                            </div>
                            <button onClick={next} className={styles.navBtn}>▶</button>
                        </div>

                        {/* Thumbnails */}
                        <div className={styles.thumbRow}>
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
                                    style={i === activeIndex ? { borderColor: c.accent } : {}}

                                    onClick={() => {
                                        setImgError(false);
                                        setActiveIndex(i);
                                    }}
                                >
                                    {img.src ? (
                                        <img src={img.src} loading="lazy" alt={img.caption} />
                                    ) : (
                                        <span>{img.emoji}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

export default TimelineItem;