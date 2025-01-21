import { Building2, Users, MapPin, LinkedinIcon } from "lucide-react";

interface LeadDetailProps {
  lead?: {
    id: string;
    name: string;
    company: string;
    title: string;
    avatar: string;
    location: string;
    employeeCount: string;
    industry: string;
    description: string;
  };
}

export const LeadDetail = ({ lead }: LeadDetailProps) => {
  if (!lead) {
    return (
      <div className="detail-section">
        <p>Select a lead to view details</p>
      </div>
    );
  }

  return (
    <>
      <div className="detail-header">
        <div className="detail-avatar">
          <img src={lead.avatar} alt={lead.name} />
        </div>
        <div className="detail-info">
          <div className="detail-name">
            {lead.name}
            <span className="badge">New lead</span>
          </div>
          <p className="detail-title">{lead.title}</p>
          <button className="linkedin-button">
            <LinkedinIcon size={16} />
            View LinkedIn Profile
          </button>
        </div>
      </div>

      <div className="company-card">
        <h3 className="company-header">{lead.company}</h3>
        <p className="company-description">{lead.description}</p>

        <div className="company-stats">
          <div className="stat-item">
            <Building2 className="stat-icon" size={20} />
            <span>{lead.industry}</span>
          </div>
          <div className="stat-item">
            <Users className="stat-icon" size={20} />
            <span>{lead.employeeCount} employees</span>
          </div>
          <div className="stat-item">
            <MapPin className="stat-icon" size={20} />
            <span>{lead.location}</span>
          </div>
        </div>
      </div>
    </>
  );
};