import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '../data/idmContent';
import { GeometricEmblem } from './GeometricEmblem';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestConsultation: (projectName: string) => void;
}

export function CaseStudyModal({
  project,
  onClose,
  onRequestConsultation,
}: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1521]/60 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-[640px] max-h-[88dvh] overflow-y-auto border border-[#D8DEE6] bg-[#F7F8FA] p-6 sm:p-10 text-[#141C27] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <GeometricEmblem emblem={project.emblem} className="w-6 h-6 text-[#334155]" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#64748B]">
              {project.category} · {project.industry}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-10 w-10 items-center justify-center border border-[#DCE1E8] text-[#5A6577] transition-colors hover:border-[#141C27] hover:text-[#141C27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141C27]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3
          id="case-study-title"
          className="mt-6 font-serif text-[32px] leading-[1.15] text-[#141C27]"
        >
          {project.name}
        </h3>
        <p className="mt-1.5 text-[13.5px] text-[#64748B]">{project.stack}</p>

        <p className="mt-6 text-[15px] leading-[1.75] text-[#475569]">{project.summary}</p>

        <div className="mt-8 grid grid-cols-3 border-y border-[#DCE1E8] divide-x divide-[#DCE1E8]">
          {project.outcomes.map((outcome) => (
            <div key={outcome.label} className="py-5 pr-4 first:pl-0 pl-4">
              <div className="font-serif text-[26px] sm:text-[30px] leading-none text-[#141C27] tabular-nums">
                {outcome.value}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#64748B]">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>

        {project.testimonial && (
          <blockquote className="mt-7 bg-[#EEF1F5] p-6 border border-[#DCE1E8]">
            <p className="font-serif text-[17px] leading-[1.5] text-[#141C27]">
              “{project.testimonial.quote}”
            </p>
            <footer className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase text-[#64748B]">
              {project.testimonial.author} — {project.testimonial.role}
            </footer>
          </blockquote>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onRequestConsultation(project.name)}
            className="inline-flex items-center gap-2 bg-[#141C27] px-6 py-3.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#1E293B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141C27]"
          >
            <span>Request Similar Roadmap</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#5A6577] transition-colors hover:text-[#141C27] py-2"
          >
            Back to work
          </button>
        </div>
      </div>
    </div>
  );
}
