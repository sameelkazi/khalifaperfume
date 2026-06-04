import { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 15 });

  // Map progress to width/height
  const mediaWidth = useTransform(
    smoothProgress,
    [0, 0.75],
    [300, isMobileState ? window.innerWidth : window.innerWidth]
  );
  
  const mediaHeight = useTransform(
    smoothProgress,
    [0, 0.75],
    [400, isMobileState ? window.innerHeight : window.innerHeight]
  );

  const textTranslateX = useTransform(smoothProgress, [0, 0.75], [0, isMobileState ? 180 : 150]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);
  const contentOpacity = useTransform(smoothProgress, [0.7, 0.95], [0, 1]);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={containerRef}
      className='relative w-full h-[220vh] transition-colors duration-700 ease-in-out'
    >
      {/* Sticky container that remains in viewport while parent scrolls */}
      <div className='sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start items-center bg-[#130802]'>
        
        {/* Background Image */}
        <motion.div
          className='absolute inset-0 z-0 h-full w-full'
          style={{ opacity: bgOpacity }}
        >
          <img
            src={bgImageSrc}
            alt='Background'
            className='w-screen h-screen object-cover object-center'
          />
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>

        {/* Inner viewport container */}
        <div className='relative z-10 w-full h-full flex flex-col items-center justify-center container mx-auto'>
          
          {/* Centered Media wrapper */}
          <motion.div
            className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
            style={{
              width: mediaWidth,
              height: mediaHeight,
              maxWidth: '100vw',
              maxHeight: '100vh',
              boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            {mediaType === 'video' ? (
              <div className='relative w-full h-full pointer-events-none'>
                <video
                  src={mediaSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload='auto'
                  className='w-full h-full object-cover'
                  controls={false}
                />
                <div className='absolute inset-0 bg-black/20' />
              </div>
            ) : (
              <div className='relative w-full h-full'>
                <img
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/30' />
              </div>
            )}
          </motion.div>

          {/* Floating labels (scrolling left and right) */}
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-between py-24 pointer-events-none'>
            
            <div className='flex flex-col items-center text-center'>
              {date && (
                <motion.p
                  className='text-2xl text-[#F5E6C8] font-serif uppercase tracking-wider mb-2'
                  style={{ x: useTransform(textTranslateX, (val) => -val * 2) }}
                >
                  {date}
                </motion.p>
              )}
              {scrollToExpand && (
                <motion.p
                  className='text-sm text-[#A89060] font-sans tracking-widest uppercase'
                  style={{ x: useTransform(textTranslateX, (val) => val * 2) }}
                >
                  {scrollToExpand}
                </motion.p>
              )}
            </div>

            {/* Split Title */}
            <div
              className={`flex items-center justify-center text-center gap-2 md:gap-4 w-full flex-col ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <motion.h2
                className='text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-[#F5E6C8]'
                style={{ x: useTransform(textTranslateX, (val) => -val * 2.5) }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className='text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-[#F5E6C8]'
                style={{ x: useTransform(textTranslateX, (val) => val * 2.5) }}
              >
                {restOfTitle}
              </motion.h2>
            </div>

          </div>
        </div>

        {/* Content Overlay that fades in at end of scroll */}
        <motion.div
          className='absolute inset-0 z-20 flex flex-col items-center justify-center overflow-y-auto bg-[#130802]/30'
          style={{
            opacity: contentOpacity,
            pointerEvents: useTransform(contentOpacity, (v) => (v > 0.5 ? 'auto' : 'none')),
          }}
        >
          {children}
        </motion.div>

      </div>
    </div>
  );
};

export default ScrollExpandMedia;
