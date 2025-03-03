import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function BgComponent(): React.ReactElement {
    const { scrollY } = useScroll(); // Obtiene la posición del scroll
    const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y3 = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <motion.div
            className="z-0 absolute w-full h-full pointer-events-none"
        >
            <svg id="visual" viewBox="0 0 540 960" className="w-full h-full">
                <rect x="0" y="0" width="100%" height="100%" className="fill-transparent"></rect>
                <g fill="#4dad65">
                    <motion.circle r="125" cx="274" cy="216" style={{ y: y1 }} />
                    <motion.circle r="32" cx="483" cy="843" style={{ y: y2 }} />
                    <motion.circle r="96" cx="8" cy="511" style={{ y: y3 }} />
                    <motion.circle r="116" cx="367" cy="617" style={{ y: y1 }} />
                    <motion.circle r="57" cx="81" cy="933" style={{ y: y2 }} />
                    <motion.circle r="57" cx="515" cy="68" style={{ y: y3 }} />
                </g>
            </svg>
        </motion.div>
    );
}

export default BgComponent;