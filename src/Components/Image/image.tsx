import Image from 'next/image';

type CustomImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 441,
  height = 600,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default CustomImage;