import { Component, Input } from "@angular/core";

@Component({
    selector:"app-template",
    templateUrl:"./template.component.html"
})

export class TemplatComponent{
    @Input()data;
}