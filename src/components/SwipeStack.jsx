import { useState, useRef, useEffect } from "react";

const lerp = (a, b, t) => a + (b - a) * t;
const FLY_SPEED = 1200;// how far off screen the card flies (in px)
const FLY_THRESHOLD = 60; //how far you must drag before it flies away
const STACK_OFFSET = 12; // how many px each card peeks above the one in front

export default function SwipeStack({ cards: initial, cardWidth = 300, cardHeight = 380, renderCard, onDismiss }) {
  const [cards, setCards] = useState([...initial]);
  const [transform, setTransform] = useState({ dx: 0, dy: 0, flyDir: null });

  const isDown = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const getPos = (e) => {
    const r = containerRef.current.getBoundingClientRect();
    const src = e.touches?.[0] ?? e;
    return { x: src.clientX - r.left, y: src.clientY - r.top };
  };

  const onDown = (e) => {
    if (transform.flyDir) return;
    isDown.current = true;
    startPos.current = getPos(e);
    setTransform({ dx: 0, dy: 0, flyDir: null });
  };

  const dismiss = (dx, dy, dist) => {
    const dir = { x: (dx / dist) * FLY_SPEED, y: (dy / dist) * FLY_SPEED };
    setTimeout(() => {
      setCards(c => { const n = [...c]; const top = n.pop(); onDismiss?.(top); n.unshift(top); return n; });
      setTransform({ dx: 0, dy: 0, flyDir: null });
    }, 450);
    return { dx, dy, flyDir: dir };
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!isDown.current) return;
      const p = getPos(e);
      setTransform(prev => ({ ...prev, dx: p.x - startPos.current.x, dy: p.y - startPos.current.y }));
    };

    const onUp = () => {
      if (!isDown.current) return;
      isDown.current = false;
      setTransform(prev => {
        const { dx, dy } = prev;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > FLY_THRESHOLD) return dismiss(dx, dy, dist);
        setTimeout(() => setTransform({ dx: 0, dy: 0, flyDir: null }), 300);
        return { dx: 0, dy: 0, flyDir: null };
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const { dx, dy, flyDir } = transform;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const progress = Math.min(dist / FLY_THRESHOLD, 1);
  const tilt = dx * 0.30; 

  return (
    <div
      ref={containerRef}
      onMouseDown={onDown}
      onTouchStart={onDown}
      onTouchMove={(e) => {
        if (!isDown.current) return;
        const p = getPos(e);
        setTransform(prev => ({ ...prev, dx: p.x - startPos.current.x, dy: p.y - startPos.current.y }));
      }}
      onTouchEnd={() => {
        if (!isDown.current) return;
        isDown.current = false;
        setTransform(prev => {
          const { dx, dy } = prev;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > FLY_THRESHOLD) return dismiss(dx, dy, dist);
          setTimeout(() => setTransform({ dx: 0, dy: 0, flyDir: null }), 300);
          return { dx: 0, dy: 0, flyDir: null };
        });
      }}
      style={{ position: "relative", width: cardWidth, height: cardHeight }}
    >
      {cards.map((card, i) => {
        const depth = cards.length - 1 - i;
        const isTop = depth === 0;
        const isNext = depth === 1;

        let tx = 0, ty = -(depth * STACK_OFFSET);
        let scale = 1 - depth * 0.04;
        let rotate = (i % 2 ? -1 : 1) * depth;
        let opacity = 1 - depth * 0.15;
        let transition = "transform 0.3s ease, opacity 0.3s ease";

        if (isTop) {
          if (flyDir) {
            tx = flyDir.x; ty = flyDir.y;
            rotate = tilt + (flyDir.x > 0 ? 25 : -25);
            scale = 0.85; opacity = 0;
            transition = "transform 0.45s ease, opacity 0.45s ease";
          } else if (isDown.current) {
            tx = dx; ty = dy;
            rotate = tilt; scale = 1.03;
            transition = "none";
          }
        }

        if (isNext && (isDown.current || flyDir)) {
          ty = lerp(-(depth * STACK_OFFSET), -STACK_OFFSET * 0.3, progress);
          scale = lerp(1 - depth * 0.04, 0.96, progress);
          rotate = lerp(rotate, 0, progress);
          transition = flyDir ? "transform 0.45s ease" : "none";
        }

        return (
          <div key={card.id} style={{
            position: "absolute", inset: 0,
            width: cardWidth, height: cardHeight,
            borderRadius: 16, overflow: "hidden",
            transform: `translate(${tx}px, ${ty}px) rotate(${rotate}deg) scale(${scale})`,
            transformOrigin: "center bottom",
            transition, opacity,
            zIndex: isTop ? 100 : i,
            cursor: isTop ? (isDown.current ? "grabbing" : "grab") : "default",
            pointerEvents: isTop ? "auto" : "none",
            willChange: "transform",
          }}>
            {renderCard(card, isTop)}
          </div>
        );
      })}
    </div>
  );
}