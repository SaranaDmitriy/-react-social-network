let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', numLike: '15' },
                { id: 2, message: "It's my first post", numLike: '10' },
                { id: 3, message: "Work?", numLike: '7' },
                { id: 4, message: "Hello", numLike: '1' },
            ],
            newPostText: 'Hello Amigos'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimka', avatar: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' },
                { id: 2, name: 'Valerka', avatar: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' },
                { id: 3, name: 'Vita', avatar: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' },
                { id: 4, name: 'Maksik', avatar: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' },
                { id: 5, name: 'Bratishkin', avatar: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' },
                { id: 6, name: 'Tatiyana', avatar: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Good morning' },
                { id: 6, message: 'Miya' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changes');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                numLike: 0
            };
            this._state.profilePage.newPostText = '';
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;