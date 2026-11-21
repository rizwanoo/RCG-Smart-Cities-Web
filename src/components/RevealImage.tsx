import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  objectPosition?: string;
  fallbackTitle?: string;
}

export default function RevealImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  objectPosition = 'center center',
  fallbackTitle,
}: RevealImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#142B45] text-white/85 p-8 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 mb-3 text-[#32BFD1]" aria-hidden="true" />
        <p className="text-sm font-medium text-center max-w-xs">{fallbackTitle || alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={{ objectPosition }}
      className={className}
    />
  );
}
