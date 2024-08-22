import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  python: boolean = false;
  java: boolean = false;
  css: boolean = false;
  angular: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Cara Roche - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filteredTags: Tag[] = [];
    if(this.typescript){
      filteredTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filteredTags.push(Tag.ANGULAR);
    }
    if(this.java){
      filteredTags.push(Tag.JAVA);
    }
    if(this.python){
      filteredTags.push(Tag.PYTHON);
    }
    if(this.css){
      filteredTags.push(Tag.CSS);
    }
    if(this.typescript||this.angular||this.java||this.python||this.css){
      this.filtering = true;
    } else{
      this.filtering = false;
    }
    this.projects = this.projectService.getProjectsByFilter(filteredTags);

  }

  ResetFilters(){
    this.typescript = false;
    this.java = false;
    this.angular = false;
    this.python = false;
    this.css = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }

}
