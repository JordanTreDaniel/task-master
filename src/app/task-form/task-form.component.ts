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
  get notes(): FormArray {
    return this.taskForm.get('notes') as FormArray;
  }
  addNote(): void {
    this.notes.push(this.fb.group({
      reason: ['New Reason', ],
      thoughts: ['New thoughts']
    }));
  }
  deleteNote(index): void {
    this.notes.removeAt(index);
  }

}
