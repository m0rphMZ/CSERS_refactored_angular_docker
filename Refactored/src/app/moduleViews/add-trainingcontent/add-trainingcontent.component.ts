import { Component } from '@angular/core';
import { TrainingContent } from '../../models/training-content.model';
import { TrainingContentService } from '../../services/training-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trainingcontent',
  templateUrl: './add-trainingcontent.component.html',
  styleUrls: ['./add-trainingcontent.component.css']
})
export class AddTrainingcontentComponent {

  showSuccessMessage = false;

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

  constructor(private trainingContentService: TrainingContentService, private router: Router) {}

  onSubmit() {
    this.trainingContentService.createTrainingContent(this.trainingContent).subscribe(
      (response) => {
        console.log('Training content created successfully:', response);

        // Show success message
        this.showSuccessMessage = true;

        // Redirect after a short delay
        setTimeout(() => {
          this.router.navigate(['/training-content']);
          this.showSuccessMessage = false; // Hide success message after redirect (optional)
        }, 1500); 

        // Optionally reset the form
        // this.trainingContent = { /* ... default values ... */ };
        // or
        // this.trainingForm.reset(); // Assuming you have #trainingForm="ngForm" in your template
      },
      (error) => {
        console.error('Error creating training content:', error);
        // Handle the error (e.g., display an error message to the user)
        // ... your error handling logic ...
      }
    );
  }
}
