export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red', 'white');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue', 'white');
    static readonly PYTHON = new Tag('Python', 'Yellow', 'black')
    static readonly JAVA = new Tag('Java', 'deepskyblue', 'white')
    static readonly CSS = new Tag('CSS', 'darkblue', 'white')

    private constructor(private readonly key: string, public readonly color: string, public readonly tcolor: string){

    }

    toString(){
        return this.key
    }
}