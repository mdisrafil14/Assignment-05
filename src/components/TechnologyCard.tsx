import type { Technology } from "../types/technology";

interface Props {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  added: boolean;
}

const TechnologyCard = ({ tech, onAdd, added }: Props) => {
  return (
    <div className='rounded-xl border bg-white p-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <img src={tech.icon} alt={tech.name} className="h-10 w-10" />

        <span className='rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-500'>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold">{tech.name}</h3>

      <p className='mt-2 text-sm leading-5 text-slate-500'>
        {tech.description}
      </p>

      <div className='mt-4 flex justify-between text-xs text-slate-500'>
        <span>{tech.category}</span>
        <span>⭐ {tech.rating}</span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className='mt-4 w-full rounded-md bg-slate-900 py-2 text-sm text-white disabled:bg-slate-300'
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;