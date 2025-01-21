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
      <div className="lead-content">
        <div className="avatar">
          <img src={lead.avatar} alt={lead.name} />
        </div>
        <div className="lead-info">
          <h3 className="company-name">{lead.company}</h3>
          <p className="person-info">{lead.name} · {lead.title}</p>
          <div className="activity-indicator">
            <span className="activity-dot" />
            <span>{lead.activity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};