import { Clima } from './clima';

export class Ciudad {
    public name: string;
    public country: String;
    public aptCode: string;
    public clima?: Clima;

    constructor(name,country,aptCode,clima?)
    {
        this.name = name,
        this.country = country,
        this.aptCode = aptCode,
        this.clima = clima
    }
}
