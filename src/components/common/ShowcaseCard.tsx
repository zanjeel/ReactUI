import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ShowcaseCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ title, description, image, url, author }) => {
  return (
    <div className="card group overflow-hidden h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-white m-4"
            aria-label={`Visit ${title} website`}
          >
            <span>Visit Site</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-xs mb-3">by {author}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;