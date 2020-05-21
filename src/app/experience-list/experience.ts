export class Experience {
    company: string;
    location: string;
    role: string;
    description: string[];
    skills: string[];
  
    constructor(company: string, location: string, role: string, description: string[], skills: string[]) {
      this.company = company;
      this.location = location;
      this.role = role;
      this.description = description;
      this.skills = skills;
    }
  }