'use client';
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

import {ReactNode, useEffect, useState} from "react";

const fadeInVariant = {
    visible: { opacity: 1, scale: 1 , transition:{duration: 1}},
    hidden: { opacity: 0, scale: 0 },
}


const FadeInComponent = ({children}: Readonly<{
    children: ReactNode;
}>) => {
    const control = useAnimation()
    const [ref, inView] = useInView()
    const [isRendered, setIsRendered] = useState(false);
    useEffect(() => {
        if (!isRendered){
            if (inView) {
                control.start("visible");
                setIsRendered(true);
            }
            else {
                control.start("hidden");
            }
        }
    }, [control, inView]);
    return (
        <motion.div
            ref={ref}
            variants={fadeInVariant}
            initial="hidden"
            animate={control}
            className="box"
        >
            {children}
        </motion.div>
    );
};

export default FadeInComponent;