var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var EditorComponent = (function () {
    function EditorComponent() {
        this.languages = ['Java', 'C++', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Example {\n      public static void main(String[] args) {\n          // Type your Java code here\n      }\n}",
            'C++': "#include <iostream>\n    using namespace std;\n    \u200B\n    int main() {\n       // Type your C++ code here\n       return 0;\n}",
            'Python': "class Solution:\n        def example():\n            # Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.css']
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=../../../../src/app/editor/editor.component.js.map