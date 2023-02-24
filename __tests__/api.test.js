describe('ACTION TESTS', () => {
  it('should fetch an array of categories', () => {
    const user = { id: 1, name: 'John', age: 20 }
    const expectedActions = [
      {
        type: fetchUser.pending.type,
      },
      {
        type: action_A.type,
        payload: {},
      },
      {
        type: fetchUser.fulfilled.type,
        payload: user,
      },
    ]
    const store = mockStore({})
    // mock API returns
    jest
      .spyOn(importFile, 'getUserById')
      .mockImplementation(() => Promise.resolve(user))
    return store.dispatch(fetchUser({ id: 1 })).then(() => {
      expect(
        store.getActions().map((action) => ({
          type: action.type,
          payload: action.payload,
        }))
      ).toEqual(expectedActions)
    })
  })
})
