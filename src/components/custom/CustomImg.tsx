import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

const fallbackImg = '/assets/img/no-image.png';

export function imgRender(src: string): string {
  if (!src || src === 'null' || src === 'undefined') {
    return fallbackImg;
  }
  if (src.startsWith('/assets') || src.startsWith('data') || src.startsWith('https')) {
    return src;
  } else {
    return `https://${process.env.NEXT_PUBLIC_S3_PREFIX}/${src}`;
  }
}

interface CustomImgProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string | null | undefined;
  alt: string | null | undefined;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fallbackSrc?: string;
}

const CustomImg: React.FC<CustomImgProps> = ({ src, alt, width, height, fallbackSrc = fallbackImg, ...props }) => {
  const [imgSrc, setImgSrc] = useState<string>(fallbackSrc);
  const [imgAlt, setImgAlt] = useState<string>('unknown');

  useEffect(() => {
    // 값이 null, undefined, 또는 문자열 'null','undefined'인 경우 기본 이미지 사용
    if (!src || src === 'null' || src === 'undefined') {
      setImgSrc(fallbackSrc);
    } else {
      setImgSrc(imgRender(src));
    }

    if (!alt || alt === 'alt' || src === 'undefined') {
      setImgAlt('unknown');
    } else {
      setImgAlt(alt);
    }
  }, [src, alt, fallbackSrc]);

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setImgAlt('unknown');
  };

  return (
    <Image
      src={imgSrc}
      alt={imgAlt}
      width={width}
      height={height}
      onError={handleError}
      {...props}
    />
  );
};

export default CustomImg;
