import { Component, OnChanges, Input} from '@angular/core';
import { Task, Note } from '../models-classes';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnChanges {
  
  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    this.createForm();    
    this.taskForm.setValue({
      title: this.task.title,
      description: this.task.description,
      importance: this.task.importance,
      notes: this.task.notes
    });
    this.setNotes();
    this.logNoteChanges();
    this.timesChanged = 0;
  }

  @Input() task: Task;
  taskForm: FormGroup;

  //helper function to populate the form array for notes
  setNotes(): void {
    const notesFormGroups = this.task.notes.map(note => this.fb.group(note));
    const notesFormGroupsArray = this.fb.array(notesFormGroups);
    this.taskForm.setControl('notes', notesFormGroupsArray);

  }
  //helper function to create the needed formgroup
  createForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      importance: [5],
      notes: this.fb.array(this.task.notes)
    })
  }
  // getter that dynamically returns the notes from the task form as a FormArray
  get notes(): FormArray {
    return this.taskForm.get('notes') as FormArray;
  }

  //method to add a note.
  addNote(): void {
    this.notes.push(this.fb.group({
      reason: ['New Reason', ],
      thoughts: ['New thoughts']
    }));
  }

  //method to delete a note
  deleteNote(index): void {
    this.notes.removeAt(index);
  }

  //To help monitor the changes of a formControl instance.
  timesChanged: number;
  logNoteChanges(): void {
    const descriptionChangesArray = this.taskForm.get('title').valueChanges;
    descriptionChangesArray
    .debounceTime(3000)
    .subscribe(
      (value) => {console.log("Value change", value)}
    );
    
  }


}
