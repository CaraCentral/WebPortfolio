import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  projects: Project[] = [
    {id:0, name: "Web Portfolio", pictures: ["projImg1.png","projImg2.png","projImg3.png"], projectLink: "https://github.com/CaraCentral/WebPortfolio", summary:"A website to show off my expertise.", description: "uhhh, yeah what I said", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id:1, name: "Review Website", pictures: ["projImg1.png","projImg2.png","projImg3.png"], projectLink: "", summary:"A website for my video game reviews.", description: "uhhh, yeah what I said", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},

  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  getProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('No Project that matches ID')
    }

    return project;
  }
}
