export class Todo { //export<=>public

        id: number;
        title = '';
        completed = false;


        constructor(values: Object={})//attends un parametre qui sappelle value
        {
            Object.assign(this,values);
        }
}
