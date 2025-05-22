import { Component, ViewChild } from '@angular/core';
import { RichTextEditor, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-text-editor',
  standalone: false,
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  @ViewChild('exampleRTE')
  public componentObject!: RichTextEditorComponent;

  private buttonElement!: HTMLElement | null;
  private htmlcontent = this.componentObject.getHtml();
  
  getFormattedContent(){
    this.buttonElement = document.getElementById('button');
  }

  public customToolbar: object = {
    items: [ 'Bold', 'Italic', 'Underline', 'Undo', 'Redo', 'CreateTable', 'Image', 'CreateLink']
  };

}
