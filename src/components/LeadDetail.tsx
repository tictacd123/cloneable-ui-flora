import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
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
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Select a lead to view details</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-start gap-4 mb-8">
        <Avatar className="h-16 w-16">
          <img src={lead.avatar} alt={lead.name} className="object-cover" />
        </Avatar>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-semibold">{lead.name}</h2>
            <Badge className="badge-primary">New lead</Badge>
          </div>
          <p className="text-lg text-muted-foreground mb-3">{lead.title}</p>
          <Button variant="outline" size="sm" className="gap-2">
            <LinkedinIcon className="h-4 w-4" />
            View LinkedIn Profile
          </Button>
        </div>
      </div>

      <Card className="p-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">{lead.company}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{lead.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">{lead.industry}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">{lead.employeeCount} employees</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-base">{lead.location}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};