import { ExamplePipe } from '../app/pipes/example.pipe';

describe('ExamplePipe', () => {
  it('create an instance', () => {
    const pipe = new ExamplePipe();
    expect(pipe).toBeTruthy();
  });
});
