import {State} from "@/store/audiocontrol";
export interface UserState{
    isSigned:boolean;
}
export default {
    state: {
        isSigned:false
    },
    mutations: {
        changeIsMoving(state:UserState,payload:boolean) {
            state.isSigned=payload;
        }

    }
}