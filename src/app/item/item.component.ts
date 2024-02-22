import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {

  items!: any[]; // Marquée comme optionnelle avec le "!"

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des éléments', error);
      }
    );
  }

}
