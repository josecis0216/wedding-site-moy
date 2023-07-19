export default {
    state() {
        return {
            requests: [],
            guestList: []
        };
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        },
        addGuest(state, payload) {
            state.guestList.push(payload);
        },
        setRequests(state, payload) {
            state.requests = payload;
        },
        setGuestList(state, payload) {
            state.guestList = payload;
        }
    },
    actions: {
        async rsvp(context, payload) {
            const requestData = {
                fullName: payload.fullName,
                brideOrGroom: payload.brideOrGroom,
                guests: payload.guests
                //   message: payload.message,
            };
            const response = await fetch(`https://moy-ashley-default-rtdb.firebaseio.com/requests.json`, {
                method: 'POST',
                body: JSON.stringify(requestData)
            })

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'failed to send request.');
                throw error;
            }

            requestData.id = responseData.name;
            requestData.coachId = payload.coachId;

            context.commit('addRequest', requestData);
        },
        async addToGuestList(context, payload) {
            const requestData = {
                fullName: payload.fullName,
                brideOrGroom: payload.brideOrGroom,
                guests: payload.guests
                //   message: payload.message,
            };
            const response = await fetch(`https://moy-ashley-default-rtdb.firebaseio.com/guest-list.json`, {
                method: 'POST',
                body: JSON.stringify(requestData)
            })

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'failed to send request.');
                throw error;
            }

            requestData.id = responseData.name;
            requestData.coachId = payload.coachId;

            context.commit('addRequest', requestData);
        },
        async loadRequests(context) {
            const response = await fetch(`https://moy-ashley-default-rtdb.firebaseio.com/requests.json`);

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch data.');
                throw error;
            }

            const requests = [];
            for (const key in responseData) {
                const requestData = {
                    id: key,
                    fullName: responseData[key].fullName,
                    brideOrGroom: responseData[key].brideOrGroom,
                    guests: responseData[key].guests
                };
                requests.push(requestData);
                // console.log(requestData);
            }
            context.commit('setRequests', requests);
        },
        async loadGuestList(context) {
            const response = await fetch(`https://moy-ashley-default-rtdb.firebaseio.com/guest-list.json`);

            const responseData = await response.json();

            if (!responseData.ok) {
                const error = new Error(responseData.message || 'Failed to fetch data.');
                throw error; 
            }

            const guestList = [];
            for (const key in responseData) {
                const requestData = {
                    id: key,
                    fullName: responseData[key].fullName,
                    guests: responseData[key].guests
                };
                guestList.push(requestData);
            }
            context.commit('setGuestList', guestList);
        }
    },
    getters: {
        requests(state) {  // _, _2, rootGetters
            // const coachId = rootGetters.userId;
            return state.requests; //   return state.requests.filter((req) => req.coachId === coachId);
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        },
        guestList(state) {
            return state.guestList.guests;
        }
    },
};
