import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface LeadCardProps {
  lead: {
    id: string;
    name: string;
    company: string;
    title: string;
    avatar: string;
    activity: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export const LeadCard = ({ lead, isActive, onClick }: LeadCardProps) => {
  return (
    <div className={`lead-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <img src={lead.avatar} alt={lead.name} className="object-cover" />
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-sm">{lead.company}</h3>
              <p className="text-sm text-muted-foreground truncate">{lead.name} · {lead.title}</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="activity-indicator">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs">{lead.activity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};