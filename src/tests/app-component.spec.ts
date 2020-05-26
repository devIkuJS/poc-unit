import "reflect-metadata";
import { AppComponent } from "../app/app.component";
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from "nativescript-angular/testing";
import { ComponentFixture } from "@angular/core/testing";
    describe("AppComponent", () => {
      
      beforeEach(nsTestBedBeforeEach([AppComponent]));
      afterEach(nsTestBedAfterEach(false));

        it("should be: Prueba AppComponent", () => {
            return nsTestBedRender(AppComponent).then((fixture: ComponentFixture<AppComponent>) => {
                const component = fixture.debugElement.componentInstance;
                expect(component).toBeTruthy();
                });;
        });
        
    });



