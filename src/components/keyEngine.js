import {ref} from "vue";
import * as SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';

export function keyEngine() {
    const pressedKeys = ref([])

    let playing;

    // const play = () => {
    //     playing = setInterval(() => {
    //         pressedKeys.value = [ Math.ceil(Math.random() * 89), Math.ceil(Math.random() * 89) ]
    //     }, 100)
    // }

    const stop = () => {
        clearInterval(playing)
    }

    const play = () => {
        const client = new SockJS("http://localhost:8080/ws");
        const stompClient = Stomp.over(client);



        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/midi', (message) => {
                pressedKeys.value = [Number.parseInt(message.body)]
            })
        })
    }

    return {
        pressedKeys,
        play,
        stop
    }
}
