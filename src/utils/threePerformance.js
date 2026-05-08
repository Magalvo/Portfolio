import { useEffect, useMemo, useRef, useState } from 'react';

const canUseBrowserApis = () => typeof window !== 'undefined';

const getReducedMotionPreference = () =>
  canUseBrowserApis() &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const getIsConstrainedDevice = () => {
  if (!canUseBrowserApis()) return false;

  const memory = navigator.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const dpr = window.devicePixelRatio || 1;

  return memory <= 4 || cores <= 4 || dpr > 2;
};

export const useThreePerformance = () => {
  const [reducedMotion, setReducedMotion] = useState(
    getReducedMotionPreference
  );
  const [isConstrained, setIsConstrained] = useState(getIsConstrainedDevice);

  useEffect(() => {
    if (!canUseBrowserApis()) return undefined;

    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () =>
      setReducedMotion(getReducedMotionPreference());
    const handleResize = () => setIsConstrained(getIsConstrainedDevice());

    mediaQuery?.addEventListener?.('change', handleMotionChange);
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery?.removeEventListener?.('change', handleMotionChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return useMemo(() => {
    const currentDpr = canUseBrowserApis() ? window.devicePixelRatio || 1 : 1;
    const maxDpr = isConstrained ? 1 : Math.min(currentDpr, 1.5);

    return {
      autoRotate: !reducedMotion,
      dpr: [1, maxDpr],
      gl: {
        alpha: true,
        antialias: !isConstrained,
        powerPreference: 'high-performance'
      },
      isConstrained,
      reducedMotion
    };
  }, [isConstrained, reducedMotion]);
};

export const useDeferredCanvas = (rootMargin = '250px') => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(!canUseBrowserApis());

  useEffect(() => {
    if (!canUseBrowserApis() || !ref.current) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShouldRender(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, shouldRender];
};
