import { Component, OnInit } from '@angular/core';
import { TrainingContent } from '../../models/training-content.model';
import { TrainingContentService } from '../../services/training-content.service';

@Component({
  selector: 'app-trainingcontent-list',
  templateUrl: './trainingcontent-list.component.html',
  styleUrls: ['./trainingcontent-list.component.css']
})
export class TrainingcontentListComponent implements OnInit {
  trainingContents: TrainingContent[] = [];

  constructor(private trainingContentService: TrainingContentService) { }

  ngOnInit() {
    this.loadTrainingContents();
  }

  loadTrainingContents() {
    this.trainingContentService.getTrainingContents().subscribe(
      (contents) => {
        this.trainingContents = contents;
      },
      (error) => {
        console.error('Error fetching training contents:', error);
      }
    );
  }
}
