import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewchildComponent, Item, ItemComponent } from './viewchild/viewchild.component';
import { ViewchildrenComponent, ChildCmp } from './viewchildren/viewchildren.component';
import { GroupTitle, ChildButtonComp, ButtonGroup, ContentChildComp } from './contentChild/content-child.component';
import { ContentChildrenComp, Word, WordGroup } from './contentChildren/content-children.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildComponent, ItemComponent, Item,
    ViewchildrenComponent, ChildCmp,
    ContentChildComp, ButtonGroup, ChildButtonComp, GroupTitle,
    ContentChildrenComp, Word, WordGroup
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
