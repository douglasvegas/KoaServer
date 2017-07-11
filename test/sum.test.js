const sum = require('./sum.js');

describe('测试一下', () => {
  test('测试1+1', () => {
    expect(sum(1,1)).toBe(2)
  })

  test('测试1+2', () => {
    expect.assertions(1)
    expect(sum(1,2)).toBe(3)
  })
})

describe('测试两下', () => {
  test('测试2+1', () => {
    expect(sum(2,1)).toBe(3)
  })

  test('测试2+2', () => {
    expect.assertions(1)
    expect(sum(2,2)).toBe(4)
  })
})
