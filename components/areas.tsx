import React from 'react';

interface AreasProps {
  areas: string[];
}

const Areas: React.FC<AreasProps> = ({ areas }) => {
  if (!areas) return null;
  return (
    <div className="flex flex-wrap gap-4">
      {areas.map((industry: string) => (
        <span key={industry} className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 text-sm">
          {industry}
        </span>
      ))}
    </div>
  );
};

export default Areas;