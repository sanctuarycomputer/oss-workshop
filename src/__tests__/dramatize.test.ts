import { dramatize } from '../dramatize'

describe('dramatize', () => {
  it('adds an exclamation mark at the end of the word', () => {
    expect(dramatize('Hello, World')).toEqual('Hello, World!')
  })
})
