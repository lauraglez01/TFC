import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BooksModule } from '../books/books.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
@NgModule({
  declarations: [
    NavbarComponent,
    MainPageComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    StoriesComponent,
    TextEditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BooksModule,
    FormsModule,
    PdfViewerModule,
    RichTextEditorModule,
  ],
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService
  ],
  exports: [
    MainPageComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SectionsModule { }
