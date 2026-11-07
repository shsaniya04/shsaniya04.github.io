import { useEffect, useRef, useState } from "react";

const supportsObserver = typeof IntersectionObserver !== "undefined";

/**
 * Wraps content and plays an entrance animation the first time it scrolls
 * into view. Child elements with the `pill` class are staggered via the
 * `--i` CSS variable (see index.css).
 */
function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
