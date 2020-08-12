import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	TableModule,
	InputModule,
	SelectModule,
	ButtonModule
} from 'carbon-components-angular';
// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { StarterHomeComponent } from './starter-home/starter-home.component';
import { PillboxListComponent } from './pillbox-list/pillbox-list.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		StarterHomeComponent,
		PillboxListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		UIShellModule,
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		TableModule,
		InputModule,
		SelectModule,
		ButtonModule,
		AppRoutingModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
