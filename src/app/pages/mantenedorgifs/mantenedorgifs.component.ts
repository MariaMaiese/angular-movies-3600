import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GifLocal } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mantenedorgifs',
  templateUrl: './mantenedorgifs.component.html',
  styleUrls: ['./mantenedorgifs.component.css']
})
export class MantenedorgifsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  nuevoGif: GifLocal = {};

  nuevoGifForm: FormGroup = this.fb.group({
    "name": new FormControl(null, Validators.required),
    "imagen": new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
  }

  get name() {
    return this.nuevoGifForm.get("name")
  }

}
