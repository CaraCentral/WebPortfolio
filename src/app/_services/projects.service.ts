import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  projects: Project[] = [
    {id:0, name: "Web Portfolio", pictures: ["projImg1.png","projImg2.png","projImg3.png"], projectLink: "https://github.com/CaraCentral/WebPortfolio", summary:"A website to show off my coding experience.", description: "uhhh, yeah what I said", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id:1, name: "Review Website", pictures: ["projImg1.png","projImg2.png","projImg3.png"], projectLink: "", summary:"A website for my video game reviews.", description: "uhhh, yeah what I said", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id:2, name: "Test Java Project", pictures: ["projImg1.png","projImg2.png","projImg3.png"], projectLink: "", summary:"Testing for filters", description: "uhhh, yeah what I said", tags: [Tag.JAVA]},
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
  getProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
