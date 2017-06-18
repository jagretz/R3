/**
 * MUST return a state. We set this to null which will throw an `undefined` error on application startup.
 * But, that allows us to define conditional logic inside of our component. Like what you want to show for the
 * initial load/render.
 */
export default function activeUser(state = null, action) {
    switch(action.type) {
        case "USER_SELECTED":
            return action.payload;
        default:
            console.error(`No known action of type ${action.type}`);
            break;
    }
    return state;
}