/**
 * action creator
 * 
 * An action creator is just a function that returns an object containing 2 (or more) properties.
 * 2 required properties are the `type` and `payload`. `payload` can be named anything  (such as `data`)
 * but it is common convention to refer to it as `payload`.
 * 
 * An action creator is literally just a function that returns an object that tells redux, "hey, something
 * happened (like an action). Here is somee information about the action that occured". 
 * It's then up to the reducer to determine how that affects your store.
 * 
 * We can just declare this on the component directly, however, to work with redux we need to connect it 
 * user the `connect` function.
 */
export function selectUser(user) {
    console.log("cilcked!", user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    };
}

export default {
    selectUser
}
