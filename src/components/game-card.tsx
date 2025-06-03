import { GameCardProps } from '@/lib/types';

export default function GameCard({
  title,
  imageUrl,
  streaming,
  isOnline,
}: GameCardProps) {
  return (
    <div
      className='relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg group'
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute bottom-0 w-full bg-black/60 text-white px-3 py-2 flex justify-between items-center'>
        <span className='text-sm'>
          {streaming}
          {title}
        </span>
        <span
          className={`w-2 h-2 rounded-full ${
            isOnline ? 'bg-green-400' : 'bg-red-400'
          }`}
        />
      </div>
    </div>
  );
}
