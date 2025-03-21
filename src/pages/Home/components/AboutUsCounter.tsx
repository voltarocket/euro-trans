import React, { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
    target: number;
    duration: number;
}

const AboutUsCounter:React.FC<AnimatedNumberProps> = ({target, duration}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true);
                observer.disconnect();
            }
        },
        {
        threshold: 0.5,
        }
    );
    if (ref.current){
        observer.observe(ref.current);
    }
        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }
    },[])

    useEffect(() => {
        if(!isVisible) return;
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
            setCount(Math.ceil(start));
            }
        }, 16)
    
        return () => 
            clearInterval(timer);
        }, [isVisible, target, duration])
    

    return (
    <div ref={ref}>
        <span>{count}</span>
    </div>
    )
}
export default AboutUsCounter;