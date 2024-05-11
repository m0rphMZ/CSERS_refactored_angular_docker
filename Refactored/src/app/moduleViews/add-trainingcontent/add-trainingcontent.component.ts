import { Component } from '@angular/core';
import { TrainingContent } from '../../models/training-content.model';
import { TrainingContentService } from '../../services/training-content.service';

@Component({
  selector: 'app-add-trainingcontent',
  templateUrl: './add-trainingcontent.component.html',
  styleUrls: ['./add-trainingcontent.component.css']
})
export class AddTrainingcontentComponent {
  trainingContent: TrainingContent = {
    id: 0,
    title: '',
    description: '',
    quizzes: [],
    type: '', // Initialize type as empty string
    createdDate: new Date(),
    completed: false,
    estimatedTime: 0,
    content: null,
    contentUrl: '',
    videoDuration: 0
  };

  constructor(private trainingContentService: TrainingContentService) {}

  onSubmit() {
    // Here, you can map the string type from the form to your desired enum value
    // For simplicity, I'm directly using the string value
    this.trainingContentService.createTrainingContent(this.trainingContent).subscribe(
      (response) => {
        console.log('Training content created successfully:', response);
        // Reset the form or perform other actions after successful creation
      },
      (error) => {
        console.error('Error creating training content:', error);
        // Handle error accordingly
      }
    );
  }
}
