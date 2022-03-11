import { Component } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "calculator",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent { 
    constructor() { }
    operation: string = '';
    result: string= '';

    append(element: string){
        this.operation += element;
    }
    
    undo(){
        if (this.operation != ''){
            this.operation = this.operation.slice(0, -1)
        }
    }
    
    clear(){
        this.operation = '';
    }
    
    evaluate(){
        try{
            this.result = eval(this.operation.replace("X","*"));
            console.log(this.result);
        }catch(e){
            console.error("No quiero Evaluar la expresion!");
            dialogs.alert({title: 'Error', message: 'No puedo evaluar la expresion!', okButtonText: 'OK'});
        }
    }

    ngOnInit(): void {
    }
}