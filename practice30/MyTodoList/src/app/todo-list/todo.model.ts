export class Todo {
    private title = '';
    private completed = false;
    private editMode = false;

    constructor(title: string){
        this.title = title  || '';
    }

    get done():boolean{
        return this.completed;
    }

    getTitle():string{
        return this.title;
    }
    setTitle(title:string):void{
        this.title = title;
    }


    get editmode():boolean{
        return this.editMode;
    }
    set editmode(bl:boolean){
        this.editMode = bl;
    }

    toggleCompletion():void{
        this.completed = !this.completed;
    }

    setCompleted(completed: boolean){
        this.completed = completed;
    }
    
}
