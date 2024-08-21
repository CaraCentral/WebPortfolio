import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  projects: Project[] = [
    {id:0, name: "Web Portfolio", pictures: [], projectLink: "", summary:"A website to show off my expertise.", description: "uhhh, yeah what I said", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]}
    
  ];

  constructor(private titleService: Title){
    this.titleService.setTitle('Cara Roche - Portfolio')
  }

}
