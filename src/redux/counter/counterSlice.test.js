import reducer, {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from './counterSlice';

describe('counterSlice', () => {
  const initialState = { value: 0, history: [] };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle increment', () => {
    const prevState = { value: 0, history: [] };
    expect(reducer(prevState, increment())).toEqual({
      value: 1,
      history: [0],
    });
  });

  it('should handle decrement', () => {
    const prevState = { value: 2, history: [] };
    expect(reducer(prevState, decrement())).toEqual({
      value: 1,
      history: [2],
    });
  });

  it('should handle reset', () => {
    const prevState = { value: 9, history: [] };
    expect(reducer(prevState, reset())).toEqual({
      value: 0,
      history: [9],
    });
  });

  it('should handle incrementByAmount', () => {
    const prevState = { value: 3, history: [] };
    expect(reducer(prevState, incrementByAmount(7))).toEqual({
      value: 10,
      history: [3],
    });
  });

  it('should keep only last 5 values in history', () => {
    const prevState = {
      value: 5,
      history: [1, 2, 3, 4, 5],
    };
    expect(reducer(prevState, increment())).toEqual({
      value: 6,
      history: [5, 1, 2, 3, 4], 
    });
  });
});
