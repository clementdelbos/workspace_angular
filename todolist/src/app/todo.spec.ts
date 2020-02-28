import { Todo } from './todo';//iport de la classe totdo epuis le fichier todo

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo({id: 1})).toBeTruthy();
  });//lambda équivalente à un assertNotNull
});
