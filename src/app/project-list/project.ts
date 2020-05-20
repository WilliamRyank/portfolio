export class Project {
    imgPath: string;
    projectName: string;
    projectDate: string;
    projectDesc: string;
    projectSkills: string[];
    projectLink: string;
  
    constructor(imgPath: string, projectName: string, projectDate: string, projectDesc:string, projectSkills: string[], projectLink: string) {
      this.imgPath = imgPath;
      this.projectName = projectName;
      this.projectDate = projectDate;
      this.projectDesc = projectDesc;
      this.projectSkills = projectSkills;
      this.projectLink = projectLink; 
    }
  }