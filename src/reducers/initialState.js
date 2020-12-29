const initialState = {
    user: {
        connected: false,
        data: {},
        requestsLogin: [],
        users: []
    },
    alert: {
        type: '',
        message: '',
        activated: false,
        notifications: []
    }
}
export default initialState;