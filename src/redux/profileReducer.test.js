import { default as profileReducer, addPostActionCreator, deletePostActionCreator } from "./profileReducer";

let state = {
    postsData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "First post" },
        { id: 3, message: "Second post" },
    ],

    profileInfo: null,
    status: ''
}
test('New post should be added', () => {

    let action = addPostActionCreator("New post text")
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(4);
    expect(newState.postsData[3].message).toBe('New post text');

});
test('message of new post should be correct', () => {

    let action = addPostActionCreator("New post text")
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(4);
    expect(newState.postsData[3].message).toBe('New post text');

});

test('length after deleting should be decrement', () => {
    
    let action = deletePostActionCreator(3)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(2); 
});

